fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then(response => response.json())
    .then(animals => {
        animals.forEach(animal => {
            // animalCard(animals)
            renderFrontCard(animal)
            renderBackCard(animal)
            flipCard(animal)
        })
        addDonations()
        console.log(animals)
    })

// donation form submit event listener 

const visitorName = document.querySelector("#person-name")
    visitorName.addEventListener("change", personName)
    function personName() {
        const name = document.querySelector("#person-name");
        name.value = name.value.toUpperCase();
      }
// donation form submit event listener

function addDonations() {
    const donationForm = document.querySelector("#donation-form");
    donationForm.addEventListener("submit", (event) => {
        event.preventDefault();
    const moneyToAdd = event.target["donation-amount"].value;
    let num = parseInt(document.querySelector(".donation-count").textContent);
    num += parseInt(moneyToAdd);
    const total = document.querySelector(".donation-count").textContent = num;
    });
}
// front of card details
const cardFaceFront = document.querySelector(".card-face-front")
function renderFrontCard(oneAnimal){
    const animalContainer = document.createElement('div')
    animalContainer.className = "animalCard"
    cardFaceFront.append(animalContainer)
    const animalName = document.createElement('h2')
    animalName.textContent = oneAnimal.name
    const animalImage = document.createElement('img')
    animalImage.classList = "animal-image"
    animalImage.src = oneAnimal.image_link
    const spotted = document.createElement('div')
    spotted.className = "spotted-element"
    const spottedBtnContainer = document.createElement('div')
    spottedBtnContainer.className = "spotted-button"
    spottedBtnContainer.innerHTML = `
        <button id="card-button">
            <p>I SPOTTED THIS ANIMAL!</p>
        </button>
    `
        // add click event listener for Spotted Element:
    const message = document.createElement('p')
    spottedBtnContainer.addEventListener("click", event => {
        if (event.target == "clicked") return;
        console.log("You spotted this animal! Great job Junior Zookeeper!")
        message.textContent = `You spotted this animal! Great job ${visitorName} Junior Zookeeper!`
        message.textContent = `You spotted this animal! Great job Junior Zookeeper!`
        message.innerHTML = `You spotted the <strong>${oneAnimal.name}</strong>! Great job Junior Zookeeper!`
        spotted.append(message);
        event.stopPropagation();
    })
    const heartBtnRed = document.createElement('span')
    heartBtnRed.class = "fa fa-heart"
    const heartBtnEmpty = document.createElement('span')
    heartBtnEmpty.class = "fa fa-heart"
    animalContainer.append(animalName, animalImage, heartBtnRed, heartBtnEmpty, spotted, spottedBtnContainer);
}
// back of card details
const cardFaceBack = document.querySelector(".card-face-back");
function renderBackCard(oneAnimal) {
    const animalInfo = document.createElement('div')
    animalInfo.className = "animal-info"
    cardFaceBack.append(animalInfo)
    const animalDetails = document.createElement('h3')
    animalDetails.textContent = `Animal Details: ${oneAnimal.name}`
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
    animalInfo.append(animalDetails, latinName, type, location, habitat, diet, lifespan, activeTime, maxWeight, maxLength)
}

//Flip Card
const card = document.querySelector("#card")
card.addEventListener("dblclick", flipCard);
//flipCard.preventDefault();

function flipCard() {
    card.classList.toggle("flipCard")
}


