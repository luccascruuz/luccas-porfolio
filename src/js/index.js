const buttonOpenModalExperience = document.querySelector('#buttonExperience')
const dialogModalExperience = document.querySelector("#dialogModalExperience")
const buttonExperienceCloseX = document.querySelector("#buttonExperienceCloseX")

const buttonOpenModalProjects = document.querySelector('#buttonPrjects')
const dialogModalProjects = document.querySelector("#dialogModalProjects")
const buttonProjectsCloseX = document.querySelector("#buttonProjectsCloseX")


window.addEventListener("click", (event) => {
    if(event.target == dialogModalProjects || event.target == dialogModalExperience) {
        dialogModalProjects.close()
        dialogModalExperience.close()
    }
})

buttonOpenModalExperience.addEventListener("click", () => {
    if (typeof dialogModalExperience.showModal === 'function') {
        dialogModalExperience.showModal()
    } else {
        alert(
            "The dialog HTML5 API is not supported by this browser. Please, update."
        )
    }
})
buttonExperienceCloseX.addEventListener("click", () => dialogModalExperience.close())

buttonOpenModalProjects.addEventListener("click", () => {
    if (typeof dialogModalProjects.showModal === 'function') {
        dialogModalProjects.showModal()
    } else {
        alert(
            "The dialog HTML5 API is not supported by this browser. Please, update."
        )
    }
})
buttonProjectsCloseX.addEventListener("click", () => dialogModalProjects.close())