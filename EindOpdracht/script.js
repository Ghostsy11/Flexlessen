const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');


let seizoenen = [




    {
        "title": "Here is you Map Be careful choose the right exit. Ther are PMC and scavs both of them are enemy you need to escape or you die",
        "image": "img/MAP1.jpg",
        "backGround": "red"
    },

    {
        "title": "You can use this exit only when no one on map left",
        "image": "img/0.png",
        "backGround": "green"
    },

    {
        "title": "This exit need power to be able to use the door and escape",
        "image": "img/1.jpg",
        "backGround": "blue"
    },

    {
        "title": "This exit need power to be able to use the door and escape",
        "image": "img/d2.png",
        "backGround": "yellow"
    },

    {
        "title": "You can use this exit anytime you want be watch out alot of scav out there",
        "image": "img/p2.jpg",
        "backGround": "pink"
    },

    {
        "title": "You can take the train only after 20 minutes from the raid",
        "image": "img/tr.jpg",
        "backGround": "skyblue"
    },

    {
        "title": "Scavland exit can be used only if you agree with other scavs and help eachother but he might shoot you and trick you. ",
        "image": "img/33.jpg",
        "backGround": "brown"
    },

    {
        "title": "Hole inFence this exit is open but there is sniper you need to kill him before you exit otherwise you die",
        "image": "img/whole.jpg",
        "backGround": "blueviolet"
    },

    {
        "title": "Sewer exit you can use this exit anytime but you have to leave you stuff behind ",
        "image": "img/77.png",
        "backGround": "burlywood"
    },

    {
        "title": "Clieff exit the most safest exit but you need redrebble to be able climb the mountain",
        "image": "img/99.jpg",
        "backGround": "grey"
    },
]



/*let seizoen = {
    "title": "lente",
    "image": "img/spring.jpg"
};*/


function show(index) {

    myTitle.innerHTML = seizoenen[index].title;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;

}