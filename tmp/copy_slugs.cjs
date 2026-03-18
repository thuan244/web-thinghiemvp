const fs = require('fs');
const path = require('path');

function slugify(text) {
  let str = text.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/[^a-z0-9]/g, '-');
  str = str.replace(/-+/g, '-');
  str = str.replace(/^-+/, '');
  str = str.replace(/-+$/, '');
  return str;
}

function processCopy(sourceDir, targetDir) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const files = fs.readdirSync(sourceDir);
  for (const file of files) {
    const oldPath = path.join(sourceDir, file);
    const ext = path.extname(file);
    const base = path.basename(file, ext);
    let newName = slugify(base) + ext.toLowerCase();
    
    if (newName === ext.toLowerCase()) {
        newName = file.toLowerCase().replace(/[^a-z0-9\-.]/g, '-');
    }

    const newPath = path.join(targetDir, newName);

    if (fs.statSync(oldPath).isDirectory()) {
      processCopy(oldPath, newPath);
    } else {
      if (!fs.existsSync(newPath)) {
        fs.copyFileSync(oldPath, newPath);
        console.log(`Copied file: ${oldPath} -> ${newPath}`);
      }
    }
  }
}

const rootOld = path.join('public', 'Phòng thí nghiệm');
const rootNew = path.join('public', 'phong-thi-nghiem');

if (fs.existsSync(rootOld)) {
  processCopy(rootOld, rootNew);
  console.log('Copy completed.');
} else if (fs.existsSync(rootNew)) {
  console.log('New folder already exists, proceeding to update TS.');
}

let tsFile = path.join('src', 'data', 'phongThiNghiem.ts');
if (fs.existsSync(tsFile)) {
  let content = fs.readFileSync(tsFile, 'utf8');
  content = content.replace(/path:\s*'([^']+)'/g, (match, urlPath) => {
    const parts = urlPath.split('/').filter(Boolean);
    const newParts = parts.map(part => {
      const lastDot = part.lastIndexOf('.');
      if (lastDot !== -1 && lastDot > 0 && part.toLowerCase().endsWith('.pdf')) {
        const name = part.slice(0, lastDot);
        const ext = part.slice(lastDot);
        return slugify(name) + ext.toLowerCase();
      }
      return slugify(part);
    });
    return `path: '/${newParts.join('/')}'`;
  });
  fs.writeFileSync(tsFile, content);
  console.log('Successfully updated paths in phongThiNghiem.ts');
}
console.log('Done script.');
