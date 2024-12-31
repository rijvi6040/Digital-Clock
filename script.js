document.addEventListener("DOMcontenLoaded", ()=>{
    const clockElement =document.getElementById("clock")
     
    function UpdateClock(){
        const now = new Date();
        let hours =now.getHours();
        const minites = String(now.getMinutes()).padStart(2,"0")
        const seconds = String(now.getSeconds()).padStart(2,"0")

        const amPm = hours >= 12 ? "Pm":"am"
          

        hours = hours %12 

    }
})
