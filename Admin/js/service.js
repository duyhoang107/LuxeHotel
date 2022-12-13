// Create service
function createService() {
   let serviceType = document.getElementById("serviceType").value;
   let serviceName = document.getElementById("serviceName").value;
   let serviceRoom = document.getElementById("serviceRoom").value;
   let listService = localStorage.getItem("serviceKey") ? JSON.parse(localStorage.getItem("serviceKey")) : [];
   listService.push (
      {
         serviceType : serviceType,
         serviceName : serviceName,
         serviceRoom : serviceRoom
      }
   );
   localStorage.setItem("serviceKey", JSON.stringify(listService));
   location.reload();
	alert("Thêm dịch vụ thành công!");

}

function renderService() {
   let listService = localStorage.getItem("serviceKey") ? JSON.parse(localStorage.getItem("serviceKey")) : [];
   let item = `
   <tr>
      <th scope="col">Loại dịch vụ</th>
      <th scope="col">Tên dịch vụ</th>
      <th scope="col">Số phòng</th>
      <th class="setting" scope="col">Công cụ</th>
   </tr>`;
   listService.map((value, index) => {
      item += `
      <tr>
         <td>${value.serviceType}</td>
         <td>${value.serviceName}</td>
         <td>${value.serviceRoom}</td>
         <td class="setting center-elem">
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteService" onclick="deleteService(${index})">Xóa</button>
         </td>
      </tr>
      `;
   });
   document.getElementById("serviceTable").innerHTML = item;
}
renderService();

// Delete service
function deleteService(index) {
   let listService = localStorage.getItem("serviceKey") ? JSON.parse(localStorage.getItem("serviceKey")) : [];
   listService.splice(index, 1);
   localStorage.setItem("serviceKey", JSON.stringify(listService));
   location.reload();
	alert("Đã xóa dịch vụ!");
}