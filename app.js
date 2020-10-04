const goTopBtn = document.getElementById('go-top-btn');
const feedback = document.getElementById("FeedBack");

// EventListner
goTopBtn.addEventListener('click', ()=>{
    window.scrollTo(0,0);
})
feedback.addEventListener('click',(e)=>{
    feedback.classList.toggle("active");
}

window.addEventListener('scroll',()=>{
    if (window.scrollY > 350 ) {
            goTopBtn.style.display='block';
      }
    else{
        goTopBtn.style.display='none'; 
    }
})