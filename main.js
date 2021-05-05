const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes)

checkBoxes();

function checkBoxes(){
    const triggrBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        if(boxTop < triggrBottom){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    })
}