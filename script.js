
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
