const page = document.querySelector('.page')

// dark theme
const switchBtns = page.querySelectorAll("input[type='checkbox']");
switchBtns.forEach(btn => btn.addEventListener('click', switchTheme))

function switchTheme(evt) {
  if (evt.target.checked) switchBtns.forEach(btn => btn.checked = true);
  page.classList.toggle('page_theme_dark');
}

// navigation
const mainNavLinks = page.querySelectorAll('.header__link');
const burgerBtn = page.querySelector('.header__burger-menu');
const mobileMenu = page.querySelector('.header__mobile-menu');
const mobileNavLinks = mobileMenu.querySelectorAll('.header__link');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__mobile-menu_visible');
  burgerBtn.classList.toggle('header__burger-menu_opened');
})


// smooth scroll

for (let link of mainNavLinks) {
  link.addEventListener('click', smoothScroll);
}

for (let mobLink of mobileNavLinks) {
  mobLink.addEventListener('click', smoothScroll)
}

function smoothScroll(evt) {
  evt.preventDefault()

  const blockID = evt.target.getAttribute('href').slice(1);

  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  mobileMenu.classList.remove('header__mobile-menu_visible');
  burgerBtn.classList.remove('header__burger-menu_opened');
}

// high-road galery

const highRoadPrevBtn = page.querySelector('.high-road__btn_type_prev');
const highRoadNextBtn = page.querySelector('.high-road__btn_type_next');
const highRoadTitleEl = page.querySelector('.high-road__title');
const highRoadTextEl = page.querySelector('.high-road__text');
const highRoadImgEls = page.querySelectorAll('.high-road__img');
const highRoadSignEl = page.querySelector('.high-road__list-item');
let currentIndex = 0;

const highRoadContent = [{
  title: 'Шоссе',
  text: 'На&nbsp;шоссейном велосипеде можно ездить по&nbsp;асфальту на&nbsp;разных градиентах: будь&nbsp;то горы или равнины. Гонки проходят в&nbsp;командном пелотоне, но&nbsp;тренироваться можно и&nbsp;самостоятельно.',
  link: './images/high-road1.jpg',
  alt: 'Фотография горного шоссе',
  sign: 'high-road__list-item high-road__list-item_type_highroad'
},
{
  title: 'Грэвел',
  text: 'Грэвел похож на&nbsp;шоссейный велосипед, но&nbsp;конструкция рамы немного отличается, и&nbsp;на&nbsp;нём стоят более широкие покрышки, всё для того чтобы проехать по&nbsp;лёгкому бездорожью.',
  link: './images/high-road2.jpg',
  alt: 'Фотография велосипедиста на лесной дорожке',
  sign: 'high-road__list-item high-road__list-item_type_gravel'
},
{
  title: 'TT',
  text: 'ТТ&nbsp;&mdash; это велосипед для триатлона или раздельного старта, гооняют на&nbsp;таком велике только по&nbsp;равнинному асфальту, велик очень быстрые и&nbsp;аэродинамичный.',
  link: './images/high-road3.jpg',
  alt: 'Фотография равнинной дороги',
  sign: 'high-road__list-item high-road__list-item_type_tt'
}
]

highRoadNextBtn.addEventListener('click', showNextSection);
highRoadPrevBtn.addEventListener('click', showPrevSection);

function showNextSection() {
  currentIndex++;
  if (currentIndex == highRoadContent.length) currentIndex = 0;
  highRoadTitleEl.textContent = highRoadContent[currentIndex].title;
  highRoadTextEl.innerHTML = highRoadContent[currentIndex].text;
  highRoadImgEls[0].src = highRoadContent[currentIndex].link;
  highRoadImgEls[0].alt = highRoadContent[currentIndex].alt;
  highRoadSignEl.className = highRoadContent[currentIndex].sign;

  if (currentIndex + 1 < highRoadContent.length) {
    highRoadImgEls[1].src = highRoadContent[currentIndex + 1].link;
    highRoadImgEls[1].alt = highRoadContent[currentIndex + 1].alt;
  } else {
    highRoadImgEls[1].src = highRoadContent[0].link;
    highRoadImgEls[1].alt = highRoadContent[0].alt;
  }
}

function showPrevSection() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = highRoadContent.length - 1;
  highRoadTitleEl.textContent = highRoadContent[currentIndex].title;
  highRoadTextEl.innerHTML = highRoadContent[currentIndex].text;
  highRoadImgEls[0].src = highRoadContent[currentIndex].link;
  highRoadImgEls[0].alt = highRoadContent[currentIndex].alt;
  highRoadSignEl.className = highRoadContent[currentIndex].sign;

  if (currentIndex + 1 === highRoadContent.length) {
    highRoadImgEls[1].src = highRoadContent[0].link;
    highRoadImgEls[1].alt = highRoadContent[0].alt;
  } else {
    highRoadImgEls[1].src = highRoadContent[currentIndex + 1].link;
    highRoadImgEls[1].alt = highRoadContent[currentIndex + 1].alt;
  }

}

// bikes

const bikesNav = page.querySelector('.bikes__nav');
const bikesLinks = bikesNav.querySelectorAll('.bikes__radio');

const bikesContent = [
  {
    name: 'Шоссе',
    cards: [{
      src: './images/Cervelo.jpg',
      title: 'Cervelo Caledonia-5'
    },
    {
      src: './images/Cannondale.jpg',
      title: 'Cannondale Systemsix Himod'
    },
    {
      src: './images/treck.jpg',
      title: 'Trek Domane SL-7'
    }]
  },
  {
    name: 'Грэвел',
    cards: [{
      src: './images/cervelo-aspero.jpg',
      title: 'Cervelo Aspero GRX 810'
    },
    {
      src: './images/specialized-s.jpg',
      title: 'Specialized S-Works Diverge'
    },
    {
      src: './images/cannondale-topstone.jpg',
      title: 'Cannondale Topstone Lefty 3'
    }]
  },
  {
    name: 'TT',
    cards: [{
      src: './images/specialized-s-works-shiv.jpg',
      title: 'Specialized S-Works Shiv'
    },
    {
      src: './images/bmc.jpg',
      title: 'BMC Timemachine 01 ONE'
    },
    {
      src: './images/cervelo-p-series.jpg',
      title: 'Cervelo P-Series'
    }]
  }
]



let category = bikesContent[0];
const bikesImgs = page.querySelectorAll('.bikes__img');
const bikesNames = page.querySelectorAll('.bikes__name');

for (let link of bikesLinks) {
  link.addEventListener('click', bikesRadioBtnsHandler)
}

function bikesRadioBtnsHandler(evt) {
  const intViewportWidth = window.innerWidth;
  if (intViewportWidth <= 740) {
    openBikesMobileMenu(evt);
  } else renderBikes(evt);
}

const bikesLabels = bikesNav.querySelectorAll('.bikes__label');
function openBikesMobileMenu(evt) {

  bikesNav.classList.toggle('bikes__nav_opened');
  bikesLabels.forEach(label => label.classList.remove('bikes__label_hidden'))
  if (!bikesNav.classList.contains('bikes__nav_opened')) {
    for (let label of bikesLabels) {
      if (!label.control.checked) {
        label.classList.add('bikes__label_hidden');
      }
    }
    renderBikes(evt)
  }
}
function renderBikes(evt) {
  const val = evt.target.value;

  for (let i = 0; i < bikesContent.length; i++) {
    if (bikesContent[i].name === val) {
      category = bikesContent[i];
      break;
    }
  }
  for (let i = 0; i < bikesImgs.length; i++) {
    bikesImgs[i].src = category.cards[i].src;
    bikesImgs[i].alt = category.cards[i].title;
    bikesNames[i].textContent = category.cards[i].title;
  }

}

// bikes mobile slider

const bikesSlider = page.querySelector('.bikes__slider');
const sliderBtns = bikesSlider.querySelectorAll('.bikes__radio');
const bikesCards = document.querySelector('.bikes__cards');
const allCards = document.querySelectorAll('.bikes__card');
const stepSize = allCards[0].clientWidth;
let index = 0;

sliderBtns.forEach(btn => btn.addEventListener('click', changePicture));

function changePicture(evt) {
  index = evt.target.value - 1;
  bikesCards.style.transform = 'translateX(' + `${-stepSize * index}px)`;
}

// swipe detection and handler

const sliderWindow = document.querySelector('.bikes__slider-window');
let touchstartX = 0;
let touchendX = 0;

sliderWindow.addEventListener('touchstart', function (event) {
  touchstartX = event.changedTouches[0].screenX;
}, false);

sliderWindow.addEventListener('touchend', function (event) {
  touchendX = event.changedTouches[0].screenX;
  handleGesture();
}, false);

function handleGesture() {
  const intViewportWidth = window.innerWidth;
  if (intViewportWidth <= 740) {
    if (touchendX < touchstartX) {
      if (index === allCards.length - 1) index = -1;
      index++;
      bikesCards.style.transform = 'translateX(' + `${-stepSize * index}px)`;
    } else {
      if (index === 0) index = allCards.length;
      index--;
      bikesCards.style.transform = 'translateX(' + `${-stepSize * index}px)`;
    }
    sliderBtns[index].checked = true;
  }
}
