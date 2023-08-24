const buttonOpenModalExperience = document.querySelector('#buttonExperience')
const buttonOpenModalExperiencePtBr = document.querySelector('#buttonExperiencePtBr')
const dialogModalExperience = document.querySelector("#dialogModalExperience")
const dialogModalExperiencePtBr = document.querySelector("#dialogModalExperiencePtBr")
const buttonExperienceCloseX = document.querySelector("#buttonExperienceCloseX")
const buttonExperiencePtBrCloseX = document.querySelector("#buttonExperiencePtBrCloseX")

const buttonOpenModalProjects = document.querySelector('#buttonPrjects')
const buttonOpenModalProjectsPtBr = document.querySelector('#buttonPrjectsPtBr')
const dialogModalProjects = document.querySelector("#dialogModalProjects")
const dialogModalProjectsPtBr = document.querySelector("#dialogModalProjectsPtBr")
const buttonProjectsCloseX = document.querySelector("#buttonProjectsCloseX")
const buttonProjectsPtBrCloseX = document.querySelector("#buttonProjectsPtBrCloseX")


window.addEventListener("click", (event) => {
    if(event.target == dialogModalProjects || event.target == dialogModalExperience) {
        dialogModalProjects.close()
        dialogModalExperience.close()
    }
})
window.addEventListener("click", (event) => {
    if(event.target == dialogModalProjectsPtBr || event.target == dialogModalExperiencePtBr) {
        dialogModalProjectsPtBr.close()
        dialogModalExperiencePtBr.close()
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

buttonOpenModalExperiencePtBr.addEventListener("click", () => {
    if (typeof dialogModalExperiencePtBr.showModal === 'function') {
        dialogModalExperiencePtBr.showModal()
    } else {
        alert(
            "The dialog HTML5 API is not supported by this browser. Please, update."
        )
    }
})
buttonExperiencePtBrCloseX.addEventListener("click", () => dialogModalExperiencePtBr.close())


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

buttonOpenModalProjectsPtBr.addEventListener("click", () => {
    if (typeof dialogModalProjectsPtBr.showModal === 'function') {
        dialogModalProjectsPtBr.showModal()
    } else {
        alert(
            "The dialog HTML5 API is not supported by this browser. Please, update."
        )
    }
})
buttonProjectsPtBrCloseX.addEventListener("click", () => dialogModalProjectsPtBr.close())
