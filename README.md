# Website Giới Thiệu Và Đăng Ký Khóa Học Lập Trình Mini

## 1. Thông tin sinh viên

* **Họ tên:** Lê Nhật Duy
* **MSSV:** 24210501005
* **Lớp:** Lập trình Web

---

## 2. Mô tả dự án

[cite_start]Website giới thiệu danh sách sự kiện/khóa học, cho phép người dùng xem chi tiết, tìm kiếm, lọc và đăng ký tham gia[cite: 314]. Dự án tuân thủ cấu trúc trang tĩnh (Frontend), tối ưu hóa trải nghiệm người dùng không tải lại trang dựa trên sự phối hợp giữa thiết kế Responsive và lưu trữ dữ liệu cục bộ.

---

## 3. Công nghệ sử dụng

* [cite_start]HTML5, CSS3, Bootstrap 5 [cite: 315]
* [cite_start]JavaScript, LocalStorage [cite: 315]
* [cite_start]GitHub Pages [cite: 315]

---

## 4. Chức năng chính

* [cite_start]Hiển thị danh sách sự kiện/khóa học[cite: 315].
* [cite_start]Tìm kiếm, lọc dữ liệu, xem chi tiết bằng modal[cite: 316].
* [cite_start]Form đăng ký có validation[cite: 316].
* [cite_start]Lưu và xóa danh sách đăng ký bằng LocalStorage[cite: 317].

---

## 5. Link demo

* **GitHub Pages:** https://duyln05.github.io/web-midterm-24210501005-LeNhatDuy/
* **GitHub Repo:** https://github.com/DuyLN05/web-midterm-24210501005-LeNhatDuy

---

## 6. Ảnh giao diện

![Giao diện chính EventHub](assets/images/ảnh 10.jpg)
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