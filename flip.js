const causel = document.querySelector(".causel");
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
let slide1 = document.querySelector(".sliders1");
// console.log(images)



const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let preButton = document.querySelector(".le");
let forButton = document.querySelector(".ri");
const dots = document.querySelectorAll(".dot");


// Clone the first and last images
const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

carouselSlide.appendChild(firstClone);
carouselSlide.insertBefore(lastClone, images[0]);

let counter = 0;
// const size = images[0].clientWidth;
const size = 1487;

// carouselSlide.style.transform = `translateX(${-size * counter}px)`;

let autoSlide = setInterval(() => {
    slideToNext();
}, 3000);
const slideToNext =  () => {
    if (counter >= images.length+1 ) return;
    
    counter++;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;  
    for(let i=0;i<dots.length; i++){
        dots[i].classList.remove("active");
        dots[i].style.width = "8px";
    
    }
    // console.log(counter);
    if(counter === 4){
        dots[0].classList.add("active");
        dots[0].style.width = "16px";
        dots[0].style.borderRadius = "16px";
    
    }
    else if(counter === 5){
        dots[1].classList.add("active");
        dots[1].style.width = "16px";
    
    }
    // if( counter < dots.length)

    if(counter < 4){  
    dots[counter].classList.add("active");
    dots[counter].style.width = "16px";
    dots[counter].style.borderRadius = "16px";
    }
    
}
nextButton.addEventListener('click',slideToNext);
//   counter =1;
prevButton.addEventListener('click', () => {
       
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    console.log(counter);

    for(let i=0;i<dots.length; i++){
        dots[i].classList.remove("active");
        dots[i].style.width = "8px";
        
    }
    
    dots[counter].classList.add('active');
    dots[counter].style.width = "16px";
});

const transit =() => {
    const images = document.querySelectorAll('.carousel-slide img'); // Get updated list with clones
    if (images[counter].id === 'first-clone') {
        carouselSlide.style.transition = 'none';
        counter = 1;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        // dots[counter].style.width = "16px";
        // dots[counter-1].classList.add('active');
    } else if (images[counter].id === 'last-clone') {
        carouselSlide.style.transition = 'none';
        counter = images.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        // dots[counter].style.width = "16px";
    }
};
carouselSlide.addEventListener('transitionend', transit);



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



window.addEventListener("resize",()=>{
    let casuelwidth = window.innerWidth * 0.168010752688172;
    if(casuelwidth > 150){
    causel.style.height =`${casuelwidth}px`;
}   
})


// navbar
const fashion = document.querySelector("#fashion");
const container = document.querySelector(".content");
const items = document.querySelectorAll(".item");
const car = document.querySelector(".dropdown2");
const dropdowns = document.querySelectorAll("#dropdown3");
const iTags = document.querySelectorAll(".item i");



// items.forEach(function(item){
//     item.addEventListener("mouseover" , (e)=>{
        // console.log(items.length);
        // let currentElement = e.currentTarget;
        // let dropdown = currentElement.nextElementSibling;
        // let anchorsLength = dropdown.children.length -1;
        // let divHeight = items.length*42;
        // let anchorHeight = anchorsLength*42+36;
        // if(anchorsLength > 0){
        //     if(anchorHeight > divHeight ){
        //         let heightDiff = anchorHeight - divHeight;
        //         car.style.paddingBottom = `${heightDiff}px`;
        //     }else{
        //         let heightDiff = divHeight-anchorHeight+4;
        //         dropdown.style.paddingBottom = `${heightDiff}px`;
        //     }
    
        // }
        // item.addEventListener("mouseout",()=>{
        //     if(anchorsLength > 0){
        //         if(anchorHeight > divHeight ){
        //             car.style.paddingBottom = "0px";
        //         }
                // }else{
                //     dropdown.style.paddingBottom = "0px";
                // }
//             }
//         })
//         dropdown.addEventListener("mouseover",()=>{
//             let heightDiff = anchorHeight - divHeight;
//             car.style.paddingBottom= `${heightDiff}px`;
//         });  
//         dropdown.addEventListener("mouseout",()=>{
//             let heightDiff = anchorHeight - divHeight;
//             car.style.paddingBottom= `0px`;
//         });  
//     });
     
// });



items.forEach(function(item){
    item.addEventListener("mouseover",(e)=>{
       
        let currentElementId = e.currentTarget.id;
        if(currentElementId<4){
        dropdowns[currentElementId].style.display = "block";
        let anchorsLength = dropdowns[currentElementId].children.length-1;
        let divHeight = items.length*42;
        let anchorHeight = anchorsLength*42+36;
        if(anchorsLength > 0){
            if(anchorHeight > divHeight ){
                let heightDiff = anchorHeight - divHeight;
                car.style.paddingBottom = `${heightDiff}px`;
            }else{
                let heightDiff = divHeight-anchorHeight+4;
                dropdowns[currentElementId].style.paddingBottom = `${heightDiff}px`;
            }
    
        }
    
    item.addEventListener("mouseout",(e)=>{
        let currentElementId = e.currentTarget.id;
         dropdowns[currentElementId].style.display = "none";
    })
    item.addEventListener("mouseout",()=>{
        if(anchorsLength > 0){
            if(anchorHeight > divHeight ){
                car.style.paddingBottom = "0px";
            }
        }
    })
    dropdowns[currentElementId].addEventListener("mouseover",()=>{
        let heightDiff = anchorHeight - divHeight;
        car.style.paddingBottom= `${heightDiff}px`;
        dropdowns[currentElementId].style.display="block";
        items[currentElementId].classList.add("hoverd1");
        iTags[currentElementId].classList.add("hoverd2");
        
        
    });  
    dropdowns[currentElementId].addEventListener("mouseout",()=>{
        car.style.paddingBottom= `0px`;
        dropdowns[currentElementId].style.display="none";
        items[currentElementId].classList.remove("hoverd1");
        iTags[currentElementId].classList.remove("hoverd2");
    }); 
}
})
})

   


// dropdowns.forEach(function(dropdown){
//     dropdown.addEventListener("mouseover",(e)=>{
//         dropdown.style.display="block";
//     })
//     dropdown.addEventListener("mouseout",(e)=>{
//         dropdown.style.display="none";
//     })
// })
    


function findPosition1(element) {
    const rect = element.getBoundingClientRect();
    let top= rect.top + window.pageYOffset;
    return top;
    // console.log(`Top: ${rect.top}, Left: ${rect.left}`);
    // return position;
}
function findPosition2(element) {
    const rect = element.getBoundingClientRect();
    
    let left = rect.left + window.pageXOffset;
    return left;
   
}

const p = document.querySelector("#fashion p")
const iTag = document.querySelector("#fashion i")
fashion.addEventListener("mouseover", () => {
    p.style.color="#047BD5";
    iTag.style.transform = "rotate(-180deg)";
    iTag.style.transition = "0.5s ease";

    // sibling.style.top = `${findPosition1(inner)}`;
    let tope = findPosition1(fashion) +35;
    let lefte = findPosition2(fashion)-200;
    console.log(tope)
console.log(lefte)
    container.style.top = `${tope}px`;
    container.style.left =`${lefte}px`;
    container.style.display = "block";
    
    
})
fashion.addEventListener("mouseout", () => {
    container.style.display = "none";
    p.style.color="black";
    iTag.style.transform = "rotate(0deg)";
    iTag.style.transition = "0.5s ease";
})

container.addEventListener("mouseover", () => {
    container.style.display="block";
    p.style.color="#047BD5";
    iTag.style.transform = "rotate(-180deg)";
    iTag.style.transition = "0.5s ease";
})
container.addEventListener("mouseout", () => {
    container.style.display="none";
    p.style.color="black";
    iTag.style.transform = "rotate(0deg)";
    iTag.style.transition = "0.5s ease";
})

let Body = document.querySelector("body");

window.addEventListener("resize", () => {
    let widt = window.innerWidth;
    if( widt<1200 && widt >1034){
        let diff = widt-1035;
       let padd = diff*0.4848484848484848;

    //    console.log(padd)

        Body.style.padding= `0 ${padd}px `;
        // header.style.padding= `12px ${padd}px`;
    }
    else if(widt >1200){
        Body.style.padding = `0px 0px`;
    }
    else if(widt <777){
        Body.style.padding = `0px`;
    }
})


const profileText = document.querySelector(".profile span");
console.log(profileText)
window.addEventListener("resize", () => {
    let bodywidth = window.innerWidth;
    if(bodywidth <= 777){
        profileText.innerText ="You" ;
    }
    else{
        profileText.innerText ="Harsh";
    }
})
const header = document.querySelector("header");
window.addEventListener("resize",()=>{
    let BodyWidt = window.innerWidth;
    if( BodyWidt<1200 && BodyWidt >1087){
        let diff = BodyWidt-1035;
       let padd = diff*0.5757575757575758;
       header.style.padding =`12px ${padd}px`;
    }
    else if( BodyWidt>777 && BodyWidt<1087 ){
        header.style.padding="12px 30px";
    }
    else if(BodyWidt<777){
        header.style.padding="12px 70px";
    }
    else if(BodyWidt >1200){
        header.style.padding="12px 80px";
    }
})


