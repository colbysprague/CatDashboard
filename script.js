catData = {
  "cats": [
    {
      "name": "🎲 Fats Domino ",
      "imgPath": "assets/fatsdomino.jpeg",
      "weight": 348,
      "unit": "g",
      "desc": "Biggest Kitten. Never sit still.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/fatsdomino.jpeg",
      "superlatives": "🐵",
      "gain": 17,
    },
    {
      "name": "🦍 Godzilla",
      "imgPath": "assets/godzilla.jpeg",
      "weight": 338,
      "unit": "g",
      "desc": "I push my siblings around",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/godzilla.jpeg",
      "superlatives": "",
      "gain": 19
    },
    {
      "name": "🖤 Darth Vader",
      "imgPath": "assets/darthvader.jpeg",
      "weight": 344,
      "unit": "g",
      "desc": "Big complainer. Very loud.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/darthvader.jpeg",
      "superlatives": "📢",
      "gain": 19
    },
    {
      "name": "🚀 Fuzz Lightyear",
      "imgPath": "assets/fuzzlightyear.jpg",
      "weight": 325,
      "unit": "g",
      "desc": "I always have milk on my chin.",
      "bigImg": "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/assets/fuzzlightyear.jpg",
      "superlatives": "💪",
      "gain": 23
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

async function loadJSONForKittenCards() {
  const url = "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/kittenData.json";

  try {
    const response = await fetch(url);
    const data = await response.json();
    createKittenCards(data)
  } catch (error) {
    console.error('Error fetching the file:', error);
  }
}

function getKittenWithHighestWeightLastElement(kittens) {
  let maxWeight = -Infinity;
  let kittenWithMaxWeight = null;

  kittens.forEach(kitten => {
    let weights = kitten.weight;
    let lastWeight = weights[weights.length - 1]; // Get the last element of the weight array

    if (lastWeight > maxWeight) {
      maxWeight = lastWeight;
      kittenWithMaxWeight = kitten;
    }
  });

  return kittenWithMaxWeight;
}

function getKittenWithBiggestWeightGain(kittens) {
  let maxWeightGain = -Infinity;
  let kittenWithBiggestGain = null;

  kittens.forEach(kitten => {
    let weights = kitten.weight;
    if (weights.length >= 2) {
      let lastWeight = weights[weights.length - 1];
      let secondLastWeight = weights[weights.length - 2];
      let weightGain = lastWeight - secondLastWeight;

      if (weightGain > maxWeightGain) {
        maxWeightGain = weightGain;
        kittenWithBiggestGain = kitten;
      }
    }
  });

  return kittenWithBiggestGain;
}

function createKittenCards(catData) {

  const container = document.querySelector('#cat-container')

  container.innerHTML += `
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
          <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800" mx-auto>🏆 Daily Superlatives</h3>

              <div class="flex justify-between">
                <p class="text-gray-600 font-bold mt-2">🐵 Chunkiest Monkey: </p>
                <p class="text-gray-600 mt-2">
                  ${getKittenWithHighestWeightLastElement(catData).emoji}
                  ${getKittenWithHighestWeightLastElement(catData).name}
                </p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-600 font-bold mt-2">💪 Biggest Gains: </p>
                <p class="text-gray-600 mt-2">
                ${getKittenWithBiggestWeightGain(catData).emoji}
                ${getKittenWithBiggestWeightGain(catData).name}
                </p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-600 font-bold mt-2">📢 Loudest Meows: </p>
                <p class="text-gray-600 mt-2">😈 Darth Vader</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-400 mt-2">⏳ Last Updated: </p>
                <p class="text-gray-400 mt-2"> Sun Jun 30 @ 9:55pm </p>
              </div>
          </div>
      </div>
  `

  catData.forEach(cat => {
    let catCardsHTML = `
  <div class="bg-white rounded-lg overflow-hidden shadow-lg ">
      <a href=${cat.bigImg} target="_blank">
          <img src="${cat.imgPath}" alt="${cat.name}" class="w-full h-48 object-cover">
      </a>
          <div class="p-4">
          <div class="flex justify-between" >
              <h3 class="text-lg font-semibold text-gray-800">${cat.emoji} ${cat.name}</h3>
              <h3 class="text-lg font-semibold text-gray-800">${cat.superlatives}</h3>
          </div>
              <p class="text-gray-600 mt-2">Weight: ${cat.weight.slice(-1)}${cat.unit}</p>
              <p class="text-gray-600 mt-2">Gain/Loss: <span style="color: ${cat.gain >= 0 ? 'green' : 'red'}">${cat.gain}</span></p>
              <p class="text-gray-600 mt-2">${cat.desc}</p>
          </div>
      </div>
  `;

    container.innerHTML += catCardsHTML;
  })
}

loadJSONForKittenCards()
