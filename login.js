// بيانات المستخدمين
const users = [
  {username:"admin", password:"admin123", isAdmin:true},
  {username:"user1", password:"1111", isAdmin:false},
  {username:"user2", password:"2222", isAdmin:false}
];

// تحديث زر login/logout
function updateLoginBtn(){
  const btn = document.getElementById("loginBtn");
  if(!btn) return;
  const user = localStorage.getItem("currentUser");
  if(user){
    const isAdmin = localStorage.getItem("isAdmin")==="true";
    btn.innerHTML = `
      <span style="margin-right:10px;">Hello, ${user}</span>
      ${isAdmin ? '<a href="admin.html">Admin Panel</a>' : ''}
      <button onclick="logout()">Logout</button>
    `;
  } else {
    btn.innerHTML = `<a href="login.html">Login</a>`;
  }
}

// تسجيل خروج
function logout(){
  localStorage.removeItem("currentUser");
  localStorage.removeItem("isAdmin");
  updateLoginBtn();
}

// تسجيل دخول
function loginUser(username, password){
  if(username==="admin" && password==="admin123"){
    localStorage.setItem("currentUser", "admin");
    localStorage.setItem("isAdmin","true");
    return true;
  }
  let user = users.find(u=>u.username===username && u.password===password);
  if(user){
    localStorage.setItem("currentUser", user.username);
    localStorage.setItem("isAdmin", user.isAdmin);
    return true;
  }
  return false;
}
