catData = {
  "cats": [
    {
      "name": "🎲 Fats Domino ",
      "imgPath": "assets/fatsdomino.jpeg",
      "weight": 301,
      "unit": "g",
      "desc": "Biggest Kitten. Never sit still.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/fatsdomino.jpeg",
      "superlatives": "🐵💪",
      "gain": 13
    },
    {
      "name": "🦍 Godzilla",
      "imgPath": "assets/godzilla.jpeg",
      "weight": 292,
      "unit": "g",
      "desc": "I push my siblings off da nipple.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/godzilla.jpeg",
      "superlatives": "",
      "gain": 10
    },
    {
      "name": "🖤 Darth Vader",
      "imgPath": "assets/darthvader.jpeg",
      "weight": 298,
      "unit": "g",
      "desc": "Big complainer. Very loud.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/darthvader.jpeg",
      "superlatives": "📢",
      "gain": 12
    },
    {
      "name": "🚀 Fuzz Lightyear",
      "imgPath": "assets/fuzzlightyear.jpg",
      "weight": 265,
      "unit": "g",
      "desc": "Always got milk on my chin.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/fuzzlightyear.jpg",
      "superlatives": "",
      "gain": 12

    },

    {
      "name": "💥 Bonk (Roommate)",
      "imgPath": "assets/loaf_bunk.jpeg",
      "weight": 7.6,
      "unit": "lb",
      "desc": "I do not like the kittens.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/loaf_bunk.jpeg",
      "superlatives": "",
      "gain": 0
    },
    {
      "name": "🎀 Trixie (Mom)",
      "imgPath": "assets/mum.jpeg",
      "weight": 6.2,
      "unit": "lb",
      "desc": "I love my kittens",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/mum.jpeg",
      "superlatives": "",
      "gain": 0

    },
    {
      "name": "🏀 Dunkaroo AKA Dunk (Lives upstairs)",
      "imgPath": "assets/dunk.jpeg",
      "weight": 1,
      "unit": "fat",
      "desc": "...What kittens?",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/dunk.jpeg",
      "superlatives": "",
      "gain": 0
    }
  ]
}

const container = document.querySelector('#cat-container')

container.innerHTML += `
<div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">🏆 Daily Superlatives</h3>

            <div class="flex justify-between">
              <p class="text-gray-600 font-bold mt-2">🐵 Chunkiest Monkey: </p>
              <p class="text-gray-600 mt-2">${catData.cats.reduce((maxCat, cat) => cat.weight > maxCat.weight ? cat : maxCat).name}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-600 font-bold mt-2">💪 Biggest Gains: </p>
              <p class="text-gray-600 mt-2">🎲 Fats Domino</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-600 font-bold mt-2">📢 Loudest Meows: </p>
              <p class="text-gray-600 mt-2">🖤 Darth Vader</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-400 mt-2">⏳ Last Updated: </p>
              <p class="text-gray-400 mt-2"> Thurs Jun 27 @ 3pm</p>
            </div>
        </div>
    </div>
`

catData.cats.forEach(cat => {
  let catCardsHTML = `
  <div class="bg-white rounded-lg overflow-hidden shadow-lg ">
      <a href=${cat.bigImg} target="_blank">
          <img src="${cat.imgPath}" alt="${cat.name}" class="w-full h-48 object-cover">
      </a>
          <div class="p-4">
          <div class="flex justify-between" >
              <h3 class="text-lg font-semibold text-gray-800">${cat.name}</h3>
              <h3 class="text-lg font-semibold text-gray-800">${cat.superlatives}</h3>
          </div>
              <p class="text-gray-600 mt-2">Weight: ${cat.weight}${cat.unit}</p>
              <p class="text-gray-600 mt-2">Gain/Loss: <span style="color: ${cat.gain >= 0 ? 'green' : 'red'}">${cat.gain}</span></p>
              <p class="text-gray-600 mt-2">${cat.desc}</p>
          </div>
      </div>
  `;

  container.innerHTML += catCardsHTML;
})
