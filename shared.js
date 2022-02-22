let backdrop = document.querySelector('.backdrop')

let modal = document.querySelector('.modal')

let selectPlanButtons = document.querySelectorAll('.plan button')


for(let i = 0; i < selectPlanButtons.length; i++) {

  selectPlanButtons[i].addEventListener('click', function () {

    console.log(selectPlanButtons[i])

    backdrop.style.display = 'block'

    modal.style.display = 'block'

  })

}



