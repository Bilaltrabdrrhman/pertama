const wrapper = document.querySelector(".sliderwrapper")
const menuitem = document.querySelectorAll(".menuitem")

const products =[
    {
        id: 1,
        title: "Converse ",
        price: 1000000,
        colors: [
            {
                code: "black",
                img: "./img/c1-removebg-preview.png",
            },
            {
                code : "orange",
                img : "./img/c4-removebg-preview.png"
            },
        ],
    },
    {
        id: 2,
        title: "Vans",
        price: 700000,
        colors: [
            {
                code: "black",
                img: "./img/v4-removebg-preview.png",
            },
            {
                code : "white",
                img : "./img/v5-removebg-preview.png"
            },
        ],
    },
    {
        id: 3,
        title: "Nike",
        price: 1300000,
        colors: [
            {
                code: "black",
                img: "./img/n1-removebg-preview (1).png",
            },
            {
                code : "pink",
                img : "./img//n4-removebg-preview.png"
            },
        ],
    },
    {
        id: 4,
        title: "Adidas ",
        price: 1400000,
        colors: [
            {
                code: "black",
                img: "./img/a2-removebg-preview.png",
            },
            {
                code : "white",
                img : "./img/a3-removebg-preview (2).png"
            },
        ],
    },
    {
        id: 5,
        title: "New Balance",
        price: 1230000, 
        colors: [
            {
                code: "white",
                img: "./img/nb3-removebg-preview.png",
            },
            {
                code : "brown",
                img : "./img/nb1-removebg-preview.png"
            },
        ],
    },
   
];

let choosenProduct = products [0]

const currentProductImg = document.querySelector(".productimg");
const currentProductTitle = document.querySelector(".producttitle");
const currentProductPrice = document.querySelector(".productprice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuitem.forEach((item, index) => {
    item.addEventListener("click", ( )=>{
        //change the current slide
        wrapper.style.transform = ` translateX(${ -100 * index }vw)` ;
        // change the choosen product
        choosenProduct = products[index]

        //change text of curentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "Rp. " + choosenProduct.price + ",-"
        currentProductImg.src = choosenProduct.colors[0].img;


        //assing new colors
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor= "white"
        size.style.color= "black"
        })
        size.style.backgroundColor= "black"
        size.style.color= "white"
    })
})



const productButton = document.querySelector(".productbu tton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ( )=>{
    payment.style.display="flex"
})
close.addEventListener("click", ( )=>{
    payment.style.display="none"
})


