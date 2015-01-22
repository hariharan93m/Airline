var uidd = document.registration.useridname;  
var uidd1 = document.registration.LastName;  
var passid = document.registration.passid;  
var uname = document.registration.username;   
var uemail = document.registration.email;  
var umsex = document.registration.msex;  
var ufsex = document.registration.fsex;
var a=document.registration.mobile; 
function allLetter(uidd)  
{   
var letters = /^[A-Za-z]+$/;  
if(uidd.value.match(letters))  
{  
return true;  
}  
else  
{ 
document.getElementById("un").innerHTML="enter a valid firstname";
alert('enter valid firstname'); 
uidd.focus();  

return false;  
}  
}
function allLetterr(uidd1)  
{   
var letters = /^[A-Za-z]+$/;  
if(uidd1.value.match(letters))  
{  
return true;  
}  
else  
{ 
document.getElementById("un1").innerHTML="enter a valid lastname"; 
uidd1.focus();  

return false;  
}  
}
function allLetter(uname)  
{   
var letters = /^[A-Za-z]+$/;  
if(uname.value.match(letters))  
{  
return true;  
}  
else  
{  
document.getElementById("un2").innerHTML="enter a valid username";  
uname.focus();  
return false;  
}  
}

function ValidateEmail(uemail)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(uemail.value.match(mailformat))  
{  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
uemail.focus();  
return false;  
}  
} 
function ValidateMobile(a)
{
if(a=="")
{
alert("please Enter the Contact Number");
return false;
}
if(isNaN(a))
{
alert("Enter the valid Mobile Number(Like : 9566137117)");
return false;
}
if((a.length < 1) || (a.length > 10))
{
alert(" Your Mobile Number must be 1 to 10 Integers");
return false;
}
}