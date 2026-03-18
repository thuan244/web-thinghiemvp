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
    const isDir = fs.statSync(oldPath).isDirectory();
    let newName = '';

    if (isDir) {
        // Directories: slugify the whole name
        newName = slugify(file);
    } else {
        // Files: preserve extension
        const ext = path.extname(file);
        const base = path.basename(file, ext);
        newName = slugify(base) + ext.toLowerCase();
        
        if (slugify(base) === '') {
            newName = file.toLowerCase().replace(/[^a-z0-9\-.]/g, '-');
        }
    }

    const newPath = path.join(targetDir, newName);

    if (isDir) {
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

// Remove the mistakenly created bad folder so we start fresh
if (fs.existsSync(rootNew)) {
    console.log('Removing old incorrect phong-thi-nghiem...');
    fs.rmSync(rootNew, { recursive: true, force: true });
}

if (fs.existsSync(rootOld)) {
  processCopy(rootOld, rootNew);
  console.log('Copy completed.');
} else {
  console.log('Source directory not found!');
}

console.log('Done script!');
