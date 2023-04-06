//modal window

const btn = document.querySelector('#button_cls'); //кнопка закрытия модалки
const modalClose = document.querySelector('#modal-ovrl'); //доступ к диву с модалкой
const modalOpenBtn = document.querySelectorAll('#pets__modal') //кнопка карточек

//функция открытия модалки при нажатии на кнопку + запрет скролла TODO: переделать на все окно
modalOpenBtn.forEach((e) => {
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

