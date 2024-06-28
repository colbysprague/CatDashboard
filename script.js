catData = {
  "cats": [
    {
      "name": "🎲 Fats Domino ",
      "imgPath": "assets/fatsdomino.jpeg",
      "weight": 314,
      "unit": "g",
      "desc": "Biggest Kitten. Never sit still.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/fatsdomino.jpeg",
      "superlatives": "",
      "gain": 13
    },
    {
      "name": "🦍 Godzilla",
      "imgPath": "assets/godzilla.jpeg",
      "weight": 307,
      "unit": "g",
      "desc": "I push my siblings around",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/godzilla.jpeg",
      "superlatives": "",
      "gain": 15
    },
    {
      "name": "🖤 Darth Vader",
      "imgPath": "assets/darthvader.jpeg",
      "weight": 318,
      "unit": "g",
      "desc": "Big complainer. Very loud.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/darthvader.jpeg",
      "superlatives": "📢💪🐵",
      "gain": 20
    },
    {
      "name": "🚀 Fuzz Lightyear",
      "imgPath": "assets/fuzzlightyear.jpg",
      "weight": 278,
      "unit": "g",
      "desc": "I always have milk on my chin.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/fuzzlightyear.jpg",
      "superlatives": "",
      "gain": 13
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
      "desc": "Very chatty. Love my kittens.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/mum.jpeg",
      "superlatives": "",
      "gain": 0

    },
    {
      "name": "🏀 Dunk (Lives upstairs)",
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
            <h3 class="text-xl font-semibold text-gray-800" mx-auto>🏆 Daily Superlatives</h3>

            <div class="flex justify-between">
              <p class="text-gray-600 font-bold mt-2">🐵 Chunkiest Monkey: </p>
              <p class="text-gray-600 mt-2">${catData.cats.reduce((maxCat, cat) => cat.weight > maxCat.weight ? cat : maxCat).name}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-600 font-bold mt-2">💪 Biggest Gains: </p>
              <p class="text-gray-600 mt-2">🖤 Darth Vader</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-600 font-bold mt-2">📢 Loudest Meows: </p>
              <p class="text-gray-600 mt-2">🖤 Darth Vader</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-400 mt-2">⏳ Last Updated: </p>
              <p class="text-gray-400 mt-2"> Fri Jun 28 @ 11:30am </p>
            </div>
        </div>
        <div>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onclick="location.href='/gallery'" >
            View Gallery
          </button>
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
