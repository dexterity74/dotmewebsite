const nav = document.querySelector("nav");
// const a   = document.querySelector("a[href]");

const sectionNav = document.querySelector(".background-image-container");
// const sectionHome = document.querySelector("#home");
// const sectionAbout = document.querySelector("#skills");
// const sectionSkills = document.querySelector("#skills");
// const sectionExperience = document.querySelector("#experience");
// const sectionProjects = document.querySelector("#projects");

const navOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

// const homeOptions = {
    
// };
// const aboutOptions = {
    
// };
// const skillsOptions = {
    
// };
// const experienceOptions = {
    
// };
// const projectsOptions = {
    
// };

const navObserver = new IntersectionObserver(function(
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
navOptions);

// const homeObserver = new IntersectionObserver(function(
//     entries, 
//     homeObserver
// )  {
//     entries.forEach(entry => {
//         // console.log(entry.target);
//         if(entry.isIntersecting) {
//             a.classList.add('active');
//         }
//         else{
//             a.classList.remove('active');
//         }
//     })
// }, 
// homeOptions);

// const aboutObserver = new IntersectionObserver(function(
//     entries, 
//     aboutObserver
// )  {
//     entries.forEach(entry => {
//         // console.log(entry.target);
//         if(entry.isIntersecting) {
//             a.classList.add('active');
//         }
//         else{
//             a.classList.remove('active');
//         }
//     })
// }, 
// aboutOptions);

// const skillsObserver = new IntersectionObserver(function(
//     entries, 
//     aboutObserver
// )  {
//     entries.forEach(entry => {
//         // console.log(entry.target);
//         if(entry.isIntersecting) {
//             a.classList.add('active');
//         }
//         else{
//             a.classList.remove('active');
//         }
//     })
// }, 
// skillsOptions);

// const experienceObserver = new IntersectionObserver(function(
//     entries, 
//     aboutObserver
// )  {
//     entries.forEach(entry => {
//         // console.log(entry.target);
//         if(entry.isIntersecting) {
//             a.classList.add('active');
//         }
//         else{
//             a.classList.remove('active');
//         }
//     })
// }, 
// experienceOptions);

// const projectsObserver = new IntersectionObserver(function(
//     entries, 
//     aboutObserver
// )  {
//     entries.forEach(entry => {
//         // console.log(entry.target);
//         if(entry.isIntersecting) {
//             a.classList.add('active');
//         }
//         else{
//             a.classList.remove('active');
//         }
//     })
// }, 
// projectsOptions);

// yeah it ain't working, come back when you know react/next/jquery, make this less manual

// maybe add more observers to highlight the navbar element that user is on

navObserver.observe(sectionNav);
// homeObserver.observe(sectionHome);
// aboutObserver.observe(sectionAbout);
// skillsObserver.observe(sectionSkills);
// experienceObserver.observe(sectionExperience);
// projectsObserver.observe(sectionProjects);
