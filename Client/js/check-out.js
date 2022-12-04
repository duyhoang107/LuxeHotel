// Create bill
function createBill() {
   let roomType = document.getElementById("roomType").value;
   let numberPeople = document.getElementById("numberPeople").value;
   let dayIn = document.getElementById("dayIn").value;
   let dayOut = document.getElementById("dayOut").value;
   let name = document.getElementById("name").value;
   let addr = document.getElementById("addr").value;
   let phone = document.getElementById("phone").value;
   let email = document.getElementById("email").value;
   let sum;
   let listBill = localStorage.getItem("billKey") ? JSON.parse(localStorage.getItem("billKey")) : [];
   if (roomType == "Superior") {
      sum = 100;
   } else if (roomType == "Deluxe") {
      sum = 150;
   } else if (roomType == "VIP") {
      sum = 200;
   }
   listBill.push(
      {
         roomType: roomType,
         numberPeople: numberPeople,
         dayIn: dayIn,
         dayOut: dayOut,
         name: name,
         addr: addr,
         phone: phone,
         email: email,
         sum: sum
      }
   );
   localStorage.setItem("billKey", JSON.stringify(listBill));
   document.getElementById("roomType").value = "";
   document.getElementById("numberPeople").value = "";
   document.getElementById("dayIn").value = "";
   document.getElementById("dayOut").value = "";
   document.getElementById("name").value = "";
   document.getElementById("addr").value = "";
   document.getElementById("phone").value = "";
   document.getElementById("email").value = "";
   location.reload();
}

// Show the last bill
function showLastBill() {
   let listBill = localStorage.getItem("billKey") ? JSON.parse(localStorage.getItem("billKey")) : [];
   let html = `
   <tr>
      <th scope="col">Loại phòng</th>
      <th scope="col">Số người</th>
      <th scope="col">Ngày vào</th>
      <th scope="col">Ngày ra</th>
      <th scope="col">Họ Tên</th>
      <th scope="col">Địa chỉ</th>
      <th scope="col">Số điện thoại</th>
      <th scope="col">Email</th>
      <th scope="col">Tổng tiền</th>
   </tr>`;
   html += "<tr>";
   html += "<td>" + listBill[listBill.length - 1].roomType + "</td>";
   html += "<td>" + listBill[listBill.length - 1].numberPeople + "</td>";
   html += "<td>" + listBill[listBill.length - 1].dayIn + "</td>";
   html += "<td>" + listBill[listBill.length - 1].dayOut + "</td>";
   html += "<td>" + listBill[listBill.length - 1].name + "</td>";
   html += "<td>" + listBill[listBill.length - 1].addr + "</td>";
   html += "<td>" + listBill[listBill.length - 1].phone + "</td>";
   html += "<td>" + listBill[listBill.length - 1].email + "</td>";
   html += "<td>" + listBill[listBill.length - 1].sum + "</td>";
   html += "</tr>";
   document.getElementById("billTable").innerHTML = html;
}
showLastBill();