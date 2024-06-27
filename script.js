catData = {
  "cats": [
    {
      "name": "🎲 Fats Domino ",
      "imgPath": "assets/fatsdomino.jpeg",
      "weight": 288,
      "unit": "g",
      "desc": "Biggest Kitten. Never sit still.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/fatsdomino.jpeg",
      "superlatives": "🐵💪"

    },
    {
      "name": "🖤 Darth Vader",
      "imgPath": "assets/darthvader.jpeg",
      "weight": 282,
      "unit": "g",
      "desc": "Big complainer. Very loud.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/darthvader.jpeg",
      "superlatives": "📢"
    },
    {
      "name": "🚀 Fuzz Lightyear",
      "imgPath": "assets/fuzzlightyear.jpg",
      "weight": 253,
      "unit": "g",
      "desc": "Always got milk on my chin.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/fuzzlightyear.jpg",
      "superlatives": ""
    },
    {
      "name": "🦍 Godzilla",
      "imgPath": "assets/godzilla.jpeg",
      "weight": 282,
      "unit": "g",
      "desc": "I push my siblings off da nipple.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/godzilla.jpeg",
      "superlatives": ""
    },
    {
      "name": "💥 Bonk (Roommate)",
      "imgPath": "assets/bunk.jpeg",
      "weight": 7.6,
      "unit": "lb",
      "desc": "I do not like the kittens.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/bunk.jpeg",
      "superlatives": ""
    },
    {
      "name": "🎀 Trixie (Mom)",
      "imgPath": "assets/mum.jpeg",
      "weight": 6.2,
      "unit": "lb",
      "desc": "I love my kittens",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/mum.jpeg",
      "superlatives": ""
    },
    {
      "name": "🏀 Dunkaroo AKA Dunk (Lives upstairs)",
      "imgPath": "assets/dunk.jpeg",
      "weight": 1,
      "unit": "fat",
      "desc": "...What kittens?",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/dunk.jpeg",
      "superlatives": ""
    }
  ]
}

const container = document.querySelector('#cat-container')

container.innerHTML += `
<div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">🏆 Daily Superlatives</h3>
            <p class="text-gray-600 mt-2">🐵 Chunkiest Monkey: ${catData.cats.reduce((maxCat, cat) => cat.weight > maxCat.weight ? cat : maxCat).name}</p>
            <p class="text-gray-600 mt-2">💪 Biggest Gains: 🎲 Fats Domino</p>
            <p class="text-gray-600 mt-2">📢 Loudest Meows: 🖤 Darth Vader</p>
        </div>
    </div>
`

catData.cats.forEach(cat => {
  let catCardsHTML = `
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
      <a href=${cat.bigImg} target="_blank">
          <img src="${cat.imgPath}" alt="${cat.name}" class="w-full h-48 object-cover">
      </a>
          <div class="p-4">
          <div class="flex justify-between" >
              <h3 class="text-lg font-semibold text-gray-800">${cat.name}</h3>
              <h3 class="text-lg font-semibold text-gray-800">${cat.superlatives}</h3>
          </div>
              <p class="text-gray-600 mt-2">Weight: ${cat.weight} ${cat.unit}</p>
              <p class="text-gray-600 mt-2">${cat.desc}</p>
          </div>
      </div>
  `;

  container.innerHTML += catCardsHTML;
})


console.log(catData)
