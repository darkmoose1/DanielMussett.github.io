document.addEventListener("DOMContentLoaded",e=>{function n(){t(!0),o(!1),c(!1),d()}function t(e){document.getElementById("overview").style.display=e?"block":"none"}function o(e){document.getElementById("about").style.display=e?"block":"none"}function c(e){document.getElementById("contact").style.display=e?"block":"none"}function d(){window.scrollTo({top:0,behavior:"smooth"})}n(),document.getElementById("overview-menu-item").onclick=n,document.getElementById("about-menu-item").onclick=function(){t(!1),o(!0),c(!1),d()},document.getElementById("contact-menu-item").onclick=function(){t(!1),o(!1),c(!0),d()}});