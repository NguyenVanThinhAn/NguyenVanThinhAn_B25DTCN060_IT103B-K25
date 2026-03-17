# BÀI TẬP: ỨNG DỤNG QUẢN LÝ SẢN PHẨM

## 1. MỤC TIÊU

- Nắm vững kiến thức về **DOM Manipulation** trong JavaScript
- Thực hành xử lý **Event Handling** (click, submit, input)
- Áp dụng kỹ thuật **CRUD** (Create, Read, Update, Delete) với JavaScript thuần
- Rèn luyện kỹ năng **Form Validation** và hiển thị thông báo
- Làm quen với **Phân trang** (Pagination) cho danh sách dữ liệu

## 2. MÔ TẢ

Xây dựng ứng dụng **Quản lý sản phẩm** với các chức năng cơ bản:
- Thêm sản phẩm mới
- Hiển thị danh sách sản phẩm
- Sửa thông tin sản phẩm
- Xóa sản phẩm
- Phân trang danh sách sản phẩm

**Template giao diện:** [https://github.com/ngoquy12/template_product_manager](https://github.com/ngoquy12/template_product_manager)

## 3. YÊU CẦU CHỨC NĂNG

### 3.1. CREATE - Thêm sản phẩm mới

**Yêu cầu:**
- Khi người dùng nhấn nút **"Thêm"** hoặc nhấn phím **Enter** trong form:
  - Lấy giá trị từ 3 input: Mã sản phẩm, Tên sản phẩm, Giá sản phẩm
  - **Validate** dữ liệu trước khi thêm (xem phần Validation)
  - Thêm sản phẩm mới vào bảng danh sách
  - Reset form sau khi thêm thành công
  - Hiển thị **alert** thông báo "Thêm sản phẩm thành công!"
  - Cập nhật lại phân trang nếu cần

**Gợi ý:**
```javascript
// Lắng nghe sự kiện submit form
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Ngăn form submit mặc định
  // Lấy giá trị từ input
  // Validate
  // Thêm vào bảng
  // Reset form
  // Hiển thị alert
});
```

### 3.2. READ - Hiển thị danh sách sản phẩm

**Yêu cầu:**
- Hiển thị tất cả sản phẩm trong bảng với đầy đủ thông tin:
  - **STT**: Số thứ tự tự động (1, 2, 3, ...)
  - **Mã**: Mã sản phẩm
  - **Tên**: Tên sản phẩm
  - **Giá**: Giá sản phẩm (format số với dấu phẩy, ví dụ: 25,000,000 đ)
  - **Hành động**: 2 nút Sửa và Xóa
- Mỗi trang hiển thị tối đa **5 sản phẩm**
- Cập nhật STT tự động khi thêm/xóa/sửa

**Gợi ý:**
```javascript
// Format số tiền
function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN').format(price) + ' đ';
}

// Tạo dòng trong bảng
function createTableRow(product, index) {
  const tr = document.createElement('tr');
  // Tạo các cột td
  // Thêm vào tbody
}
```

### 3.3. UPDATE - Sửa sản phẩm

**Yêu cầu:**
- Khi click nút **"Sửa"** của một sản phẩm:
  - Điền dữ liệu sản phẩm vào form (Mã, Tên, Giá)
  - Đổi text nút **"Thêm"** thành **"Cập nhật"**
  - Lưu index/id của sản phẩm đang sửa
- Khi nhấn nút **"Cập nhật"**:
  - **Validate** dữ liệu
  - Cập nhật thông tin sản phẩm trong danh sách
  - Reset form và đổi lại nút thành **"Thêm"**
  - Hiển thị **alert** thông báo "Cập nhật sản phẩm thành công!"
  - Cập nhật lại bảng và phân trang

**Gợi ý:**
```javascript
// Lưu trạng thái đang sửa
let editingIndex = null;

// Khi click Sửa
function editProduct(index) {
  editingIndex = index;
  // Điền dữ liệu vào form
  // Đổi text nút
}

// Khi submit form
if (editingIndex !== null) {
  // Cập nhật sản phẩm
  // Reset editingIndex
} else {
  // Thêm sản phẩm mới
}
```

### 3.4. DELETE - Xóa sản phẩm

**Yêu cầu:**
- Khi click nút **"Xóa"** của một sản phẩm:
  - Hiển thị **alert** xác nhận: "Bạn có chắc chắn muốn xóa sản phẩm này?"
  - Nếu người dùng chọn **OK**: Xóa sản phẩm khỏi danh sách
  - Nếu người dùng chọn **Cancel**: Không làm gì
  - Sau khi xóa thành công, hiển thị **alert** "Xóa sản phẩm thành công!"
  - Cập nhật lại STT và phân trang

**Gợi ý:**
```javascript
function deleteProduct(index) {
  if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
    // Xóa sản phẩm khỏi mảng
    // Cập nhật lại bảng
    // Hiển thị alert thành công
  }
}
```

### 3.5. PHÂN TRANG (Pagination)

**Yêu cầu:**
- Mỗi trang hiển thị tối đa **5 sản phẩm**
- Khi click nút **"Trước"**: Chuyển về trang trước
- Khi click nút **"Sau"**: Chuyển sang trang sau
- Khi click nút số trang (1, 2, ...): Chuyển đến trang tương ứng
- Cập nhật trạng thái nút:
  - Ở trang đầu: Nút **"Trước"** bị **disabled**
  - Ở trang cuối: Nút **"Sau"** bị **disabled**
  - Nút số trang của trang hiện tại có class **active**
- Cập nhật thông tin phân trang (nếu có)

**Gợi ý:**
```javascript
let currentPage = 1;
const itemsPerPage = 5;

function renderTable() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = products.slice(start, end);
  // Hiển thị pageData
  // Cập nhật phân trang
}

function updatePagination() {
  const totalPages = Math.ceil(products.length / itemsPerPage);
  // Cập nhật nút Trước/Sau
  // Cập nhật nút số trang
}
```

## 4. VALIDATION - KIỂM TRA DỮ LIỆU

### 4.1. Validation cho Mã sản phẩm

- **Không được để trống**
- **Không được trùng** với mã sản phẩm đã tồn tại (khi thêm mới)
- Hiển thị **alert** lỗi: "Mã sản phẩm không được để trống!" hoặc "Mã sản phẩm đã tồn tại!"

### 4.2. Validation cho Tên sản phẩm

- **Không được để trống**
- **Độ dài tối thiểu**: 3 ký tự
- Hiển thị **alert** lỗi: "Tên sản phẩm không được để trống!" hoặc "Tên sản phẩm phải có ít nhất 3 ký tự!"

### 4.3. Validation cho Giá sản phẩm

- **Không được để trống**
- **Phải là số dương** (lớn hơn 0)
- **Giá trị tối thiểu**: 1000
- Hiển thị **alert** lỗi: "Giá sản phẩm không được để trống!" hoặc "Giá sản phẩm phải là số dương và tối thiểu 1,000 đ!"

**Gợi ý:**
```javascript
function validateProduct(code, name, price) {
  // Validate mã
  if (!code || code.trim() === '') {
    alert('Mã sản phẩm không được để trống!');
    return false;
  }
  
  // Kiểm tra trùng mã (khi thêm mới)
  if (isAdding && products.some(p => p.code === code)) {
    alert('Mã sản phẩm đã tồn tại!');
    return false;
  }
  
  // Validate tên
  if (!name || name.trim() === '') {
    alert('Tên sản phẩm không được để trống!');
    return false;
  }
  
  if (name.trim().length < 3) {
    alert('Tên sản phẩm phải có ít nhất 3 ký tự!');
    return false;
  }
  
  // Validate giá
  if (!price || price === '') {
    alert('Giá sản phẩm không được để trống!');
    return false;
  }
  
  const priceNum = parseFloat(price);
  if (isNaN(priceNum) || priceNum <= 0) {
    alert('Giá sản phẩm phải là số dương!');
    return false;
  }
  
  if (priceNum < 1000) {
    alert('Giá sản phẩm phải tối thiểu 1,000 đ!');
    return false;
  }
  
  return true;
}
```

## 5. ALERT - THÔNG BÁO

Sử dụng `alert()` của JavaScript để hiển thị thông báo:

### 5.1. Thông báo thành công

- **Thêm sản phẩm**: "Thêm sản phẩm thành công!"
- **Sửa sản phẩm**: "Cập nhật sản phẩm thành công!"
- **Xóa sản phẩm**: "Xóa sản phẩm thành công!"

### 5.2. Thông báo lỗi (Validation)

- Các thông báo lỗi đã được liệt kê trong phần **Validation** (mục 4)

### 5.3. Thông báo xác nhận

- **Xóa sản phẩm**: Sử dụng `confirm()` để xác nhận trước khi xóa

**Gợi ý:**
```javascript
// Thông báo thành công
alert('Thêm sản phẩm thành công!');

// Thông báo lỗi
alert('Mã sản phẩm không được để trống!');

// Xác nhận xóa
if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
  // Xóa sản phẩm
}
```

## 6. CẤU TRÚC DỮ LIỆU

**Lưu trữ danh sách sản phẩm trong mảng JavaScript:**

```javascript
let products = [
  {
    code: 'SP001',
    name: 'Laptop Dell XPS 15',
    price: 25000000
  },
  {
    code: 'SP002',
    name: 'iPhone 15 Pro Max',
    price: 32900000
  },
  // ... các sản phẩm khác
];
```

## 7. YÊU CẦU KỸ THUẬT

- **Chỉ sử dụng JavaScript thuần** (Vanilla JavaScript), không dùng thư viện như jQuery, React, Vue...
- **Không được sửa đổi HTML và CSS** (trừ khi cần thiết để thêm id/class cho JavaScript)
- Code phải **rõ ràng, có comment** giải thích các đoạn code quan trọng
- **Xử lý lỗi** đầy đủ, không để ứng dụng bị crash

## 8. ĐÁNH GIÁ

### 8.1. Tiêu chí chấm điểm

| Tiêu chí | Điểm | Mô tả |
|----------|------|-------|
| **CRUD đầy đủ** | 4 điểm | Thêm, Sửa, Xóa, Hiển thị hoạt động đúng |
| **Validation** | 2 điểm | Validate đầy đủ các trường, hiển thị alert lỗi |
| **Phân trang** | 2 điểm | Phân trang hoạt động đúng, cập nhật trạng thái nút |
| **Code quality** | 1 điểm | Code rõ ràng, có comment, không lỗi |
| **Alert thông báo** | 1 điểm | Hiển thị alert đầy đủ cho các thao tác |

**Tổng điểm: 10 điểm**

### 8.2. Yêu cầu nộp bài

Để hoàn thành bài tập, học viên cần:

1. **Đưa mã nguồn lên GitHub**
   - Tạo repository mới trên GitHub
   - Push toàn bộ mã nguồn (HTML, CSS, JavaScript) lên repository
   - Đảm bảo repository là **public** hoặc cấp quyền truy cập cho giảng viên

2. **Dán link repository lên phần nộp bài**
   - Copy link repository (ví dụ: `https://github.com/username/product-manager`)
   - Dán vào phần nộp bài trên hệ thống

3. **File README.md** (khuyến khích)
   - Mô tả ngắn gọn về dự án
   - Hướng dẫn chạy ứng dụng
   - Screenshot giao diện (nếu có)

## 9. HƯỚNG DẪN BẮT ĐẦU

1. **Fork/Clone template** từ: [https://github.com/ngoquy12/template_product_manager](https://github.com/ngoquy12/template_product_manager)

2. **Mở file `script.js`** và bắt đầu viết code

3. **Test từng chức năng:**
   - Test thêm sản phẩm
   - Test validation
   - Test sửa sản phẩm
   - Test xóa sản phẩm
   - Test phân trang

4. **Kiểm tra lại:**
   - Tất cả chức năng hoạt động đúng
   - Validation đầy đủ
   - Alert hiển thị đúng
   - Không có lỗi trong Console

5. **Push lên GitHub và nộp bài**

## 10. LƯU Ý

- **Không copy code** từ bạn bè hoặc các nguồn khác
- **Nộp bài đúng hạn** theo quy định của lớp học
- **Liên hệ giảng viên** nếu có thắc mắc trong quá trình làm bài
- **Test kỹ** trước khi nộp bài để tránh lỗi không đáng có

---

**Chúc các bạn làm bài tốt! 🚀**
