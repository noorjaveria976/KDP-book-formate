// Navbar shadow on scroll
window.addEventListener("scroll",()=>{
  document.querySelector(".main-navbar")
    .classList.toggle("shadow",window.scrollY>50);
});
