var fname = document.registration.useridname;  
var fname1 = document.registration.LastName;    
var uname = document.registration.username;   
var uemail = document.registration.email;  
var inputtxt=document.registration.mobile; 
function firstname(fname)  
{   
var letters = /^[A-Za-z]+$/;  
if(fname.value.match(letters))  
{
document.getElementById("un").innerHTML="";  
return true;  
}  
else if (!fname.value.match(letters)) 
{ 
document.getElementById("un").innerHTML="enter a valid firstname";
fname.focus();  
return false;  
}
}
function lastname(fname1)  
{   
var letters = /^[A-Za-z]+$/;  
if(fname1.value.match(letters))  
{
document.getElementById("un1").innerHTML="";  
return true;  
}  
else  
{ 
document.getElementById("un1").innerHTML="enter a valid lastname"; 
fname1.focus();  
return false;  
}  
}
function usrname(uname)  
{   
var letters = /^[A-Za-z]+$/;  
if(uname.value.match(letters))  
{  
document.getElementById("un2").innerHTML="";
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
var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
if(uemail.value.match(mailformat))  
{  
document.getElementById("u2").innerHTML="";
return true;  
}  
else  
{  
document.getElementById("u2").innerHTML="enter a mail";
uemail.focus();  
return false;  
}  
} 
function phonenumber(inputtxt)  
{  
  var phoneno = /^\d{10}$/;  
  if(inputtxt.value.match(phoneno))  
  {  
  document.getElementById("u3").innerHTML="";
      return true;  
  }  
  else  
  {  
         document.getElementById("u3").innerHTML="enter a valid mobile number"; 
        return false;  
  }  
} 
function myFunction()
{
var ab=document.getElementById("menu");
ab.style.borderColor="#9370DB";
var ab1=document.getElementById("header");
ab1.style.borderColor="#9370DB";
var ab2=document.getElementById("content");
ab2.style.borderColor="#9370DB";
var ab3=document.getElementById("footer");
ab3.style.borderColor="#9370DB";
}
function myFunction1()
{
var ab=document.getElementById("menu");
ab.style.borderColor="#F0FFFF";
var ab1=document.getElementById("header");
ab1.style.borderColor="#F0FFFF";
var ab2=document.getElementById("content");
ab2.style.borderColor="#F0FFFF";
var ab3=document.getElementById("footer");
ab3.style.borderColor="#F0FFFF";
}
function myFunction2()
{
var ab=document.getElementById("menu");
ab.style.borderColor="#FFB6C1";
var ab1=document.getElementById("header");
ab1.style.borderColor="#FFB6C1";
var ab2=document.getElementById("content");
ab2.style.borderColor="#FFB6C1";
var ab3=document.getElementById("footer");
ab3.style.borderColor="#FFB6C1";
}
function myFunction3()
{
var ab=document.getElementById("menu");
ab.style.borderColor="#9ACD32";
var ab1=document.getElementById("header");
ab1.style.borderColor="#9ACD32";
var ab2=document.getElementById("content");
ab2.style.borderColor="#9ACD32";
var ab3=document.getElementById("footer");
ab3.style.borderColor="#9ACD32";
}



