


// const carouselSlide = document.querySelector('.carousel-slide');
// const images = document.querySelectorAll('.carousel-slide img');
// console.log(images)

// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// // Clone the first and last images
// const firstClone = images[0].cloneNode(true);
// const lastClone = images[images.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

// carouselSlide.appendChild(firstClone);
// carouselSlide.insertBefore(lastClone, images[0]);

// let counter = 1;
// // const size = images[0].clientWidth;
// const size = 1450;

// // carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// nextButton.addEventListener('click', () => {
//     if (counter >= images.length + 1) return;
//     counter++;
//     carouselSlide.style.transition = 'transform 0.5s ease-in-out';
//     carouselSlide.style.transform = `translateX(${-size * counter}px)`;
// });

// prevButton.addEventListener('click', () => {
//     if (counter <= 0) return;
//     counter--;
//     carouselSlide.style.transition = 'transform 0.5s ease-in-out';
//     carouselSlide.style.transform = `translateX(${-size * counter}px)`;
// });

// carouselSlide.addEventListener('transitionend', () => {
//     const images = document.querySelectorAll('.carousel-slide img'); // Get updated list with clones
//     if (images[counter].id === 'first-clone') {
//         carouselSlide.style.transition = 'none';
//         counter = 1;
//         carouselSlide.style.transform = `translateX(${-size * counter}px)`;
//     } else if (images[counter].id === 'last-clone') {
//         carouselSlide.style.transition = 'none';
//         counter = images.length - 2;
//         carouselSlide.style.transform = `translateX(${-size * counter}px)`;
//     }
// });

const items = document.querySelectorAll(".item");
const car = document.querySelector(".car");


// console.log(anchor.length);
// let divHeight = car.offsetHeight;
// let divHeight = items.length*42;
// console.log(divHeight);
// // let anchorHeight = dropdown.offsetHeight;
// let anchorHeight = anchors.length*42 + 34;
// console.log(anchorHeight);
// let heightDiff = anchorHeight - divHeight;
// console.log(heightDiff);
// const slide = (currentElementId) =>{

//     items[currentElementId].addEventListener("mouseover" ,()=>{
//         const anchors = document.querySelectorAll(".dropdown10 a");

//         // const dropdown = document.querySelector(".dropdown");
//       console.log(anchors.length);
    
    
//         let newDiv = document.createElement("div");
//     newDiv.style.padding = "17px 14px";
//     car.appendChild(newDiv);
// });

// }
// items[0].addEventListener("mouseover" , slide );


items.forEach(function(item){
    item.addEventListener("mouseover" , (e)=>{
        // console.log(items.length);
        let currentElement = e.currentTarget;
        let dropdown = currentElement.nextElementSibling;
        let anchorsLength = dropdown.children.length -1;
        let divHeight = items.length*42;
        let anchorHeight = anchorsLength*42+36;
        if(anchorsLength > 0){
            if(anchorHeight > divHeight ){
                let heightDiff = anchorHeight - divHeight;
                car.style.paddingBottom = `${heightDiff}px`;
            }else{
                let heightDiff = divHeight-anchorHeight+8;
                dropdown.style.paddingBottom = `${heightDiff}px`;
            }
    
        }
        item.addEventListener("mouseout",()=>{
            if(anchorsLength > 0){
                if(anchorHeight > divHeight ){
                    car.style.paddingBottom = "0px";
                }
                // }else{
                //     dropdown.style.paddingBottom = "0px";
                // }
            }
        })
        dropdown.addEventListener("mouseover",()=>{
            let heightDiff = anchorHeight - divHeight;
            car.style.paddingBottom= `${heightDiff}px`;
        });  
        dropdown.addEventListener("mouseout",()=>{
            let heightDiff = anchorHeight - divHeight;
            car.style.paddingBottom= `0px`;
        });  
    });
     
});
    



   

