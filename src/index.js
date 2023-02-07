console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

// Challenge 1
fetch(imgUrl)
.then((resp) => resp.json())
.then((obj) => {
    const strArray = obj.message;
    strArray.forEach(str => {
        const img = document.createElement('img');
        img.src = str;
        document.querySelector('#dog-image-container').append(img);
    })
})


// Challenge 2 and 3

fetch(breedUrl)
.then((resp) => resp.json())
.then((obj) => {
    const objArray = obj.message;
    for (key in objArray) {
        const li = document.createElement('li');
        li.textContent = key;
        document.querySelector('#dog-breeds').append(li);

        li.addEventListener('click', e => {
            li.style.color = "purple";
        })
    }
})

// Challenge 4

const dropdown = document.querySelector("#breed-dropdown")
dropdown.addEventListener('change', e => {
    const selection = e.target.value;
    
        const liElements = document.querySelectorAll('li');

        liElements.forEach((li) => {
            if (!li.textContent.startsWith(selection)) {
                li.style.display = "none";
            } else {
                li.style.display = "block";
            }

        })
    
})