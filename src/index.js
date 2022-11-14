fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then(response => response.json())
    .then(animals=> {
        animals.forEach(oneAnimal => {
            renderFrontCard(oneAnimal)
            renderBackCard(oneAnimal)
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
function renderBackCard(animals) {
    const latinName = document.querySelector("#latin-name");
    latinName.textContent = `Latin Name: ${animals.latin_name}`;
    const type = document.querySelector("#type")
    type.textContent = `Type: ${animals.animal_type}`;
    const location = document.querySelector("#location")
    location.textContent = `Location: ${animals.geo_range}`;
    const habitat = document.querySelector("#habitat")
    habitat.textContent = `Habitat: ${animals.habitat}`;
    const diet = document.querySelector("#diet")
    diet.textContent = `Diet: ${animals.diet}`;
    const lifespan = document.querySelector("#lifespan")
    lifespan.textContent = `Lifespan: ${animals.lifespan}`;
    const activeTime = document.querySelector("#active-time")
    activeTime.textContent = `Active Time: ${animals.active_time}`;
    const maxWeight = document.querySelector("#max-weight")
    maxWeight.textContent = `Max Weight: ${animals.weight_max}`;
    const maxLength = document.querySelector("#max-length")
    maxLength.textContent = `Max Length: ${animals.length_max}`;
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
