
const cardsUL = document.querySelector(".cards");

function renderCards() {
    cardsUL.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        const card = data[i]
        const cardLi = document.createElement('li')
        cardLi.setAttribute('class', 'card')
        const cardTitle = document.createElement('h2')
        cardTitle.setAttribute('class', 'card--title')
        const cardImg = document.createElement('img')
        cardImg.setAttribute('class','card--img')
        const cardText = document.createElement('ul')
        cardText.setAttribute('class', 'card--text')

        cardTitle.textContent = card.name;
        cardImg.src = card.sprites.front_default;
        cardImg.width = 256;
        cardLi.appendChild(cardTitle);
        cardLi.appendChild(cardImg);

        for (let i = 0; i < card.stats.length; i++) {
            const pokemonStats = document.createElement('li');
            pokemonStats.textContent = card.stats[i].stat.name + ": " + card.stats[i].base_stat
            cardText.appendChild(pokemonStats);
        }
        cardLi.appendChild(cardText)
        cardsUL.appendChild(cardLi);
    }
}

function main() {
    renderCards()
}

main()
