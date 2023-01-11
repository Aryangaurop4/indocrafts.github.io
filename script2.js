let d=document.querySelectorAll(".Categories")[0];
let a=document.querySelectorAll(".internal")[0];
let flag=0;
let x=function dikh(){
   a.className="dikh";
   flag==1;
     d.removeEventListener('click',x);
     d.addEventListener('click',y);
}
let y=function chup(){
    let b=document.querySelectorAll(".dikh")[0];
    b.className="internal";
    d.removeEventListener("click",y);
    d.addEventListener("click",x);
}
d.addEventListener("click",x);

let ab=document.querySelector("#openor");
let link=document.querySelectorAll(".links-close")[0];
let bc=function openup(){
   link.className="links-open";
   ab.removeEventListener('click',bc);
   ab.addEventListener('click',cd)
}
let cd= function closedown(){
  let closed=document.querySelectorAll(".links-open")[0];
    closed.className="links-close";
    ab.removeEventListener('click',cd);
    ab.addEventListener('click',bc);
}
ab.addEventListener('click',bc);