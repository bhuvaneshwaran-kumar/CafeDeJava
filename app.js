const goTopBtn = document.getElementById('go-top-btn');
// function TurnOnFeedBack(){
//     document.getElementById("FeedBack").style.display="block";
//     }

// console.log("Lets Go :)");

// let row_cont = document.querySelectorAll(".row")
// // console.log(row_cont);
// for(let row in row_cont){
//     let image = row_cont[row].childNodes[3].childNodes[1];
//     let style  = `transform : scale(1.1,1.1)`;
//     console.log(row_cont[row].childNodes[3].childNodes[1]);
//     row_cont[row].addEventListener("click",()=>{
//             image.style = style;
//     })
// }

// EventListner
goTopBtn.addEventListener('click', ()=>{
    window.scrollTo(0,0);
})

window.addEventListener('scroll',()=>{
    if (window.scrollY > 350 ) {
            goTopBtn.style.display='block';
      }
    else{
        goTopBtn.style.display='none'; 
    }
})