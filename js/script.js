// Active Navbar
let navbar = document.querySelector(".nav-wrapper");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20)
    {
        navbar.classList.add("scroll-on");
    }
    else
    {
        navbar.classList.remove("scroll-on");
    }
}

// Not Active Navbar
let navlinks = document.querySelectorAll(".nav-link");
let navcol = document.querySelector(".navbar-collapse.collapse");

navlinks.forEach((ele) =>{
    ele.addEventListener('click',function(){
        navcol.classList.remove("show")
    })
})

// Counter
document.addEventListener("DOMContentLoaded",()=>{

    function counter(id,start,end,duration)
    {
        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end > start ? 1:-1;
        let step = Math.abs(Math.floor(duration/range));
        let timer = setInterval(() => {
            
            current += increment;
            obj.textContent = current;
            if(current == end)
            {
                clearInterval(timer);
            }

        }, step);
    }

    counter("count1",0,1278,3000);
    counter("count2",100,5278,1000);
    counter("count3",3,238,3000);
    counter("count4",49,2098,3000);
})