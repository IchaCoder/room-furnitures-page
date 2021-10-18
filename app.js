const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
const modalBackdrop = document.querySelector('.nav-btns-main');
const modal = document.querySelector('.nav-btns');
const navRightBtn = document.querySelector('.right-btn');
const navLeftBtn = document.querySelector('.left-btn');
const mobileBg = document.querySelector('.header-bg');
const desktopBg = document.querySelector('.desktop-bg');
const heading = document.querySelector('.heading');
const paragraph = document.querySelector('article > p');


let text = [
    {
        'imgMob' : 'images/mobile-image-hero-1.jpg',
        'imgDesk' : 'images/desktop-image-hero-1.jpg',
        'topic' : 'Discover innovative ways to decorate' ,
        'text' : ' We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and  in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        'imgMob' : 'images/mobile-image-hero-2.jpg',
        'imgDesk' : 'images/desktop-image-hero-2.jpg',
        'topic' : 'We are available all across the globe' ,
        'text' : " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        'imgMob' : 'images/mobile-image-hero-3.jpg',
        'imgDesk' : 'images/desktop-image-hero-3.jpg',
        'topic' : 'Manufactured with the best materials' ,
        'text' : ' Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    },
]

menuBtn.addEventListener('click', () => {
    modalBackdrop.classList.toggle('show');
    modal.classList.toggle('slide')
})


closeBtn.addEventListener('click', () => {
    modalBackdrop.classList.toggle('show');
    modal.classList.toggle('slide')
})

let index = 0;

navRightBtn.addEventListener('click', () => {
    index = index + 1;
    let windowWidth = window.innerWidth;
    
    if(index > text.length - 1) {
        index = 0
    }
    heading.textContent = text[index].topic;
    paragraph.textContent = text[index].text;

     
    // console.log(newDeskImage);
    if( windowWidth > 600) {
        newDeskImage = `url(${text[index].imgDesk})`
        desktopBg.style.backgroundImage = newDeskImage;
    } else {
        newMobImage = `url(${text[index].imgMob})`
        mobileBg.style.backgroundImage = newMobImage; 
    }
})

navLeftBtn.addEventListener('click', () => {
    index = index - 1;
    let windowWidth = window.innerWidth;
    
    if(index < 0) {
        index = text.length - 1
    }
     
    // console.log(newDeskImage);
    if( windowWidth > 600) {
        newDeskImage = `url(${text[index].imgDesk})`
        desktopBg.style.backgroundImage = newDeskImage;
    } else {
        newMobImage = `url(${text[index].imgMob})`
        mobileBg.style.backgroundImage = newMobImage; 
    }
})
