let backdrop = document.querySelector('.backdrop')

let modal = document.querySelector('.modal')

let selectPlanButtons = document.querySelectorAll('.plan button')

let closeButton = document.querySelector('.modal__action--negative') 

let toogleButton = document.querySelector('.toggle-button')

let mobileNav = document.querySelector('.mobile-nav')



// open modal
for(let i = 0; i < selectPlanButtons.length; i++) {

  selectPlanButtons[i].addEventListener('click', function () {

    showModal()

    showBackdrop()

  })

}
// end open modal




// clique em botão fechar fecha tudo
closeButton.addEventListener('click', closeModal)


// clique em backdrop fecha tudo
backdrop.addEventListener('click', closeModal)





// hamburger button mostra menu lateral
toogleButton.addEventListener('click', function() {
  showBackdrop()
  showMobileNav()
})
// end hamburger button




function closeModal() {
  hideMobileNav()
  hideBackdrop()
  hideModal()
}

function hideMobileNav() {
  mobileNav.classList.remove('open')
}

function showMobileNav() {
  mobileNav.classList.add('open')
}

function showBackdrop() {
  backdrop.classList.add('open')
}

function hideBackdrop() {
  backdrop.classList.remove('open')
}

function showModal() {
  modal.classList.add('open')
}

function hideModal() {
  modal.classList.remove('open')
}