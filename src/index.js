fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then(response => response.json())
    .then(animals=> {
        animals.forEach(oneAnimal => {
            renderFrontCard(oneAnimal)
        })

        console.log(animals)
    })


let currentAnimal; 

function renderFrontCard(animal){
    const animalName = document.querySelector("#animal")
    animalName.textContent = `${animal.name}`

    const animalImage = document.querySelector("#animal-image")
    animalImage.src = `${animal.image_link}` 

        // add submit event listener
    currentAnimal = animal
    // const donateForm = document.querySelector("#donate")
    // donateForm.addEventListener("submit", (event) =>{
    //     event.preventDefault();

    // const addDonation = event.target.donation.value;
    // currentAnimal.


    // })
}






// function spottedFunction(){
//     const checkBox = document.querySelector("#myCheck");
//     const text = document.querySelector("#display-text");

//     if (checkBox.checked == true){
//         text.style.dislay = "block"; 
//     } else { 
//         text.style.display = "none"
//     }
// }
