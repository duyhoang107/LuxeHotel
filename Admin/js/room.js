// Create room
function createRoom() {
	let roomType = document.getElementById("roomType").value;
	let roomNumber = document.getElementById("roomNumber").value;
	let roomStatus = document.getElementById("roomStatus").value;
	let roomPeople = document.getElementById("roomPeople").value;
	let listRoom = localStorage.getItem("roomKey") ? JSON.parse(localStorage.getItem("roomKey")) : [];
	listRoom.push (
		{
			roomType: roomType,
			roomNumber: roomNumber,
			roomStatus: roomStatus,
			roomPeople: roomPeople,
		}
	);
	localStorage.setItem("roomKey", JSON.stringify(listRoom));
	location.reload();
	alert("Thêm phòng thành công!");
}

function renderRoom() {
	let listRoom = localStorage.getItem("roomKey") ? JSON.parse(localStorage.getItem("roomKey")) : [];
	let item = `
	<tr>
		<th scope="col">Loại phòng</th>
		<th scope="col">Số phòng</th>
		<th scope="col">Tình trạng phòng</th>
		<th scope="col">Số người</th>
		<th class="setting" scope="col">Công cụ</th>
	</tr>`;
	listRoom.map((value, index) => {
		item += `
		<tr>
			<td>${value.roomType}</td>
			<td>${value.roomNumber}</td>
			<td>${value.roomStatus}</td>
			<td>${value.roomPeople}</td>
			<td class="setting center-elem">
				<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteRoom" onclick="deleteRoom(${index})">Xóa</button>
			</td>
		</tr>
		`;
	});
	document.getElementById("roomTable").innerHTML = item;
}
renderRoom();

// Delete room
function deleteRoom(index) {
	let listRoom = localStorage.getItem("roomKey") ? JSON.parse(localStorage.getItem("roomKey")) : [];
	listRoom.splice(index, 1);
	localStorage.setItem("roomKey", JSON.stringify(listRoom));
	location.reload();
	alert("Đã xóa phòng!");
}