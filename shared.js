let backdrop = document.querySelector('.backdrop')

let modal = document.querySelector('.modal')

let selectPlanButtons = document.querySelectorAll('.plan button')

let closeButton = document.querySelector('.modal__action--negative') 

let toogleButton = document.querySelector('.toggle-button')

let mobileNav = document.querySelector('.mobile-nav')



// open modal
for(let i = 0; i < selectPlanButtons.length; i++) {

  selectPlanButtons[i].addEventListener('click', function () {

    console.log(selectPlanButtons[i])

    backdrop.style.display = 'block'

    modal.style.display = 'block'

  })

}
// end open modal





closeButton.addEventListener('click', closeModal)


// clique em backdrop fecha tudo
backdrop.addEventListener('click', function() {  
  closeModal()
})





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
  mobileNav.style.display = 'none'
}

function showMobileNav() {
  mobileNav.style.display = 'block'
}

function showBackdrop() {
  backdrop.style.display = 'block'
}

function hideBackdrop() {
  backdrop.style.display = 'none'
}

function showModal() {
  modal.style.display = 'block'
}

function hideModal() {
  modal.style.display = 'none'
}