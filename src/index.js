fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then(response => response.json())
    .then(data => {
        console.log(data)

    })






// function spottedFunction(){
//     const checkBox = document.querySelector("#myCheck");
//     const text = document.querySelector("#display-text");

//     if (checkBox.checked == true){
//         text.style.dislay = "block"; 
//     } else { 
//         text.style.display = "none"
//     }
// }
