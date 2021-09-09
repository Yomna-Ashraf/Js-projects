const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const shadow = document.querySelector("nav");
btn.addEventListener("click", function(){
    let hexColor = "#"
    for (let i = 0 ; i < 6 ; i++){
        hexColor = hexColor + hex[getRandom()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    document.querySelector("nav").style.boxShadow = "none";
});
function getRandom(){
    return Math.floor(Math.random() * hex.length);
}
////////////////////////////COUNTER//////////////////////////////////
let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn1");
btns.forEach(function(btn){
    btn.addEventListener('click', function(curr){
         let item = curr.currentTarget.classList;
         if (item.contains("increase")){
             count = count + 1;
         }
         else if (item.contains("decrease")){
             count = count - 1;
         }
         else{
             count = 0 ;
         }
         if (count < 0 ){
             value.style.color="red";
         }
         else if (count > 0) {
             value.style.color="green"
         }
         else{
             value.style.color= "black"
         }
         value.textContent=count;
    })
})
/////////////////////////REVIWES//////////////////
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
const img = document.getElementById("person-img");
const name = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
let currentItem = 2;
window.addEventListener("DOMContentLoaded", function(){
    viewPerson()

})
function viewPerson(){
    const items = reviews[currentItem];
    img.src = items.img;
    name.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.text; 
}
nextBtn.addEventListener("click", function(){
    currentItem++
    if (currentItem > reviews.length -1){
        currentItem = 0 ;
    }
    viewPerson();
})
prevBtn.addEventListener("click", function(){
    currentItem--
    if (currentItem < 0){
        currentItem = reviews.length -1  ;
    }
    viewPerson();
})


randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);

    viewPerson();
})
//////////////////NAVBAR/////////////////////
//let x = window.matchMedia("(max-width: 1000px)")
//console.log(x)
var navBtn = document.querySelector(".nav-toggle");
var menu = document.querySelector(".nav-links");
let num1 = 0

navBtn.addEventListener("click", function(){
    if (num1 == 0){
        menu.style.display = "flex";
        num1++;   
    }
    else{
        menu.style.display = "none"
        num1= num1-1
    }

}) 


//var x = window.matchMedia("(max-width: 700px)")
//console.log(x)
//mediaCheck(x) // Call listener function at run time
//x.addListener(mediaCheck) // Attach listener function on state changes
//console.log(x)
const mediaQuery = window.matchMedia('(min-width: 1000px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    menu.style.display = "flex";

  }
  else{
    menu.style.display = "none"
}
}

// Register event listener
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)
// Initial check
//////////////////////ShrinkAndCollapse////////////////
const shrinkBtn = document.querySelector(".i-btn");
const listItems = document.querySelector(".ul1");
const arr = document.querySelector("#arrow");
shrinkBtn.addEventListener("mouseover",function(){
    if(listItems.classList.contains("ul2")===false){
        listItems.classList.add("ul2");
        arr.style.transform="rotate(90deg)"
    }
    //else{
     //   listItems.classList.add("ul2");
     //   arr.style.transform="rotate(90deg)"


    //}
})
shrinkBtn.addEventListener("mouseout",function(){
    if(listItems.classList.contains("ul2")){
        listItems.classList.remove("ul2");
        arr.style.transform="rotate(0deg)"
    }
})
///////////////////////////sideBar////////////////////////////
const Xbtn = document.querySelector(".sidebar-col");
const NavSideBtn = document.querySelector(".side-toggle") ;
const sideBar = document.querySelector(".side-bar");


NavSideBtn.addEventListener("click",function(){
    if (sideBar.classList.contains("sideshow")){
        sideBar.classList.remove("sideshow");
    }
    else{
        sideBar.classList.add("sideshow")
    }
})
Xbtn.addEventListener("click",function(){
    if (sideBar.classList.contains("sideshow")){
        sideBar.classList.remove("sideshow");
    }
    else{
        sideBar.classList.add("sideshow")
    }   
})



