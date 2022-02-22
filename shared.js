let backdrop = document.querySelector('.backdrop')

let modal = document.querySelector('.modal')

let selectPlanButtons = document.querySelectorAll('.plan button')

let closeButton = document.querySelector('.modal__action--negative') 



// open modal
for(let i = 0; i < selectPlanButtons.length; i++) {

  selectPlanButtons[i].addEventListener('click', function () {

    console.log(selectPlanButtons[i])

    backdrop.style.display = 'block'

    modal.style.display = 'block'

  })

}
// end open modal



// close modal
function closeModal() {
  backdrop.style.display = 'none'
  modal.style.display = 'none'
}

closeButton.addEventListener('click', closeModal)

backdrop.addEventListener('click', closeModal)
// end close modal



