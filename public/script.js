preLoader = document.getElementById("preLoader")
window.addEventListener('load',()=>{
    setTimeout(() => {
       preLoader.style.display = "none"
    }, 3000);
})

