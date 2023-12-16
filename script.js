var innerCursor = document.querySelector(".inner-Cursor");
const mail = document.querySelector("#mail");

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

