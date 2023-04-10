

//burger

const iconMenu = document.querySelector('.menu__icon')
const menuContainer = document.querySelector('.burger__container')
const menuLinks = document.querySelectorAll('[data-goto]')

iconMenu.addEventListener('click', (e) => {
    iconMenu.classList.toggle('_active');
    menuContainer.classList.toggle('_active');
    document.body.classList.toggle('scroll-hidden');
})


//прокрутка при клике
if (menuLinks.length > 0) {
    menuLinks.forEach(elem => {
        elem.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        const gotoBlock = document.querySelector(menuLink.dataset.goto)
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            
            if(iconMenu.classList.contains('_active')) {
                iconMenu.classList.remove('_active');
                menuContainer.classList.remove('_active');
                document.body.classList.remove('scroll-hidden');
            }
        
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
            
        }
    }
}

//slider
const displayedPets = 3;

function generateSliderDiv (val) { //функция генерации дива с карточкой
    const sliderItem = document.createElement('DIV');
    sliderItem.classList.add('slider__card');
    sliderItem.setAttribute('id', 'petsModal')
    sliderItem.innerHTML = `<img src="${val.img}" alt="${val.name}">
    <p>${val.name}</p>
    <button class="slider__button"><span>Learn more</span></button>`;
    return sliderItem;
}

//функция генерации слайдера
function generateSlider(petsArr, sliderClass) {
    const sliderItems = document.querySelector(`.${sliderClass}`);
    sliderItems.innerHTML = "";
  
    for (let i = 0; i < displayedPets; i++) {
      const sliderItem = generateSliderDiv(petsArr[i]);
      sliderItems.append(sliderItem);
    }
  }

 //modal window 
const modalClose = document.querySelector('#modal-ovrl'); //доступ к диву с модалкой
const btn = document.querySelector('#button_cls'); //кнопка закрытия модалки
const modalOpen = document.querySelectorAll('#petsModal') //доступ к карточкам
console.log(modalOpen);
//поля модалки
const modalImg = document.querySelector('#modalImg') //доступ к img модалки
const modalDescription = document.querySelector('#modalDescription');
const modalType = document.querySelector('#modalType');
const modalTitle = document.querySelector('#modalTitle');
const ageModal = document.querySelector('#ageModal')
const inoculationsModal = document.querySelector('#inoculationsModal')
const diseasesModal = document.querySelector('#diseasesModal')
const parasitesModal = document.querySelector('#parasitesModal')
//получение данных из data

function openModalWindow (data) {
        modalOpen.forEach((card, index) => {
            card.addEventListener('click', () => {
                modalImg.src = data[index].img;
                modalType.textContent = `${data[index].type} - ${data[index].breed}`;
                modalDescription.textContent = data[index].description;
                modalTitle.textContent = data[index].name;
                ageModal.innerHTML = `<b>Age:</b> ${data[index].age}`;
                inoculationsModal.innerHTML = `<b>Inoculations:</b> ${data[index].inoculations.join(', ')}`;
                diseasesModal.innerHTML = `<b>Diseases:</b> ${data[index].diseases.join(', ')}`;
                parasitesModal.innerHTML = `<b>Parasites:</b> ${data[index].parasites.join(', ')}`;
            })
        })
    }

    window.onload = async () => {
        const responce = await fetch('../../script/data.json');
        const data = await responce.json()
        generateSlider(data, 'slider__wrapper')
        alert('добрый день, друзья. к сожалению, мне не удалось ничего реализовать кроме бургера, извиняюсь за низкое качество работы')
     } 

//функция открытия модалки при нажатии на кнопку + запрет скролла
modalOpen.forEach((e) => {
    e.addEventListener('click', () => {
        modalClose.classList.toggle('hidden-modal')
        document.body.classList.toggle('scroll-hidden')
    })
})
// функция закрытия модалки при клике на кнопку
btn.addEventListener('click', () => {
    modalClose.classList.toggle('hidden-modal')
    document.body.classList.toggle('scroll-hidden')
})


