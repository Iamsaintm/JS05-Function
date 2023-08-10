function login(username, password) {
  if (username == "admin" && password == "P@ssw0rd") {
    console.log("Login success");
  } else {
    console.log("Login failed");
  }
}
login(prompt("username"), prompt("password"));
