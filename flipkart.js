let previousButton = document.querySelector(".left");
let forwardButton = document.querySelector(".right");
let preButton = document.querySelector(".le");
let forButton = document.querySelector(".ri");
let slide = document.querySelector(".sliders");
let lists = document.querySelectorAll(".sliders li");
let slide1 = document.querySelector(".sliders1");
let slides = document.querySelectorAll(".slide");
console.log(lists)

// console.log(slides.length);
// console.log(slide);
const firstClone = lists[0].cloneNode(true);
const lastClone = lists[lists.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.appendChild(firstClone);
slide.insertBefore(lastClone, lists[0]);


let tx = 0; 
let counter = 1;
const slideForward = () =>{
    if (counter >= lists.length + 1) return;
    if(tx > -49.98){
        tx -=16.66;
    }
    counter++;
    // else if(tx === -75){
    //      tx = 0;
    
    // }

    console.log(counter);
      slide.style.transition = 'transform 0.5s ease-in-out';
      slide.style.transform = `translateX(${tx}%)`;
}
forwardButton.addEventListener("click",slideForward)

const slideBackward = () =>{
    if (counter <= 0) return;
    if(tx<0){
        tx+=16.66;
    }
    counter--
//     else if(tx === 0){
//         tx = -75;
   
//    }
    console.log(counter);
    slide.style.transition = 'transform 0.5s ease-in-out';
    slide.style.transform = `translateX(${tx}%)`;

}

previousButton.addEventListener("click",slideBackward)

slide.addEventListener('transitionend', () => {
    console.log("haa")
    const lists = document.querySelectorAll('.sliders li'); // Get updated list with clones
    if (lists[counter].id === 'first-clone') {
        console.log("isme")
        slide.style.transition = 'none';
        counter = 1;
        slide.style.transform = `translateX(0%)`;
    } else if (lists[counter].id === 'last-clone') {
        slide.style.transition = 'none';
        counter = lists.length - 2;
        slide.style.transform = `translateX(-49.98%)`;
    }
});
// let tr = 0;
const slideFor = () =>{
    slide1.style.transform = "translateX(-26%)";
    forButton.style.visibility = "hidden";
    preButton.style.visibility = "visible";
}
forButton.addEventListener("click",slideFor);

const slideback = () =>{
    slide1.style.transform = "translateX(0%)";
    preButton.style.visibility = "hidden";
    forButton.style.visibility = "visible";
}
preButton.addEventListener("click",slideback);

