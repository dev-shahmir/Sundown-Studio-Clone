const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation(){
    var ec = document.querySelector("#ec")
    var fixed = document.querySelector("#fixed-img")
    ec.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})

ec.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})


var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-img")
        fixed.style.backgroundImage = `url(${image})`
        console.log(image)
    })
})
}


// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter", function(){
//     var image = elem1.getAttribute("data-img")
//     // console.log(image)
//     fixed.style.backgroundImage = `url(${image})`
// })

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     centeredSlides: true,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });



function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
  });
}

swiperAnimation()
page4Animation()



var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click", function(){
    if (flag == 0) {
        full.style.top = 0
        navimg.style.opacity = 0 
        flag = 1
        console.log("hi")
    } else {
        full.style.top = "-100%"
        navimg.style.opacity = 1 
        flag = 0
        console.log("bye")
    }
})






var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)


while (condition) {
    
}

function slide(){
    var swipe = document.querySelector(".mySwiper")
    var slide = document.querySelector(".slide")
    swipe.addEventListener("mouseenter", function(){
    slide.style.display = "block";
    // gsap.to(slide,{
    //     x:dets.x,
    //     y:dets.y
    // })
    console.log("dets")
})

swipe.addEventListener("mouseleave", function(){
    slide.style.display = "none"
})

}



// function cursor(){
//     var cursor = document.querySelector(".slide")
//     var pg = document.querySelector(".mySwiper")
//     pg.addEventListener("mousemove", function(dets){
//         gsap.to(cursor,{
//         x:dets.x,
//         y:dets.y,
//         duration:1,
//         // ease:"back.out"
//     })
//     })

// }

// slide()
// cursor()