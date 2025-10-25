document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // ngăn reload trang

    const keyword = document.getElementById('keyword').value.trim();
    if (!keyword) {
        alert("Vui lòng nhập từ khóa tìm kiếm!");
        return;
    }

    // Gửi yêu cầu đến API Node-RED (ở bước 2.5)
    const url = `http://localhost:1880/timkiem?q=${encodeURIComponent(keyword)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Hiển thị kết quả
        const resultDiv = document.getElementById('result');
        if (data.length === 0) {
            resultDiv.innerHTML = "<p>Không tìm thấy kết quả nào.</p>";
        } else {
            let html = `<table border="1" cellpadding="10" cellspacing="0">
                    <tr>
                      <th>Mã KH</th>
                      <th>Họ tên</th>
                      <th>Địa chỉ</th>
                      <th>Điện thoại</th>
                    </tr>`;
            data.forEach(row => {
                html += `<tr>
                  <td>${row.MaKH}</td>
                  <td>${row.HoTen}</td>
                  <td>${row.DiaChi}</td>
                  <td>${row.DienThoai}</td>
                </tr>`;
            });
            html += `</table>`;
            resultDiv.innerHTML = html;
        }
    } catch (err) {
        console.error(err);
        alert("Không kết nối được tới API Node-RED!");
    }
});
