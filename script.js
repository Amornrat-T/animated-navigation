const meunBars = document.getElementById ('menu-bars');
const overLay = document.getElementById ('overlay');
const nav1 = document.getElementById ('nav-1');
const nav2 = document.getElementById ('nav-2');
const nav3 = document.getElementById ('nav-3');
const nav4 = document.getElementById ('nav-4');
const nav5 = document.getElementById ('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

//control nav animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
    });
};

function toggleNav() {
    //toggle: menu bars open/close
    meunBars.classList.toggle('change');
    //toggle: menu active
    overLay.classList.toggle('overlay-active');

    if (overLay.classList.contains('overlay-active')) {
        //Animation in - overlay
        overLay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        //animate IN - navitem
        navAnimation('out', 'in');

    } else {
        //Animation out - overlay
        overLay.classList.replace('overlay-slide-right', 'overlay-slide-left')

        //animate OUT - navitem
        navAnimation('in', 'out');
    }
};

//event listener
meunBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});