const nav = document.querySelector("nav");

const sectionHome = document.querySelector(".background-image-container");

const homeOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const homeObserver = new IntersectionObserver(function(
    entries, 
    homeObserver
)  {
    entries.forEach(entry => {
        // console.log(entry.target);
        if(!entry.isIntersecting) {
            nav.classList.add('navbar-default');
        }
        else{
            nav.classList.remove('navbar-default');
        }
    })
}, 
homeOptions);

homeObserver.observe(sectionHome);
