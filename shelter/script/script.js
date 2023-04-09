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
const btnLeft = document.querySelector('#button-left');
const btnRight = document.querySelector('#button-right');
const sliderWrapper = document.querySelector('#sliderWrapper')
  

btnLeft.addEventListener('click', {

})

btnRight.addEventListener('click', {

})



//modal window 
const modalClose = document.querySelector('#modal-ovrl'); //доступ к диву с модалкой
const btn = document.querySelector('#button_cls'); //кнопка закрытия модалки
const modalOpen = document.querySelectorAll('#pets__modal') //доступ к карточкам
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
const generateCardModalWindow = (value) => ``
const getPets = () => {
    return fetch('../../script/data.json')
}

getPets()
    .then (res => res.json())
    .then (data => {
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
    })
    



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

//modal window pets

