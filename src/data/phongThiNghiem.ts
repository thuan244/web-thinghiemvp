export interface LabNode {
  slug: string;
  label: string;
  type: 'listing' | 'pdf';
  pdfs?: { name: string; path: string }[];
  children?: LabNode[];
}

export const labTree: LabNode[] = [
  {
    slug: 'ho-so-nang-luc',
    label: 'Hồ sơ năng lực',
    type: 'pdf',
    pdfs: [{ name: 'HSNL-Las-53003', path: '/HSNL-Las-53003.pdf' }],
  },
  {
    slug: '1-cong-bo-cong-khai-thong-tin',
    label: '1. Công bố công khai thông tin',
    type: 'pdf',
    pdfs: [{ name: 'Công bố công khai năng lực PTN', path: '/phong-thi-nghiem/1-cong-bo-cong-khai-thong-tin/cong-bo-cong-khai-nang-luc-ptn.pdf' }],
  },
  {
    slug: '2-ho-so-phap-ly-cac-quyet-dinh',
    label: '2. Hồ sơ pháp lý, các quyết định',
    type: 'listing',
    children: [
      {
        slug: 'giay-chung-nhan-dkkd',
        label: 'Giấy chứng nhận ĐKKD',
        type: 'pdf',
        pdfs: [{ name: 'DKKD', path: '/phong-thi-nghiem/2-ho-so-phap-ly-cac-quyet-dinh/giay-chung-nhan-dkkd/dkkd.pdf' }],
      },
      {
        slug: 'qd-thanh-lap-phong-tn',
        label: 'QĐ thành lập phòng TN',
        type: 'pdf',
        pdfs: [{ name: 'II.2 QĐ thành lập PTN', path: '/phong-thi-nghiem/2-ho-so-phap-ly-cac-quyet-dinh/qd-thanh-lap-phong-tn/ii-2-qd-thanh-lap-ptn.pdf' }],
      },
      {
        slug: 'qd-bo-nhiem-tp-pp-tn',
        label: 'QĐ bổ nhiệm TP, PP TN',
        type: 'pdf',
        pdfs: [
          { name: 'II.3 QĐ bổ nhiệm trưởng PTN', path: '/phong-thi-nghiem/2-ho-so-phap-ly-cac-quyet-dinh/qd-bo-nhiem-tp-pp-tn/ii-3-qd-bo-nhiem-truong-ptn.pdf' },
          { name: 'QĐ BN PPTN', path: '/phong-thi-nghiem/2-ho-so-phap-ly-cac-quyet-dinh/qd-bo-nhiem-tp-pp-tn/qd-bn-pptn.pdf' },
        ],
      },
      {
        slug: 'ds-can-bo-ptn',
        label: 'DS cán bộ PTN',
        type: 'pdf',
        pdfs: [{ name: 'II.4 Danh sách cán bộ', path: '/phong-thi-nghiem/2-ho-so-phap-ly-cac-quyet-dinh/ds-can-bo-ptn/ii-4-danh-sach-can-bo.pdf' }],
      },
      {
        slug: 'qd-phan-cong-nhiem-vu',
        label: 'Quyết định phân công nhiệm vụ',
        type: 'pdf',
        pdfs: [{ name: 'II.5 Phân công nhiệm vụ', path: '/phong-thi-nghiem/2-ho-so-phap-ly-cac-quyet-dinh/quyet-dinh-phan-cong-nhiem-vu/ii-5-phan-cong-nhiem-vu.pdf' }],
      },
      {
        slug: 'bang-cap-chung-chi-ptn',
        label: 'Bằng cấp, chứng chỉ PTN',
        type: 'pdf',
        pdfs: [
          { name: 'II.6 Bằng cấp chứng chỉ', path: '/phong-thi-nghiem/2-ho-so-phap-ly-cac-quyet-dinh/bang-cap-chung-chi-ptn/ii-6-bang-cap-chung-chi.pdf' },
          { name: 'Bùi Chiến Công', path: '/phong-thi-nghiem/2-ho-so-phap-ly-cac-quyet-dinh/bang-cap-chung-chi-ptn/bui-chien-cong.pdf' },
        ],
      },
    ],
  },
  {
    slug: '3-he-thong-quan-ly-ptn',
    label: '3. Hệ thống quản lý PTN',
    type: 'listing',
    children: [
      {
        slug: 'qd-thanh-lap-ban-soan-thao',
        label: 'QĐ thành lập ban soạn thảo',
        type: 'pdf',
        pdfs: [{ name: 'III.1 QĐ thành lập ban soạn thảo ISO', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/qd-thanh-lap-ban-soan-thao/iii-1-qd-thanh-lap-ban-soan-thao-iso.pdf' }],
      },
      {
        slug: 'so-tay-chat-luong',
        label: 'Sổ tay chất lượng',
        type: 'pdf',
        pdfs: [{ name: 'III.2 Sổ tay chất lượng', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/so-tay-chat-luong/iii-2-so-tay-chat-luong.pdf' }],
      },
      {
        slug: 'dm-cac-qui-trinh-qlcl',
        label: 'DM các qui trình QLCL',
        type: 'pdf',
        pdfs: [{ name: 'III.3 QĐ ban hành qui trình QLCL', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/dm-cac-qui-trinh-qlcl/iii-3-qd-ban-hanh-qui-trinh-qlcl.pdf' }],
      },
      {
        slug: 'dm-tieu-chuan-duoc-phe-duyet',
        label: 'DM tiêu chuẩn được phê duyệt',
        type: 'pdf',
        pdfs: [{ name: 'III.4 DM các tiêu chuẩn áp dụng', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/dm-tieu-chuan-duoc-phe-duyet/iii-4-dm-cac-tieu-chuan-ap-dung.pdf' }],
      },
      {
        slug: 'qd-ap-dung-he-thong',
        label: 'QĐ áp dụng hệ thống',
        type: 'pdf',
        pdfs: [{ name: 'III.5 QĐ áp dụng hệ thống QLCL', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/qd-ap-dung-he-thong/iii-5-qd-ap-dung-he-thong-qlcl.pdf' }],
      },
      {
        slug: 'cac-quy-trinh-iso-iec-17025-2017',
        label: 'Các quy trình của Hệ thống ISO/IEC 17025:2017',
        type: 'pdf',
        pdfs: [
          { name: 'QT01', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt01.pdf' },
          { name: 'QT02', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt02.pdf' },
          { name: 'QT03', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt03.pdf' },
          { name: 'QT04', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt04.pdf' },
          { name: 'QT05', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt05.pdf' },
          { name: 'QT06', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt06.pdf' },
          { name: 'QT07', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt07.pdf' },
          { name: 'QT08', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt08.pdf' },
          { name: 'QT09', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt09.pdf' },
          { name: 'QT10', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt10.pdf' },
          { name: 'QT11', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt11.pdf' },
          { name: 'QT12', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt12.pdf' },
          { name: 'QT13', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt13.pdf' },
          { name: 'QT14', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt14.pdf' },
          { name: 'QT15', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt15.pdf' },
          { name: 'QT16', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt16.pdf' },
          { name: 'QT17', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt17.pdf' },
          { name: 'QT18', path: '/phong-thi-nghiem/3-he-thong-quan-ly-ptn/cac-quy-trinh-cua-he-thong-isoiec-170252017/qt18.pdf' },
        ],
      },
    ],
  },
  {
    slug: '4-nang-luc-thiet-bi',
    label: '4. Năng lực thiết bị',
    type: 'listing',
    children: [
      {
        slug: 'dm-trang-thiet-bi-ptn',
        label: 'DM trang thiết bị PTN',
        type: 'pdf',
        pdfs: [{ name: 'IV.1 DM trang thiết bị PTN', path: '/phong-thi-nghiem/4-nang-luc-thiet-bi/dm-trang-thiet-bi-ptn/iv-1-dm-trang-thiet-bi-ptn.pdf' }],
      },
      {
        slug: 'hop-dong-mua-ban-thiet-bi',
        label: 'Hợp đồng mua bán thiết bị, biên bản bàn giao, hoá đơn thiết bị',
        type: 'pdf',
        pdfs: [
          { name: 'IV.2.1 BB bàn giao thiết bị', path: '/phong-thi-nghiem/4-nang-luc-thiet-bi/hop-dong-mua-ban-thiet-bi-bien-ban-ban-giao-hoa-don-thiet-bi/iv-2-1-bb-ban-giao-thiet-bi.pdf' },
          { name: 'IV.2.1 HĐ mua bán thiết bị DLVN', path: '/phong-thi-nghiem/4-nang-luc-thiet-bi/hop-dong-mua-ban-thiet-bi-bien-ban-ban-giao-hoa-don-thiet-bi/iv-2-1-hd-mua-ban-thiet-bi-dlvn.pdf' },
          { name: 'IV.2.2 BB bàn giao thiết bị HY', path: '/phong-thi-nghiem/4-nang-luc-thiet-bi/hop-dong-mua-ban-thiet-bi-bien-ban-ban-giao-hoa-don-thiet-bi/iv-2-2-bb-ban-giao-thiet-bi-hy.pdf' },
          { name: 'IV.2.2 HĐ mua bán thiết bị HY', path: '/phong-thi-nghiem/4-nang-luc-thiet-bi/hop-dong-mua-ban-thiet-bi-bien-ban-ban-giao-hoa-don-thiet-bi/iv-2-2-hd-mua-ban-thiet-bi-hy.pdf' },
        ],
      },
      {
        slug: 'giay-kiem-dinh-tb',
        label: 'Giấy kiểm định TB',
        type: 'pdf',
        pdfs: [
          { name: 'Hiệu chuẩn máy PTN', path: '/phong-thi-nghiem/4-nang-luc-thiet-bi/giay-kiem-dinh-tb/hieu-chuan-may-ptn.pdf' },
          { name: 'Hiệu chuẩn máy Hải Phòng 2025', path: '/phong-thi-nghiem/4-nang-luc-thiet-bi/giay-kiem-dinh-tb/hieu-chuan-may-hai-phong-2025.pdf' },
          { name: 'Hiệu chuẩn máy Sài Gòn', path: '/phong-thi-nghiem/4-nang-luc-thiet-bi/giay-kiem-dinh-tb/hieu-chuan-may-sai-gon.pdf' },
          { name: 'Kiểm định Sài Gòn 2025', path: '/phong-thi-nghiem/4-nang-luc-thiet-bi/giay-kiem-dinh-tb/kiem-dinh-sai-gon-2025.pdf' },
        ],
      },
    ],
  },
  {
    slug: '5-dia-diem-dat-ptn',
    label: '5. Địa điểm đặt PTN',
    type: 'listing',
    children: [
      {
        slug: 'hop-dong-so-do-dia-diem',
        label: 'Hợp đồng, sổ đỏ địa điểm',
        type: 'pdf',
        pdfs: [
          { name: 'V.1 HĐ thuê nhà', path: '/phong-thi-nghiem/5-dia-diem-dat-ptn/hop-dong-so-do-dia-diem/v-1-hd-thue-nha.pdf' },
          { name: 'V.2 Bìa đỏ nơi thuê MB', path: '/phong-thi-nghiem/5-dia-diem-dat-ptn/hop-dong-so-do-dia-diem/v-2-bia-do-noi-thue-mb.pdf' },
        ],
      },
      {
        slug: 'so-do-mb-ptn',
        label: 'Sơ đồ MB PTN',
        type: 'pdf',
        pdfs: [{ name: 'V.3 Sơ đồ MB PTN', path: '/phong-thi-nghiem/5-dia-diem-dat-ptn/so-do-mb-ptn/v-3-so-do-mb-ptn.pdf' }],
      },
    ],
  },
  {
    slug: '6-ho-so-tram-thi-nghiem-hien-truong',
    label: '6. Hồ sơ Trạm thí nghiệm hiện trường',
    type: 'listing',
    children: [
      {
        slug: 'tram-tn-du-an-newtech',
        label: 'Trạm Thí nghiệm hiện trường dự án Newtech',
        type: 'listing',
        children: [
          {
            slug: 'cv-thanh-lap-phong-hien-truong',
            label: 'CV thành lập phòng hiện trường',
            type: 'pdf',
            pdfs: [{ name: 'CV', path: '/phong-thi-nghiem/6-ho-so-tram-thi-nghiem-hien-truong/tram-thi-nghiem-hien-truong-du-an-newtech/cv-thanh-lap-phong-hien-truong/cv.pdf' }],
          },
          {
            slug: 'kiem-dinh-hieu-chuan-may',
            label: 'Kiểm định, hiệu chuẩn máy',
            type: 'pdf',
            pdfs: [
              { name: 'Hiệu chuẩn máy Sài Gòn', path: '/phong-thi-nghiem/6-ho-so-tram-thi-nghiem-hien-truong/tram-thi-nghiem-hien-truong-du-an-newtech/kiem-dinh-hieu-chuan-may/hieu-chuan-may-sai-gon.pdf' },
              { name: 'Kiểm định Sài Gòn 2025', path: '/phong-thi-nghiem/6-ho-so-tram-thi-nghiem-hien-truong/tram-thi-nghiem-hien-truong-du-an-newtech/kiem-dinh-hieu-chuan-may/kiem-dinh-sai-gon-2025.pdf' },
            ],
          },
          {
            slug: 'nhan-su-tram-hien-truong',
            label: 'Nhân sự trạm hiện trường',
            type: 'listing',
            children: [
              {
                slug: 'bui-chien-cong',
                label: 'Bùi Chiến Công',
                type: 'pdf',
                pdfs: [{ name: 'HS Công', path: '/phong-thi-nghiem/6-ho-so-tram-thi-nghiem-hien-truong/tram-thi-nghiem-hien-truong-du-an-newtech/nhan-su-tram-hien-truong/bui-chien-cong/hs-cong.pdf' }],
              },
              {
                slug: 'le-ba-phuong',
                label: 'Lê Bá Phương',
                type: 'pdf',
                pdfs: [{ name: 'Lê Bá Phương', path: '/phong-thi-nghiem/6-ho-so-tram-thi-nghiem-hien-truong/tram-thi-nghiem-hien-truong-du-an-newtech/nhan-su-tram-hien-truong/le-ba-phuong/le-ba-phuong.pdf' }],
              },
              {
                slug: 'luong-thanh-son',
                label: 'Lương Thanh Sơn',
                type: 'pdf',
                pdfs: [
                  { name: 'Bằng đại học Sơn', path: '/phong-thi-nghiem/6-ho-so-tram-thi-nghiem-hien-truong/tram-thi-nghiem-hien-truong-du-an-newtech/nhan-su-tram-hien-truong/luong-thanh-son/bang-dai-hoc-son.pdf' },
                  { name: 'Sơn_1', path: '/phong-thi-nghiem/6-ho-so-tram-thi-nghiem-hien-truong/tram-thi-nghiem-hien-truong-du-an-newtech/nhan-su-tram-hien-truong/luong-thanh-son/son-1.pdf' },
                  { name: 'Sơn_2', path: '/phong-thi-nghiem/6-ho-so-tram-thi-nghiem-hien-truong/tram-thi-nghiem-hien-truong-du-an-newtech/nhan-su-tram-hien-truong/luong-thanh-son/son-2.pdf' },
                  { name: 'Sơn_3', path: '/phong-thi-nghiem/6-ho-so-tram-thi-nghiem-hien-truong/tram-thi-nghiem-hien-truong-du-an-newtech/nhan-su-tram-hien-truong/luong-thanh-son/son-3.pdf' },
                ],
              },
            ],
          },
        ],
      },
      {
        slug: 'tram-tn-du-an-vlasta-thuy-nguyen',
        label: 'Trạm thí nghiệm hiện trường dự án Vlasta Thuỷ Nguyên',
        type: 'listing',
        children: [
          {
            slug: 'cv-thanh-lap-phong-hien-truong',
            label: 'CV thành lập phòng hiện trường',
            type: 'pdf',
            pdfs: [{ name: 'HS trạm TN Dự án Thuỷ Nguyên', path: '/phong-thi-nghiem/6-ho-so-tram-thi-nghiem-hien-truong/tram-thi-nghiem-hien-truong-du-an-vlasta-thuy-nguyen/cv-thanh-lap-phong-hien-truong/hs-tram-tn-du-an-thuy-nguyen.pdf' }],
          },
          {
            slug: 'kiem-dinh-hieu-chuan-may',
            label: 'Kiểm định, hiệu chuẩn máy',
            type: 'pdf',
            pdfs: [{ name: 'Hiệu chuẩn máy Hải Phòng 2025', path: '/phong-thi-nghiem/6-ho-so-tram-thi-nghiem-hien-truong/tram-thi-nghiem-hien-truong-du-an-vlasta-thuy-nguyen/kiem-dinh-hieu-chuan-may/hieu-chuan-may-hai-phong-2025.pdf' }],
          },
        ],
      },
    ],
  },
];

// Find a node by slug path segments
export function findNodeBySlugPath(segments: string[], nodes: LabNode[] = labTree): LabNode | null {
  if (segments.length === 0) return null;
  const [first, ...rest] = segments;
  const node = nodes.find(n => n.slug === first);
  if (!node) return null;
  if (rest.length === 0) return node;
  if (node.children) return findNodeBySlugPath(rest, node.children);
  return null;
}

// Get all valid slug paths for getStaticPaths
export function getAllPaths(nodes: LabNode[] = labTree, prefix: string[] = []): string[][] {
  const paths: string[][] = [];
  for (const node of nodes) {
    const current = [...prefix, node.slug];
    paths.push(current);
    if (node.children) {
      paths.push(...getAllPaths(node.children, current));
    }
  }
  return paths;
}

// Build breadcrumb trail for a slug path
export function getBreadcrumbs(segments: string[], base: string): { label: string; href: string }[] {
  const crumbs: { label: string; href: string }[] = [
    { label: 'Phòng Thí Nghiệm', href: `${base}phong-thi-nghiem/` },
  ];
  let currentNodes = labTree;
  let href = `${base}phong-thi-nghiem/`;
  for (const seg of segments) {
    const node = currentNodes.find(n => n.slug === seg);
    if (!node) break;
    href += `${seg}/`;
    crumbs.push({ label: node.label, href });
    currentNodes = node.children || [];
  }
  return crumbs;
}

// Get top-level items for header dropdown
export function getTopLevelItems(base: string): { label: string; href: string }[] {
  return labTree.map(node => ({
    label: node.label,
    href: `${base}phong-thi-nghiem/${node.slug}/`,
  }));
}
