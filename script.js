let myForm  = document.querySelector("#test-form")

if(localStorage.getItem("criminals") === null){
    var myArray = []
}else { 
    myArray = JSON.parse(localStorage.getItem("criminals"))
}
myForm.addEventListener("submit", function(event){
    event.preventDefault()

    myArray.push({
        id:"",
        firstName: event.target.elements.firstName.value,
        secondName: event.target.elements.secondName.value,
        crime: event.target.elements.crime.value
    })

    myArrayJSON = JSON.stringify(myArray)
    localStorage.setItem("criminals", myArrayJSON)


    event.target.elements.firstName.value = ""
    event.target.elements.secondName.value = ""
    event.target.elements.crime.value = ""
})

let toList = document.querySelector(".to-list")
toList.addEventListener("click", function(event){

if(localStorage.getItem("criminals") == null ){

let paragraph = document.createElement("p")
paragraph.textContent = "Databaze zločincu je prazdna"
document.querySelector("#list-criminals").appendChild(paragraph)

}else{
    let myStorage = localStorage.getItem("criminals")
    let myStorageJSON = JSON.parse(myStorage)

    document.querySelector("#list-criminals").innerHTML = ""

    myStorageJSON.forEach(function(oneCriminal){
        let paragraph = document.createElement("p")

        paragraph.innerHTML = 
        `Jmeno: ${oneCriminal.firstName}, <br>
        Primeni: ${oneCriminal.secondName}, <br>
        Zločin: ${oneCriminal.crime} <br>
        `
        document.querySelector("#list-criminals").appendChild(paragraph)

    })
}
})

//filter
let nameFilter = document.querySelector(".name-filter")
let myStorage = localStorage.getItem("criminals")
let myStorageJSON = JSON.parse(myStorage)

nameFilter.addEventListener("input", function(event){
    let whatWeSearch = event.target.value

    let ourResault = myStorageJSON.filter(function(oneCriminal){
        return oneCriminal.firstName.toLowerCase().includes(whatWeSearch.toLowerCase())
    })

    document.querySelector(".filter-name").innerHTML = ""

    ourResault.forEach(function(oneCriminal){
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `Jmeno: ${oneCriminal.firstName},<br>
                               Primeni: ${oneCriminal.secondName},<br>
                               Zlocin: ${oneCriminal.crime}`
        document.querySelector(".filter-name").appendChild(paragraph)
    })
})

