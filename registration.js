function addData(){
    let uname= document.getElementById("username").value;
    let email =document.getElementById("email").value;
    let psw= document.getElementById("pwd").value;
    let pwd =document.getElementById("pwd-repeat").value;
    
    

    let a1 = localStorage.setItem(uname,"uname");
    console.log( a1);
    let b1= localStorage.setItem(email,"email");
    console.log(b1);

    let c1 = localStorage.setItem(psw,"psw");
    console.log(c1);
    let d1= localStorage.setItem(pwd,"pwd");
    console.log(d1);
   // localStorage.setItem("pwd",pass);
    /*localStorage.uname=username;
    localStorage.psw=pass;*/
}