# Bài tập 02: Lập trình web.

## Vũ Bảo Khánh. MSSV: K225480106028

## NGÀY GIAO: 19/10/2025

## DEADLINE: 26/10/2025

## ĐỀ BÀI
1. Sử dụng github để ghi lại quá trình làm, tạo repo mới, để truy cập public, edit file `readme.md`:
   chụp ảnh màn hình (CTRL+Prtsc) lúc đang làm, paste vào file `readme.md`, thêm mô tả cho ảnh.
2. NỘI DUNG BÀI TẬP:

2.1. Cài đặt Apache web server:
- Vô hiệu hoá IIS: nếu iis đang chạy thì mở cmd quyền admin để chạy lệnh: iisreset /stop

<img width="1103" height="639" alt="image" src="https://github.com/user-attachments/assets/3aaeadec-9184-4672-9900-e351370b6ae8" />

<img width="766" height="145" alt="image" src="https://github.com/user-attachments/assets/7e869fc8-b23f-4c5c-81ea-e8f9f433ab09" />

- Download apache server, giải nén ra ổ D, cấu hình các file:
  + D:\Apache24\conf\httpd.conf

<img width="1939" height="1021" alt="image" src="https://github.com/user-attachments/assets/693f6815-bb9d-4cd9-a997-05b17091bff8" />

<img width="425" height="153" alt="image" src="https://github.com/user-attachments/assets/e514dc0c-e6bc-41c0-aa31-d9d708702770" />

<img width="435" height="66" alt="image" src="https://github.com/user-attachments/assets/9105c3af-2def-49fc-ac82-3e1c06ba2da9" />

  + D:Apache24\conf\extra\httpd-vhosts.conf

<img width="1920" height="1021" alt="image" src="https://github.com/user-attachments/assets/f90a02c6-c179-4aed-839b-8afd254ab55f" />

  để tạo website với domain: fullname.com
  code web sẽ đặt tại thư mục: `D:\Apache24\fullname` (fullname ko dấu, liền nhau)
- sử dụng file `c:\WINDOWS\SYSTEM32\Drivers\etc\hosts` để fake ip 127.0.0.1 cho domain này
  ví dụ sv tên là: `Đỗ Duy Cốp` thì tạo website với domain là fullname ko dấu, liền nhau: `doduycop.com`

  <img width="1426" height="698" alt="image" src="https://github.com/user-attachments/assets/5d9e62a6-863b-4a4b-ac60-e53adbe93980" />

- thao tác dòng lệnh trên file `D:\Apache24\bin\httpd.exe` với các tham số `-k install` và `-k start` để cài đặt và khởi động web server apache.

<img width="1904" height="1012" alt="image" src="https://github.com/user-attachments/assets/c698b47a-af29-4d0a-be1a-a7ecba55421e" />

2.2. Cài đặt nodejs và nodered => Dùng làm backend:
- Cài đặt nodejs:
  + download file `https://nodejs.org/dist/v20.19.5/node-v20.19.5-x64.msi`  (đây ko phải bản mới nhất, nhưng ổn định)
  + cài đặt vào thư mục `D:\nodejs`
- Cài đặt nodered:
  + chạy cmd, vào thư mục `D:\nodejs`, chạy lệnh `npm install -g --unsafe-perm node-red --prefix "D:\nodejs\nodered"`
  + download file: https://nssm.cc/release/nssm-2.24.zip
    giải nén được file nssm.exe
    copy nssm.exe vào thư mục `D:\nodejs\nodered\`
  + tạo file "D:\nodejs\nodered\run-nodered.cmd" với nội dung (5 dòng sau):
@echo off
REM fix path
set PATH=D:\nodejs;%PATH%
REM Run Node-RED
node "D:\nodejs\nodered\node_modules\node-red\red.js" -u "D:\nodejs\nodered\work" %*

<img width="1904" height="1012" alt="image" src="https://github.com/user-attachments/assets/fadde118-9d2a-489e-b865-4fef25b22b32" />

  + mở cmd, chuyển đến thư mục: `D:\nodejs\nodered`
  + cài đặt service `a1-nodered` bằng lệnh: nssm.exe install a1-nodered "D:\nodejs\nodered\run-nodered.cmd"

<img width="778" height="85" alt="image" src="https://github.com/user-attachments/assets/415f40f4-ca6a-4633-b467-4c4630b9626d" />

  + chạy service `a1-nodered` bằng lệnh: `nssm start a1-nodered`

<img width="603" height="56" alt="image" src="https://github.com/user-attachments/assets/001f06ef-fea7-44b0-b5cc-aedfc1fcc94e" />

2.3. Tạo csdl tuỳ ý trên mssql (sql server 2022), nhớ các thông số kết nối: ip, port, username, password, db_name, table_name

<img width="1920" height="1029" alt="image" src="https://github.com/user-attachments/assets/809cf079-7029-43d2-b497-11d008f9660f" />

<img width="1920" height="1029" alt="image" src="https://github.com/user-attachments/assets/988884a7-0a44-4ed7-afc7-7a44b7250584" />

2.4. Cài đặt thư viện trên nodered:
- truy cập giao diện nodered bằng url: http://localhost:1880

<img width="1919" height="963" alt="image" src="https://github.com/user-attachments/assets/aedb9db0-6787-4098-bb8c-ce76a9c98666" />

- cài đặt các thư viện: node-red-contrib-mssql-plus, node-red-node-mysql, node-red-contrib-telegrambot, node-red-contrib-moment, node-red-contrib-influxdb, node-red-contrib-duckdns, node-red-contrib-cron-plus

<img width="895" height="812" alt="image" src="https://github.com/user-attachments/assets/ac54af90-cab0-4530-9b08-e71ae5566423" />

- Sửa file `D:\nodejs\nodered\work\settings.js` : 
  tìm đến chỗ adminAuth, bỏ comment # ở đầu dòng (8 dòng), thay chuỗi mã hoá mật khẩu bằng chuỗi mới
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "chuỗi_mã_hoá_mật_khẩu",
            permissions: "*"
        }]
    },   
   với mã hoá mật khẩu có thể thiết lập bằng tool: https://tms.tnut.edu.vn/pw.php

<img width="819" height="179" alt="image" src="https://github.com/user-attachments/assets/e560f415-c10b-4500-8acc-4ba74c980832" />

- chạy lại nodered bằng cách: mở cmd, vào thư mục `D:\nodejs\nodered` và chạy lệnh `nssm restart a1-nodered`
  khi đó nodered sẽ yêu cầu nhập mật khẩu mới vào được giao diện cho admin tại: http://localhost:1880

<img width="811" height="429" alt="image" src="https://github.com/user-attachments/assets/86cd0623-b669-40d4-b8e9-90fa724d171d" />

2.5. tạo api back-end bằng nodered:
- tại flow1 trên nodered, sử dụng node `http in` và `http response` để tạo api
- thêm node `MSSQL` để truy vấn tới cơ sở dữ liệu
- logic flow sẽ gồm 4 node theo thứ tự sau (thứ tự nối dây): 
  1. http in  : dùng GET cho đơn giản, URL đặt tuỳ ý, ví dụ: /timkiem
  2. function : để tiền xử lý dữ liệu gửi đến
  3. MSSQL: để truy vấn dữ liệu tới CSDL, nhận tham số từ node tiền xử lý
  4. http response: để phản hồi dữ liệu về client: Status Code=200, Header add : Content-Type = application/json
  có thể thêm node `debug` để quan sát giá trị trung gian.
- test api thông qua trình duyệt, ví dụ: http://localhost:1880/timkiem?q=thị

  <img width="1128" height="289" alt="image" src="https://github.com/user-attachments/assets/d6297cf5-6af8-4916-90f6-e3970b3735af" />

<img width="778" height="44" alt="image" src="https://github.com/user-attachments/assets/8e25d6b0-1fd6-4712-9dc6-7e119ac9c774" />

<img width="285" height="213" alt="image" src="https://github.com/user-attachments/assets/70ec3304-15c2-4e65-9fed-316100b376f5" />

2.6. Tạo giao diện front-end:
- html form gồm các file : index.html, fullname.js, fullname.css
  cả 3 file này đặt trong thư mục: `D:\Apache24\fullname`
  nhớ thay fullname là tên của bạn, viết liền, ko dấu, chữ thường, vd tên là Đỗ Duy Cốp thì fullname là `doduycop`
  khi đó 3 file sẽ là: index.html, doduycop.js và doduycop.css
- index.html và fullname.css: trang trí tuỳ ý, có dấu ấn cá nhân, có form nhập được thông tin.
- fullname.js: lấy dữ liệu trên form, gửi đến api nodered đã làm ở bước 2.5, nhận về json, dùng json trả về để tạo giao diện phù hợp với kết quả truy vấn của bạn.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/718af0f1-e501-4d9c-93fb-0878c73f0c85" />

<img width="1919" height="536" alt="image" src="https://github.com/user-attachments/assets/0dc5c054-1d28-4c94-9260-5db70c5e4973" />

2.7. Nhận xét bài làm của mình:
- đã hiểu quá trình cài đặt các phần mềm và các thư viện như nào?

Em đã hiểu được quy trình cài đặt và cấu hình các phần mềm cần thiết như SQL Server 2022, Node-RED, và Apache HTTP Server.
Đồng thời biết cách cài đặt và sử dụng các node hỗ trợ (như node-mssql) trong Node-RED, cũng như cách cấu hình thông số kết nối (IP, port, username, password, database) để hệ thống hoạt động thông suốt giữa các phần mềm.

- đã hiểu cách sử dụng nodered để tạo api back-end như nào?

Em đã nắm được quy trình tạo một flow API gồm 4 node cơ bản:
http in → function → mssql → http response.
Hiểu được cách xử lý dữ liệu yêu cầu (request) trong node Function, cách truy vấn dữ liệu tới cơ sở dữ liệu SQL Server qua node MSSQL, và cách trả kết quả JSON về client.
Em cũng đã biết kiểm tra API bằng trình duyệt hoặc Postman thông qua đường dẫn như http://localhost:1880/timkiem?q=....

- đã hiểu cách frond-end tương tác với back-end ra sao?

Em đã hiểu cách mà giao diện web (HTML + CSS + JS) gửi yêu cầu đến API Node-RED bằng phương thức GET, nhận dữ liệu JSON trả về, sau đó xử lý và hiển thị thông tin lên giao diện.
Quá trình này giúp em hiểu rõ hơn về cách client – server giao tiếp và cách tích hợp giữa front-end và back-end trong một ứng dụng web hoàn chỉnh.

TIÊU CHÍ CHẤM ĐIỂM:
1. y/c bắt buộc về thời gian: ko quá Deadline, quá: 0 điểm (ko có ngoại lệ)
2. cài đặt được apache và nodejs và nodered: 1đ
3. cài đặt được các thư viện của nodered: 1đ
4. nhập dữ liệu demo vào sql-server: 1đ
5. tạo được back-end api trên nodered, test qua url thành công: 1đ
6. tạo được front-end html css js, gọi được api, hiển thị kq: 1đ
7. trình bày độ hiểu về toàn bộ quá trình (mục 2.7): 5đ

GHI CHÚ:
1. yêu cầu trên cài đặt trên ổ D, nếu máy ko có ổ D có thể linh hoạt chuyển sang ổ khác, path khác.
2. có thể thực hiện trực tiếp trên máy tính windows, hoặc máy ảo
3. vì csdl là tuỳ ý: sv cần mô tả rõ db chứa dữ liệu gì, nhập nhiều dữ liệu test có nghĩa, json trả về sẽ có dạng như nào cũng cần mô tả rõ.
4. có thể xây dựng nhiều API cùng cơ chế, khác tính năng: như tìm kiếm, thêm, sửa, xoá dữ liệu trong DB.
5. bài làm phải có dấu ấn cá nhân, nghiêm cấm mọi hình thức sao chép, gian lận (sẽ cấm thi nếu bị phát hiện gian lận).
6. bài tập thực làm sẽ tốn nhiều thời gian, sv cần chứng minh quá trình làm: save file `readme.md` mỗi khoảng 15-30 phút làm : lịch sử sửa đổi sẽ thấy quá trình làm này!
7. nhắc nhẹ: github ko fake datetime được.
8. sv được sử dụng AI để tham khảo.

DEADLINE: 26/10/2025

