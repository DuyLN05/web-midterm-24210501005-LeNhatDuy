# AI Usage Report

### 1. Em có sử dụng AI không?
- **Có**, em có sử dụng AI làm trợ lý lập trình để hướng dẫn từng bước và tối ưu hóa mã nguồn theo đúng khung yêu cầu của đề bài.

### 2. AI hỗ trợ phần nào?
- Gợi ý phân chia cấu trúc thư mục dự án tường minh.
- Tạo dữ liệu mẫu tĩnh gồm 8 khóa học lập trình phong phú, đầy đủ các thuộc tính định danh trong tệp `assets/js/data.js`.
- Gợi ý kết hợp hệ thống lưới Bootstrap 5 Grid (`row`, `col-*`) kết hợp với các Semantic Tags của HTML5 để đảm bảo tính chuẩn hóa.
- Hướng dẫn viết hàm xử lý logic tìm kiếm từ khóa, bộ lọc danh mục/cấp độ bằng JavaScript thuần và phương thức tương tác với `LocalStorage`.

### 3. Prompt đã sử dụng
- *"đọc file và làm theo chủ đề website khóa học lập trình, làm đơn giản dễ hiểu, hãy làm từng bước theo tôi ra lệnh"*
- *"hướng dẫn tạo assets/js/data.js"*
- *"giải thích cái này"*
- Các prompt ngắn điều hướng từng bước: *"bước tiếp theo"*

### 4. Em đã chỉnh sửa gì sau khi AI sinh code?
- Thay đổi thông tin cá nhân (Họ tên, MSSV, Lớp) ở phần Footer của cả 4 trang web để đúng với thông tin cá nhân của mình.
- Thay đổi cấu trúc và điều chỉnh lại các câu thông báo lỗi (Validation) trong Form đăng ký để thân thiện với người dùng Việt Nam hơn.
- Cập nhật lại đường dẫn liên kết tĩnh giữa các trang (`href="index.html"`, `href="courses.html"`,...) để đảm bảo hệ thống không bị lỗi điều hướng khi mở cục bộ hoặc khi đẩy lên GitHub Pages.
- Bổ sung thêm các thuộc tính CSS nâng cao để kiểm soát hiển thị văn bản (chống lệch khung Card khi tiêu đề quá dài).

### 5. Phần nào em tự viết?
- Tự thiết lập môi trường làm việc trên phần mềm Visual Studio Code, tự tạo cấu trúc cây thư mục con (`assets/css`, `assets/js`).
- Tự tay thực hiện liên kết (nhúng) các tệp `data.js`, `main.js`, `style.css` và các thư viện CDN Bootstrap 5 vào từng trang HTML tương ứng theo đúng thứ tự logic.
- Trực tiếp kiểm thử (Test) các trường hợp nhập dữ liệu Form (để trống, nhập sai email, nhập thiếu số điện thoại) để xác nhận các viền đỏ/xanh hiển thị chuẩn xác.
- Tự thực hiện các thao tác Xóa dữ liệu học viên để kiểm tra tính đồng bộ của `LocalStorage`.

### 6. Em học được gì?
- Hiểu sâu sắc cách tổ chức một ứng dụng Web Frontend dạng Single-Page hoặc Multi-Page tĩnh mà không cần Backend.
- Thành thạo kỹ năng thao tác và điều khiển các phần tử HTML thông qua JavaScript DOM (như `document.getElementById`, `innerHTML`, lắng nghe sự kiện `addEventListener`).
- Biết cách lưu trữ và quản lý trạng thái dữ liệu tạm thời dưới trình duyệt bằng cặp phương thức `JSON.stringify()` và `JSON.parse()` của `LocalStorage`.
- Nắm vững nguyên lý xây dựng giao diện Responsive bằng hệ thống Grid System của Bootstrap 5 để trang web hiển thị đẹp mắt trên cả máy tính lẫn điện thoại di động.