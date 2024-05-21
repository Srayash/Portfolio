var innerCursor = document.querySelector(".inner-Cursor");
const mail = document.querySelector("#mail");
burger = document.querySelector("#burger");
navbar = document.querySelector(".nav");
project1 = document.querySelector(".project1")

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
}

let projects = Array.from(document.querySelectorAll(`.project1`,`.project2`));

console.log(projects);

projects.forEach((project) => {
    project.addEventListener('mouseover', ()=>{
        innerCursor.classList.add("grow");
        innerCursor.innerHTML = "<i class='bx bx-link'></i>";
});
    project.addEventListener('mouseleave', ()=>{
        innerCursor.classList.remove("grow");
        innerCursor.innerHTML = "";
});
});

const logo= document.querySelector(".headerLogo");

logo.addEventListener("click", ()=>{
    location.reload();
})

mail.addEventListener("click", ()=>{
    open('mailto:srayashsingh995@gmail.com');
})


burger.addEventListener("click", ()=>{
    navbar.classList.toggle("v-class-resp");
})

project1.addEventListener('click', ()=>{
    open('https://grade-calculator-gold.vercel.app');
})

project2.addEventListener('click', ()=>{
    open('https://srayash.github.io/MERN');
})
