# Website Giới Thiệu Và Đăng Ký Khóa Học Lập Trình Mini

Sản phẩm bài tập giữa kỳ môn **Lập trình Web Frontend** (HTML/CSS/JS/Bootstrap). Website được thiết kế hoàn toàn tĩnh, không sử dụng hệ quản trị cơ sở dữ liệu hay mã nguồn backend, đáp ứng đầy đủ các tiêu chí kỹ thuật và chức năng bắt buộc từ đề bài.

## 📝 Thông Tin Sinh Viên
- **Họ và tên:** Lê Nhật Duy
- **Mã số sinh viên (MSSV):** 24210501005
- **Lớp:** Lập trình Web
- **Đơn vị:** Phân hiệu Cà Mau - Trường Đại học Bình Dương
- **Giảng viên hướng dẫn:** ThS. Lê Thanh Thoại

---

## 🌐 Đường Link Dự Án
- **Link Demo (GitHub Pages):** [Bấm vào đây để xem trực tuyến](https://duyln05.github.io/web-midterm-24210501005-LeNhatDuy/) 

---

## 🛠️ Công Nghệ Sử Dụng
- **Cấu trúc:** HTML5 chuẩn Semantic tags (`<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`).
- **Giao diện:** CSS3 thuần (Tự viết tùy biến hiệu ứng) kết hợp thư viện **Bootstrap 5.3.2** (Hệ thống lưới Grid System, Components, Utilities).
- **Xử lý logic động:** JavaScript thuần (Vanilla JS), tương tác với cấu trúc cây DOM và lưu trữ dữ liệu thông qua ứng dụng `LocalStorage`.
- **Triển khai:** GitHub Pages để public trang web tĩnh trực tuyến.

---

## 📂 Cấu Trúc Thư Mục Dự Án
```text
web-midterm-24210501005-LeNhatDuy/
├── index.html             # Trang chủ giới thiệu tổng quan hệ thống
├── courses.html           # Trang danh sách khóa học kèm bộ lọc, tìm kiếm & modal
├── register.html          # Trang form đăng ký thông tin học viên (có validation)
├── registrations.html     # Trang hiển thị danh sách lớp (đọc từ LocalStorage & xóa)
├── README.md              # Tài liệu giới thiệu tổng quan dự án (File này)
├── AI_USAGE.md            # Báo cáo trung thực tình hình sử dụng AI
└── assets/
    ├── css/
    │   └── style.css      # CSS tùy biến hiệu ứng chuyển động và thanh cuộn
    └── js/
        ├── data.js        # Chứa mảng dữ liệu tĩnh gồm 8 khóa học mẫu
        └── main.js        # Xử lý logic render dữ liệu, tìm kiếm, lọc, modal và form