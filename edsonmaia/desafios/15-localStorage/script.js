const nameForm = document.querySelector('#name-form')
const container = document.querySelector('#container')
const btnLogout = document.querySelector('#logout')


function checkUser(){
    const userName = localStorage.getItem("name")

    if (userName){
        nameForm.style.display = 'none'
        container.style.display = 'flex'

        const userNameElement = document.querySelector('#userName')
        userNameElement.textContent = userName
    }
    else{
        nameForm.style.display = 'block'
        container.style.display = 'none'
    }
}


nameForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let nameInput = document.querySelector('#inputName')
    localStorage.setItem("name", nameInput.value)

    nameInput.value = ''
    checkUser()
})
checkUser()

btnLogout.addEventListener('click', ()=>{
    localStorage.clear()
    checkUser()
})