preLoader = document.getElementById("preLoader")
window.addEventListener('load',()=>{
    setTimeout(() => {
       preLoader.style.display = "none"
    }, 3000);
})
// setTimeout(() => {
//     window.addEventListener('load',()=>{
//         preLoader.style.display = "none"
//     })
// }, 5000);
