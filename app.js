const menuBar = document.querySelector('.menu_bar');
const closeEl = document.querySelector('.closeBtn');
const overflowLeft = document.querySelector('.overlfow_left');
const overflow = document.querySelector('.overflow');
const sideBar = document.querySelector('.side__bar');
const modeDark = document.querySelector('.mode_dark');
const modeLight = document.querySelector('.mode_light');
const body = document.querySelector('body');

menuBar.addEventListener('click', ()=> {
    // sideBar.classList.add('animation')
    // sideBar.classList.remove('animation2')
    overflow.classList.remove('hidden')
    sideBar.style.transform = "translateX(0%)";
})
closeEl.addEventListener('click', ()=> {
    // sideBar.classList.remove('animation')
    // sideBar.classList.add('animation2')
    // overflow.classList.add('hidden')
    overflow.classList.add('hidden')
    sideBar.style.transform = "translateX(100%)";
})
overflowLeft.addEventListener('click', ()=> {
    overflow.classList.add('hidden')
    sideBar.style.transform = "translateX(100%)";
})

modeDark.addEventListener('click', () => {
    body.classList.add('darkMode')
    modeDark.classList.add('hidden')
    modeLight.classList.remove('hidden')
}) 
modeLight.addEventListener('click', () => {
    body.classList.remove('darkMode')
    modeDark.classList.remove('hidden')
    modeLight.classList.add('hidden')
}) 
// modeLight.forEach(item => {
//     item.addEventListener('click', () => {
//         body.classList.remove('darkMode')
//         modeDark.forEach((i) => {
//             i.classList.add('hidden')
//         })
//         modeLight.forEach((i) => {
//             i.classList.remove('hidden')
//         })
//     }) 

// })