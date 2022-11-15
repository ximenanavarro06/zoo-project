fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then(response => response.json())
    .then(animals => {
        animals.forEach(animal => {
            renderFrontCard(animal)
            renderBackCard(animal)
            spottedFunction(animal)
        })

        console.log(animals)
    })

let currentAnimal; 

function spottedFunction(oneAnimal){
    oneAnimal.forEach(animal=> {
    const checkBox = document.querySelector("#myCheck");
    const text = document.querySelector("#display-text");

    console.log("random")

    if (checkBox.checked == true){
        text.style.display = "block"; 
    } else { 
        text.style.display = "none";
    }
})
}    


const cardFaceFront = document.querySelector(".card-face-front")
function renderFrontCard(oneAnimal){
    const animalName = document.createElement('h2')
    animalName.textContent = oneAnimal.name
  
    const animalImage = document.createElement('img')
    animalImage.classList = "animal-image"
    animalImage.src = oneAnimal.image_link

    const formElement = document.createElement('form')
    formElement.innerHTML = `
    <input id="donation" type="text" name="donation" placeholder="Donate to this animal"> 
    <button value="Donate">Donate</button>
        <p> 
            $<span class="donation-count">0</span> Donated
        </p>
    `;

    const spotted = document.createElement('div')
    spotted.innerHTML = `Did you spot the animal? 
    <input type="checkbox" id="myCheck" onclick="spottedFunction()">
        <p id="display-text" style="display:none">This animal was spotted! Great job Junior Zookeeper!</p>
    `;

    const heartBtnRed = document.createElement('span')
    heartBtnRed.class = "fa fa-heart"

    const heartBtnEmpty = document.createElement('span')
    heartBtnEmpty.class = "fa fa-heart"
  

    cardFaceFront.append(animalName, animalImage, heartBtnRed, heartBtnEmpty, formElement, spotted); 


    // add submit event listener
    let donationCounter = 0

    formElement.addEventListener("submit", (event) => {
        event.preventDefault(); 

    //     const donationTotal = document.querySelector(".donation-count")
    //     const moneyToDonate = event.target.donationCounter;  
    //     currentAnimal.donationCounter += parseInt(moneyToDonate)
    //     donationTotal.textContent = donationCounter

    //     donationTotal.textContent = currentAnimal.donationCounter; 

    //     cardFaceFront.append(donationTotal)

    });

}


// back of card details
const cardFaceBack = document.querySelector(".card-face-back");

function renderBackCard(oneAnimal) {
    const animalDetails = document.createElement('h3')
    animalDetails.textContent = "Animal Details"
    const latinName = document.createElement('p');
    latinName.textContent = `Latin Name: ${oneAnimal.latin_name}`;
    const type = document.createElement('p');
    type.textContent = `Type: ${oneAnimal.animal_type}`;
    const location = document.createElement('p');
    location.textContent = `Location: ${oneAnimal.geo_range}`;
    const habitat = document.createElement('p');
    habitat.textContent = `Habitat: ${oneAnimal.habitat}`;
    const diet = document.createElement('p');
    diet.textContent = `Diet: ${oneAnimal.diet}`;
    const lifespan = document.createElement('p');
    lifespan.textContent = `Lifespan: ${oneAnimal.lifespan} years`;
    const activeTime = document.createElement('p');
    activeTime.textContent = `Active Time: ${oneAnimal.active_time}`;
    const maxWeight = document.createElement('p');
    maxWeight.textContent = `Max Weight: ${oneAnimal.weight_max} lbs`;
    const maxLength = document.createElement('p');
    maxLength.textContent = `Max Length: ${oneAnimal.length_max} ft`;

    cardFaceBack.append(animalDetails, latinName, type, location, habitat, diet, lifespan, activeTime, maxWeight, maxLength)
}





