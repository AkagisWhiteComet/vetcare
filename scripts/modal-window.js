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
  modal: '.modal-window1',
  btnOpen: '.modal-btn1',
  btnClose: '.modal-window__close-btn'
})

modalController({
  modal: '.modal-window2',
  btnOpen: '.modal-btn2',
  btnClose: '.modal-window__close-btn'
})

modalController({
  modal: '.modal-window3',
  btnOpen: '.modal-btn3',
  btnClose: '.modal-window__close-btn'
})

modalController({
  modal: '.modal-window4',
  btnOpen: '.modal-btn4',
  btnClose: '.modal-window__close-btn'
})

modalController({
  modal: '.modal-window21',
  btnOpen: '.modal-btn21',
  btnClose: '.modal-window__close-btn'
})

modalController({
  modal: '.modal-window22',
  btnOpen: '.modal-btn22',
  btnClose: '.modal-window__close-btn'
})

modalController({
  modal: '.modal-window23',
  btnOpen: '.modal-btn23',
  btnClose: '.modal-window__close-btn'
})

modalController({
  modal: '.modal-window24',
  btnOpen: '.modal-btn24',
  btnClose: '.modal-window__close-btn'
})