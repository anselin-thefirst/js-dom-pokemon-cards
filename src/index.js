
const cardsUL = document.querySelector(".cards");

function renderCards() {
    cardsUL.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        const card = data[i]
        const cardLi = document.createElement('li')
        cardLi.setAttribute('class', 'card')

        // pokemon name
        const cardTitle = document.createElement('h2')
        cardTitle.setAttribute('class', 'card--title')
        cardTitle.textContent = card.name.charAt(0).toUpperCase() + card.name.slice(1);

        // pokemon image
        const cardImg = document.createElement('img')
        cardImg.setAttribute('class','card--img')
        cardImg.src = card.sprites.other["official-artwork"].front_default;
        cardImg.width = 256;

        // pokemon stats
        const cardText = document.createElement('ul')
        cardText.setAttribute('class', 'card--text')
        for (let i = 0; i < card.stats.length; i++) {
            const pokemonStats = document.createElement('li');
            pokemonStats.textContent =  (card.stats[i].stat.name).toUpperCase() + ": " + card.stats[i].base_stat
            cardText.appendChild(pokemonStats);
        }
        
        cardLi.appendChild(cardTitle);
        cardLi.appendChild(cardImg);
        cardLi.appendChild(cardText)
        cardsUL.appendChild(cardLi);
    }
}

function main() {
    renderCards()
}

main()
