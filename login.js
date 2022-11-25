function addData(){
    let username= document.getElementById("uname").value;
    let pass=document.getElementById("pwd").value;
    let lname= localStorage.setItem(username,"username");
    console.log(lname);
    let psw= localStorage.setItem(pass,"pass");
    console.log(psw);
   // localStorage.setItem("pwd",pass);
    /*localStorage.uname=username;
    localStorage.psw=pass;*/
}