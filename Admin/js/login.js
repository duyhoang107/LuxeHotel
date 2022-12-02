function login() {
   let username = document.getElementById("username")
   let password = document.getElementById("password")

   if (username.value == "1" && password.value == "1") {
      window.location.href = "../html/index-room.html"
   }
   else  if (username.value == "" || password.value == ""){
      alert("Hãy nhập đầy đủ thông tin!")
   }
   else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!")
   }
}