// Create bill
function createBill() {
   let billId = document.getElementById("billId").value;
   let billCus = document.getElementById("billCus").value;
   let billRoom = document.getElementById("billRoom").value;
   let billMoney = document.getElementById("billMoney").value;
   let listBill = localStorage.getItem("billKey") ? JSON.parse(localStorage.getItem("billKey")) : [];
   listBill.push (
      {
         billId: billId,
         billCus: billCus,
         billRoom: billRoom,
         billMoney: billMoney
      }
   );
   localStorage.setItem("billKey", JSON.stringify(listBill));
   document.getElementById("billId").value = "";
   document.getElementById("billCus").value = "";
   document.getElementById("billRoom").value = "";
   document.getElementById("billMoney").value = "";
   $('#createBill').modal('hide');
   showBill();
   location.reload();
	alert("Thêm hóa đơn thành công!");
}

// Show bill
function showBill() {
   let listBill = localStorage.getItem("billKey") ? JSON.parse(localStorage.getItem("billKey")) : [];
   let html = `
   <tr>
      <th scope="col">Mã hóa đơn</th>
      <th scope="col">Mã khách hàng</th>
      <th scope="col">Số phòng</th>
      <th scope="col">Tiền phòng</th>
      <th class="setting" scope="col">Công cụ</th>
   </tr>`;
   for (let i = 0; i < listBill.length; i++) {
      html += "<tr>";
      html += "<td>" + listBill[i].billId + "</td>";
      html += "<td>" + listBill[i].billCus + "</td>";
      html += "<td>" + listBill[i].billRoom + "</td>";
      html += "<td>" + listBill[i].billMoney + "</td>";
      html += "<td><button class='btn btn-danger' onclick='deleteBill(" + i + ")'>Xóa</button></td>";
      html += "</tr>";
   }
   document.getElementById("billTable").innerHTML = html;
}
showBill();

// Delete bill
function deleteBill(index) {
   let listBill = localStorage.getItem("billKey") ? JSON.parse(localStorage.getItem("billKey")) : [];
   listBill.splice(index, 1);
   localStorage.setItem("billKey", JSON.stringify(listBill));
   showBill();
   location.reload();
	alert("Đã xóa hóa đơn!");
}