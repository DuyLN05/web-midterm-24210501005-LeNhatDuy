// assets/js/main.js

// Lợi dụng việc file data.js được nhúng trước, file main.js này sẽ đọc được biến `courses`

// 1. CHỜ GIAO DIỆN HTML TẢI XONG THÌ MỚI CHẠY CODE JAVASCRIPT
document.addEventListener("DOMContentLoaded", function () {
    
    // Kiểm tra xem chúng ta có đang ở trang courses.html hay không bằng cách tìm ID "courseContainer"
    const courseContainer = document.getElementById("courseContainer");
    
    if (courseContainer) {
        // Lấy các thẻ HTML của bộ lọc và tìm kiếm ra để xử lý
        const searchInput = document.getElementById("searchInput");
        const categoryFilter = document.getElementById("categoryFilter");
        const levelFilter = document.getElementById("levelFilter");

        // Hàm có nhiệm vụ: Nhận vào 1 mảng và tự động tạo các thẻ Card HTML tương ứng hiển thị lên màn hình
        function renderCourses(dataList) {
            // Xóa sạch nội dung cũ trước khi vẽ nội dung mới
            courseContainer.innerHTML = "";

            // Nếu mảng rỗng (không tìm thấy khóa học nào phù hợp)
            if (dataList.length === 0) {
                courseContainer.innerHTML = `<div class="col-12 text-center text-muted py-5"><h5>Không tìm thấy khóa học nào phù hợp với bộ lọc!</h5></div>`;
                return;
            }

            // Duyệt qua từng khóa học trong mảng bằng vòng lặp và cộng dồn chuỗi HTML
            dataList.forEach(course => {
                const cardHTML = `
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card h-100 shadow-sm border-0 transition-card">
                            <img src="${course.image}" class="card-img-top" alt="${course.title}" style="height: 200px; object-fit: cover;">
                            <div class="card-body d-flex flex-column">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge bg-success">${course.category}</span>
                                    <span class="badge bg-secondary">${course.level}</span>
                                </div>
                                <h5 class="card-title fw-bold text-dark text-truncate-2">${course.title}</h5>
                                <p class="card-text text-muted small flex-grow-1">${course.description}</p>
                                <div class="mt-3">
                                    <button class="btn btn-outline-success btn-sm w-100 fw-bold mb-2" onclick="openModal(${course.id})">Xem Chi Tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                courseContainer.innerHTML += cardHTML;
            });
        }

        // Hàm thực hiện chức năng lọc dữ liệu dựa trên các ô tìm kiếm và select
        function filterData() {
            const keyword = searchInput.value.toLowerCase().trim();
            const selectedCategory = categoryFilter.value;
            const selectedLevel = levelFilter.value;

            // Dùng hàm .filter() của mảng để lọc dữ liệu
            const filteredResult = courses.filter(course => {
                // Điều kiện 1: Tên khóa học có chứa từ khóa tìm kiếm hay không
                const matchKeyword = course.title.toLowerCase().includes(keyword);
                
                // Điều kiện 2: Khớp danh mục (nếu chọn 'all' thì coi như luôn đúng)
                const matchCategory = (selectedCategory === "all") || (course.category === selectedCategory);
                
                // Điều kiện 3: Khớp cấp độ (nếu chọn 'all' thì coi như luôn đúng)
                const matchLevel = (selectedLevel === "all") || (course.level === selectedLevel);

                // Khóa học phải thỏa mãn cả 3 điều kiện trên thì mới giữ lại
                return matchKeyword && matchCategory && matchLevel;
            });

            // Sau khi lọc xong, đưa mảng kết quả mới này đi vẽ lại giao diện
            renderCourses(filteredResult);
        }

        // Lắng nghe hành vi người dùng thao tác trên các ô bộ lọc
        searchInput.addEventListener("input", filterData);
        categoryFilter.addEventListener("change", filterData);
        levelFilter.addEventListener("change", filterData);

        // Lần đầu tiên khi vừa mở trang web lên: Vẽ toàn bộ 8 khóa học mặc định
        renderCourses(courses);
    }
});

// 2. LOGIC XỬ LÝ HỘP THOẠI XEM CHI TIẾT (MODAL BOOTSTRAP)
// Hàm này đặt bên ngoài để nút bấm onclick ở các thẻ card có thể gọi tới được
function openModal(courseId) {
    // Dựa vào Id nhận được, tìm đúng đối tượng khóa học trong mảng courses
    const course = courses.find(item => item.id === courseId);

    if (course) {
        // Đổ dữ liệu của khóa học tìm được vào các thẻ trong Modal trên HTML
        document.getElementById("modalTitle").innerText = course.title;
        document.getElementById("modalImage").src = course.image;
        document.getElementById("modalCategory").innerText = course.category;
        document.getElementById("modalLevel").innerText = course.level;
        document.getElementById("modalDate").innerText = course.date;
        document.getElementById("modalDescription").innerText = course.description;
        document.getElementById("modalDetail").innerText = course.detail;

        // Cập nhật đường link của nút "Đăng Ký Học Ngay" để dẫn sang trang register.html kèm ID khóa học
        document.getElementById("modalRegisterBtn").href = `register.html?id=${course.id}`;

        // Lệnh kích hoạt hiển thị Modal của Bootstrap bằng code JavaScript thuần
        const myModal = new bootstrap.Modal(document.getElementById('courseDetailModal'));
        myModal.show();
    }
}
// =========================================================================
// 3. LOGIC XỬ LÝ TRANG ĐĂNG KÝ HỌC (REGISTER.HTML)
// =========================================================================

// Tiếp tục kiểm tra xem có đang ở trang register.html không bằng cách tìm ID của form
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    const courseSelect = document.getElementById("courseSelect");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    // a. Tự động đổ danh sách 8 khóa học vào ô Select
    courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.title; // Lưu tên khóa học làm giá trị
        option.dataset.id = course.id; // Lưu thêm thuộc tính ID để đối chiếu nếu cần
        option.innerText = course.title;
        courseSelect.appendChild(option);
    });

    // b. Kiểm tra URL xem có chứa "?id=..." không để tự động chọn khóa học
    const urlParams = new URLSearchParams(window.location.search);
    const courseIdFromUrl = urlParams.get('id');

    if (courseIdFromUrl) {
        // Tìm khóa học có ID khớp với ID trên đường dẫn
        const matchedCourse = courses.find(item => item.id == courseIdFromUrl);
        if (matchedCourse) {
            courseSelect.value = matchedCourse.title; // Tự động chọn trên giao diện
        }
    }

    // c. Xử lý sự kiện khi người dùng bấm nút Submit (Gửi Form)
    registrationForm.addEventListener("submit", function (event) {
        // Chặn hành vi tải lại trang mặc định của Form
        event.preventDefault();

        // Biến đánh dấu form có hợp lệ hay không
        let isValid = true;

        // --- Kiểm tra Ô chọn khóa học ---
        if (courseSelect.value === "") {
            courseSelect.classList.add("is-invalid");
            isValid = false;
        } else {
            courseSelect.classList.remove("is-invalid");
            courseSelect.classList.add("is-valid");
        }

        // --- Kiểm tra Ô họ tên (Không trống, từ 5 ký tự trở lên) ---
        if (fullName.value.trim().length < 5) {
            fullName.classList.add("is-invalid");
            isValid = false;
        } else {
            fullName.classList.remove("is-invalid");
            fullName.classList.add("is-valid");
        }

        // --- Kiểm tra Ô Email bằng biểu thức chính quy (RegEx cơ bản) ---
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add("is-invalid");
            isValid = false;
        } else {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        }

        // --- Kiểm tra Ô Số điện thoại (Mẫu: 10 chữ số, bắt đầu bằng số 0) ---
        const phoneRegex = /^0[0-9]{9}$/;
        if (!phoneRegex.test(phone.value.trim())) {
            phone.classList.add("is-invalid");
            isValid = false;
        } else {
            phone.classList.remove("is-invalid");
            phone.classList.add("is-valid");
        }

        // d. Nếu TẤT CẢ thông tin đều hợp lệ thì tiến hành lưu vào LocalStorage
        if (isValid) {
            // Tạo một đối tượng đăng ký mới chứa thông tin học viên nhập vào
            const newRegistration = {
                id: Date.now(), // Dùng thời gian hiện tại làm ID duy nhất cho đơn đăng ký này
                courseName: courseSelect.value,
                studentName: fullName.value.trim(),
                studentEmail: email.value.trim(),
                studentPhone: phone.value.trim(),
                registrationDate: new Date().toLocaleDateString("vi-VN") // Lưu ngày đăng ký theo chuẩn VN
            };

            // Lấy danh sách đã lưu cũ trong LocalStorage ra (nếu chưa có thì mặc định là mảng rỗng [])
            let existingRegistrations = JSON.parse(localStorage.getItem("studentRegistrations")) || [];

            // Đẩy đơn đăng ký mới này vào mảng danh sách
            existingRegistrations.push(newRegistration);

            // Lưu mảng ngược trở lại vào LocalStorage (phải chuyển mảng thành chuỗi JSON)
            localStorage.setItem("studentRegistrations", JSON.stringify(existingRegistrations));

            // Hiển thị thông báo thành công cho người dùng
            alert("Chúc mừng bạn đã đăng ký khóa học thành công!");

            // Reset (xóa sạch dữ liệu vừa nhập trên form)
            registrationForm.reset();
            
            // Xóa bỏ các viền xanh (is-valid) để form quay về trạng thái ban đầu
            courseSelect.classList.remove("is-valid");
            fullName.classList.remove("is-valid");
            email.classList.remove("is-valid");
            phone.classList.remove("is-valid");

            // Tự động chuyển hướng người học sang trang danh sách lớp học để kiểm tra kết quả
            window.location.href = "registrations.html";
        }
    });
}

// =========================================================================
// 4. LOGIC XỬ LÝ TRANG DANH SÁCH LỚP HỌC (REGISTRATIONS.HTML)
// =========================================================================

// Kiểm tra xem có đang ở trang registrations.html không bằng cách tìm ID của thẻ tbody
const registrationTableBody = document.getElementById("registrationTableBody");

if (registrationTableBody) {

    // Hàm có nhiệm vụ: Lấy dữ liệu từ LocalStorage ra và hiển thị lên bảng HTML
    function renderRegistrationTable() {
        // Lấy chuỗi dữ liệu từ LocalStorage, dùng JSON.parse để chuyển về mảng đối tượng
        const registrations = JSON.parse(localStorage.getItem("studentRegistrations")) || [];

        // Xóa sạch các hàng cũ trong bảng trước khi vẽ mới
        registrationTableBody.innerHTML = "";

        // Trường hợp 1: Nếu chưa có ai đăng ký học (mảng rỗng)
        if (registrations.length === 0) {
            registrationTableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="text-center text-muted py-4">
                        Chưa có học viên nào đăng ký lớp học!
                    </td>
                </tr>
            `;
            return;
        }

        // Trường hợp 2: Có dữ liệu, dùng vòng lặp để tạo từng hàng tr cho bảng
        // Dùng thêm tham số index (bắt đầu từ 0) để hiển thị số thứ tự (STT) tăng dần
        registrations.forEach((item, index) => {
            const rowHTML = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td class="fw-bold text-dark">${item.studentName}</td>
                    <td><span class="badge bg-light text-dark border">${item.courseName}</span></td>
                    <td>${item.studentPhone}</td>
                    <td class="text-muted small">${item.registrationDate}</td>
                    <td class="text-center">
                        <button class="btn btn-danger btn-sm fw-bold px-3 shadow-sm" onclick="deleteRegistration(${item.id})">
                            Xóa
                        </button>
                    </td>
                </tr>
            `;
            registrationTableBody.innerHTML += rowHTML;
        });
    }

    // Định nghĩa hàm Xóa đơn đăng ký (đặt làm hàm toàn cục window để nút bấm onclick gọi được)
    window.deleteRegistration = function (registrationId) {
        // Hiển thị hộp thoại xác nhận để tránh người dùng bấm nhầm
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa học viên này khỏi danh sách lớp không?");
        
        if (confirmDelete) {
            // Lấy danh sách hiện tại ra
            let registrations = JSON.parse(localStorage.getItem("studentRegistrations")) || [];

            // Dùng hàm .filter() để giữ lại những đơn đăng ký CÓ ID KHÁC với ID cần xóa
            registrations = registrations.filter(item => item.id !== registrationId);

            // Lưu mảng mới đã lọc bỏ phần tử bị xóa ngược trở lại vào LocalStorage
            localStorage.setItem("studentRegistrations", JSON.stringify(registrations));

            // Gọi lại hàm vẽ bảng để cập nhật giao diện ngay lập tức mà không cần tải lại toàn bộ trang
            renderRegistrationTable();
        }
    };

    // Lần đầu tiên khi vừa tải trang registrations.html: Gọi hàm hiển thị bảng
    renderRegistrationTable();
}