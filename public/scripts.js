function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

function checkFields(event){
const valuesToCheck = [
    "image",
    "title",
    "Category",
    "description",
    "link",
]



const isEmpty = valuesToCheck.find(function(value) {
    
    const checkIfIsString = typeof event.target[value].value === "string"
    const checkIfIsEmpty = !event.target[title].value.trim() 

    if(checkIfIsString && checkIfIsEmpty){
        return true
    }

    if(isEmpty){
        event.preventDefault()
        alert("Por favor preencha todos os campos")
    }
})
}