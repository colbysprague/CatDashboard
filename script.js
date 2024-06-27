catData = {
  "cats": [
    {
      "name": "🎲 Fats Domino ",
      "imgPath": "assets/fatsdomino.jpeg",
      "weight": "288g",
      "desc": "Biggest Kitten. Never sit still.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/fatsdomino.jpeg"
    },
    {
      "name": "🖤 Darth Vader",
      "imgPath": "assets/darthvader.jpeg",
      "weight": "282g",
      "desc": "Big complainer. Very loud.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/darthvader.jpeg"
    },
    {
      "name": "🚀 Fuzz Lightyear",
      "imgPath": "assets/fuzzlightyear.jpg",
      "weight": "253g",
      "desc": "Always got milk on my chin.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/fuzzlightyear.jpg"
    },
    {
      "name": "🦍 Godzilla",
      "imgPath": "assets/godzilla.jpeg",
      "weight": "282g",
      "desc": "I push my siblings off da nipple.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/godzilla.jpeg"
    },
    {
      "name": "💥 Bonk (Roommate)",
      "imgPath": "assets/bunk.jpeg",
      "weight": "7.6lb",
      "desc": "I do not like the kittens.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/bunk.jpeg"
    },
    {
      "name": "🎀 Trixie (Mom)",
      "imgPath": "assets/mum.jpeg",
      "weight": "6.2lb",
      "desc": "I love my kittens",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/mum.jpeg"
    },
    {
      "name": "🏀 Dunkaroo AKA Dunk (Lives upstairs)",
      "imgPath": "assets/dunk.jpeg",
      "weight": "fat",
      "desc": "...What kittens?",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/dunk.jpeg"
    }
  ]
}

const container = document.querySelector('#cat-container')



catData.cats.forEach(cat => {
  let catCardsHTML = `
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
      <a href=${cat.bigImg} target="_blank">
          <img src="${cat.imgPath}" alt="${cat.name}" class="w-full h-48 object-cover">
      </a>
          <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-800">${cat.name}</h3>
              <p class="text-gray-600 mt-2">Weight: ${cat.weight}</p>
              <p class="text-gray-600 mt-2">${cat.desc}</p>
          </div>
      </div>
  `;

  container.innerHTML += catCardsHTML;
})


console.log(catData)
