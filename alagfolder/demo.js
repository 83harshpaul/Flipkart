// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");
// const special = document.querySelector(".special")
// const dots = document.querySelectorAll(".dots")




// let counter = 1;
// let size = 30;
// const forward = ()=>{
//     // if(counter)
//     // if(counter>=dots.length) return;
//     // console.log(counter >= dots.length);
//     // special.style.left =`${17.5 + size*counter}px`;
//     special.style.transform =`translateX(${size*counter}px)`; 
//     // special.style.width =`30px`; 
//     counter++;
    
// }
// next.addEventListener("click",forward);


// const backward = ()=>{
//     // if(counter)
//     // console.log(counter >= dots.length);
//     // special.style.left =`${17.5 + size*counter}px`;
//     counter--;
//     console.log(counter)
//     special.style.transform =`translateX(${size*counter}px)`;
    
    
// }
// prev.addEventListener("click",backward);

const inner = document.querySelector(".content-inner");
const sibling = document.querySelector(".hov");


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



//  window.addEventListener("resize",()=>{
//     let tope = findPosition1(inner);
//     let lefte = findPosition2(inner);
//     console.log(tope)
// console.log(lefte)
//     sibling.style.top = `${tope}`;
//     sibling.style.left = `${lefte}`;
// })
inner.addEventListener("mouseover", () => {
    
    // sibling.style.top = `${findPosition1(inner)}`;
    let tope = findPosition1(inner) + 60;
    let lefte = findPosition2(inner);
//     console.log(tope)
// console.log(lefte)
    sibling.style.top = `${tope}px`;
    sibling.style.left =`${lefte}px`;
    sibling.style.display = "block";
    
})
inner.addEventListener("mouseout", () => {
    sibling.style.display = "none";
})

sibling.addEventListener("mouseover", () => {
    sibling.style.display="block";
})
sibling.addEventListener("mouseout", () => {
    sibling.style.display="none";
})
// function findPosition(element) {
//     const rect = element.getBoundingClientRect();
//     return {
//         top: rect.top + window.pageYOffset,
//         left: rect.left + window.pageXOffset
//     };
// }

// const box = document.querySelector('.content-inner');
// const hov = document.querySelector('.hov');

// box.addEventListener('mouseenter', () => {
//     const position = findPosition(box);
//     hov.style.top = `${position.top}px`;
//     hov.style.left = `${position.left}px`;
//     hov.style.display = 'block';
// });

// box.addEventListener('mouseleave', () => {
//     hov.style.display = 'none';
// });

// hov.addEventListener("mouseover", () => {
//     sibling.style.display="block";
// })
// hov.addEventListener("mouseout", () => {
//     sibling.style.display="none";
// })

// window.addEventListener('resize', () => {
//     if (hov.style.display === 'block') {
//         const position = findPosition(box);
//         hov.style.top = `${position.top}px`;
//         hov.style.left = `${position.left}px`;
//     }
// });

// window.addEventListener('scroll', () => {
//     if (hov.style.display === 'block') {
//         const position = findPosition(box);
//         hov.style.top = `${position.top}px`;
//         hov.style.left = `${position.left}px`;
//     }
// });
        let pixels = 250;
window.addEventListener('resize', () => {
    pixels--;
    if(pixels > 150){
        causel.style.height =`${pixels}`;
    }
})

