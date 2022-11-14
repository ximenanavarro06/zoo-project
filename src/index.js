fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

