const $buttons = document.querySelectorAll("a")
$buttons.forEach(btn =>{
    //Adding an eventListener
    btn.addEventListener("click",(e)=>{
        let x = e.clientX - e.target.offsetLeft;
        let y =e.clientY - e.target.offsetTop;
        
        let ripples = document.createElement('span');
        ripples.style.left = x+'px';
        ripples.style.top = y+'px';
        btn.appendChild(ripples);

        setTimeout(()=>{
            ripples.remove()
        },900)
        console.log("Apretaste una mascota")
    })
}
)

$buttons.forEach(btn=>{
    console.log(btn)
})