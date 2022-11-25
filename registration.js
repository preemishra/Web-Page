function addData(){
    let uname= document.getElementById("username").value;
    let email =document.getElementById("email").value;
    let psw= document.getElementById("pwd").value;
    let pwd =document.getElementById("pwd-repeat").value;
    
    

    let a = localStorage.setItem(uname,"uname");
    console.log( a);
    let b= localStorage.setItem(email,"email");
    console.log(b);

    let c = localStorage.setItem(psw,"psw");
    console.log(c);
    let d= localStorage.setItem(pwd,"pwd");
    console.log(d);
   // localStorage.setItem("pwd",pass);
    /*localStorage.uname=username;
    localStorage.psw=pass;*/
}