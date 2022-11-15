fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then(response => response.json())
    .then(animals => {
        animals.forEach(animal => {
            renderFrontCard(animal)
            renderBackCard(animal)
        })
        console.log(animals)
    })

// front of card details 
const cardFaceFront = document.querySelector(".card-face-front")
function renderFrontCard(oneAnimal){
    const animalName = document.createElement('h2')
    animalName.textContent = oneAnimal.name
  
    const animalImage = document.createElement('img')
    animalImage.classList = "animal-image"
    animalImage.src = oneAnimal.image_link

    const spotted = document.createElement('div')
    spotted.className = "spotted-element"
    const spottedBtn = document.createElement("button")
    spottedBtn.className = "spottedBtn"
    spottedBtn.innerHTML = `<p>Click if you spotted the animal!</p>`

        // add click event listener for Spotted Element: 
    const message = document.createElement('p')
    spottedBtn.addEventListener("click", event => {
        if (event.target == "clicked") return; 
        console.log("You spotted this animal! Great job Junior Zookeeper!")
        message.textContent = "You spotted this animal! Great job Junior Zookeeper!"
        
        spotted.append(message)
    })

    const formElement = document.createElement('form')
    formElement.className = "donation"
    formElement.innerHTML = `
    <input id="donation-amount" type="type" name="donation" placeholder="Donate to this animal"/> 
    <button value="Donate">Donate</button>
        <p id="donation-total"> 
            $<span class="donation-count">0 </span> Donated
        </p>
    `;


    // add submit event listener for Donation Element:


    let currentAnimal; 

    formElement.addEventListener("submit", (event) => {
        event.preventDefault(); 
        currentAnimal = oneAnimal; 

    // const message = document.createElement('p')
    const moneyToAdd = event.target["donation-amount"].value; 
    let num = parseInt(document.querySelector(".donation-count").textContent)
    num += parseInt(moneyToAdd); 
    const total = document.querySelector(".donation-count").textContent = num;

    })


    const heartBtnRed = document.createElement('span')
    heartBtnRed.class = "fa fa-heart"

    const heartBtnEmpty = document.createElement('span')
    heartBtnEmpty.class = "fa fa-heart"
  

    cardFaceFront.append(animalName, animalImage, heartBtnRed, heartBtnEmpty, formElement, spotted, spottedBtn); 



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





