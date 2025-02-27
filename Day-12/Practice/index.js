let form=document.getElementById("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let FullName=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let number=document.getElementById("number").value;
    let password=document.getElementById("password").value;
    let confirmpassword=document.getElementById("confirmpassword").value;

    let obj={
        FullName,email,number,password,confirmpassword
    }
    
    console.log(obj);


let td1 = document.createElement("td");                 
    td1.innerText = obj.FullName;

let td2 = document.createElement("td");
    td2.innerText = obj.email;

let td3 = document.createElement("td");
    td3.innerText = obj.number;

let td4 = document.createElement("td");
    td4.innerText = obj.password;

let td5 = document.createElement("td");
    td5.innerText = obj.confirmpassword;

let tr = document.createElement("tr");
    document.getElementById("tbody").append(tr);

});
