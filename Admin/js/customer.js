// Create Customer 
function createCustomer() {
   let customerId= document.getElementById("customerId").value;
   let customerName= document.getElementById("customerName").value;
   let customerPhone = document.getElementById("customerPhone").value;
   let customerAddr= document.getElementById("customerAddr").value;
   let customerEmail = document.getElementById("customerEmail").value;
   let customerRoom = document.getElementById("customerRoom").value;
   let listCustomer = localStorage.getItem("customerKey") ? JSON.parse(localStorage.getItem("customerKey")) : [];
   listCustomer.push (
      {
         customerId: customerId,
         customerName: customerName,
         customerPhone: customerPhone,
         customerAddr: customerAddr,
         customerEmail: customerEmail,
         customerRoom: customerRoom,
      }
   );
   localStorage.setItem("customerKey", JSON.stringify(listCustomer));
   location.reload();
	alert("Thêm khách hàng thành công!");
}

function renderCustomer() {
   let listCustomer = localStorage.getItem("customerKey") ? JSON.parse(localStorage.getItem("customerKey")) : [];
   let item = `
   <tr>
      <th scope="col">Mã khách</th>
      <th scope="col">Họ tên</th>
      <th scope="col">Địa chỉ</th>
      <th scope="col">Số điện thoại</th>
      <th scope="col">Email</th>
      <th scope="col">Số phòng</th>
      <th class="setting" scope="col">Công cụ</th>
   </tr>`;
   listCustomer.map((value, index) => {
      item += `
      <tr>
         <td>${value.customerId}</td>
         <td>${value.customerName}</td>
         <td>${value.customerAddr}</td>
         <td>${value.customerPhone}</td>
         <td>${value.customerEmail}</td>
         <td>${value.customerRoom}</td>
         <td class="setting center-elem">
               <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteCustomer" onclick="deleteCustomer(${index})">Xóa</button>
         </td>
      </tr>
      `;
   });
   document.getElementById("customerTable").innerHTML = item;
}
renderCustomer();

// Delete customer
function deleteCustomer(index) {
   let listCustomer = localStorage.getItem("customerKey") ? JSON.parse(localStorage.getItem("customerKey")) : [];
   listCustomer.splice(index, 1);
   localStorage.setItem("customerKey", JSON.stringify(listCustomer));
   location.reload();
	alert("Đã xóa khách hàng!");
}