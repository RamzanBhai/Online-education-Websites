
// window scrolly color
window.addEventListener('scroll', () =>  {
document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})
  
// open the hide p
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        //change icon
        const icon=faq.querySelector('.faq__icon i');
        if(icon.className==='uil uil-plus'){
            icon.className='uil uil-minus'
        }
        else{
       icon.className='uil uil-plus'
        }
    })
})

// Show /hide menu
const menu=document.querySelector(".nav__menu");
const menuBtn=document.querySelector("#open-menu-btn");
const CloseBtn=document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',() => {
    menu.style.display ="flex";
    CloseBtn.style.display="inline-block";
    menuBtn.style.display="none";
});

CloseBtn.addEventListener('click',() => {
    menu.style.display ="none";
    CloseBtn.style.display="none";
    menuBtn.style.display="inline-block";
});