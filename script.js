'use strict';
// 엄격하게 확인하겠다.
// 변수, 문법을 좀더 엄격하게 사용하는 모드
// 틀리면 에러발생


// 스크롤에 따른 메뉴바 색상처리 
const navbar =document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
console.log(navbarHeight);
document.addEventListener('scroll',()=>{
    // console.log('이벤트가 발생합니다.');
    // console.log(window.scrollY);

    // .navbar--bold 클래스는 존재하지 않는다. => 스크롤을 내리면 콘솔에서 자동적으로 생성
    // classList가  .navbar--bold 클래스를 만들던 지우던 하는 역할
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--bold');
    }else{
        navbar.classList.remove('navbar--bold');
    }

});

// 스크롤에 따른 메뉴바 고정
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e)=>{
    // console.log(e);
    const target = e.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }
    // console.log(link);
    scrollIntoView(link);
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'}); 
}


//'연락주세요' 버튼 클릭시 맨아래 하단 contact로 가기
// 스크롤에 따른 메뉴바 고정
const homecontactBtn = document.querySelector('.home__contact');
homecontactBtn.addEventListener('click', ()=>{
    scrollIntoView('#contact');
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}

// 화살표를 누르면 홈으로 

const home =document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
    home.style.opacity = 1-window.scrollY/homeHeight;
});

arrowUp.addEventListener('click', ()=>{
    scrollIntoView('.home__container')
})



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}



