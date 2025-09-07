const modalController = ({modal, btnOpen, btnClose}) => {
  const buttonElems = document.querySelectorAll(btnOpen)
  const modalElem = document.querySelector(modal)

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  `

  const closeModal = event => {
    const target = event.target
    if (target === modalElem || target.closest(btnClose)) {
      modalElem.style.opacity = 0

      setTimeout(() => {
        modalElem.style.visibility = 'hidden'
      }, 100)
    }
  }

  const openModal = () => {
    modalElem.style.visibility = 'visible'
    modalElem.style.opacity = 1
  }

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal)
  })

  modalElem.addEventListener('click', closeModal)
}

modalController({
  modal: '.adv-modal1',
  btnOpen: '.modal-btn1',
  btnClose: '.modal-window__close-btn'
})

modalController({
  modal: '.adv-modal2',
  btnOpen: '.modal-btn2',
  btnClose: '.modal-window__close-btn'
})