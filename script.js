async function loadJSONForKittenCards() {
  const url =
    "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/kittenData.json";

  try {
    const response = await fetch(url);
    const data = await response.json();
    createKittenCards(data);
    createPodiumCard(data);
  } catch (error) {
    console.error("Error fetching the file:", error);
  }
}

function getKittenWithHighestWeightLastElement(kittens) {
  let maxWeight = -Infinity;
  let kittenWithMaxWeight = null;

  kittens.forEach((kitten) => {
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

  kittens.forEach((kitten) => {
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
  const container = document.querySelector("#cat-container");

  container.innerHTML += `
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
          <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800" mx-auto>🏆 Daily Superlatives</h3>

              <div class="flex justify-between">
                <p class="text-gray-600 font-bold mt-2">🐵 Chunkiest Monkey: </p>
                <p class="text-gray-600 mt-2">
                  <span class="text-blue-400">
                    (${getKittenWithHighestWeightLastElement(catData).weight.slice(-1)}${getKittenWithHighestWeightLastElement(catData).unit})
                  </span>
                  ${getKittenWithHighestWeightLastElement(catData).emoji}
                  ${getKittenWithHighestWeightLastElement(catData).name}
                </p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-600 font-bold mt-2">💪 Biggest Gains: </p>
                <p class="text-gray-600 mt-2">
                <span class="text-blue-400">
                  (+${getKittenWithBiggestWeightGain(catData).gain})
                </span>
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
                <p class="text-gray-400 mt-2">Wed Jul 10 @ 1:13pm </p>
              </div>
          </div>
      </div>
  `;

  catData.forEach((cat) => {
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
              <p class="text-gray-600 mt-2">
                Weight: ${cat.weight.slice(-1)}${cat.unit}
                ${
                  cat.gain >= 0
                    ? `<span class="text-green-700">(^${cat.gain})</span>`
                    : `<span class="text-red-700">(-${cat.gain})</span>`
                }
              </p>

              <p class="text-gray-600 mt-2">${cat.desc}</p>
          </div>
      </div>
  `;

    container.innerHTML += catCardsHTML;
  });
}

function createPodiumCard(catData) {
  podiumData = catData
    .filter((cat) => cat.isKitten)
    .sort((a, b) => {
      let lastWeightA = a.weight[a.weight.length - 1];
      let lastWeightB = b.weight[b.weight.length - 1];

      return lastWeightB - lastWeightA;
    });

  const podiumCard = document.getElementById("podium-card");

  let podiumHTML = `
    <h2
        class="text-xl font-semibold text-gray-800 mb-5"
    >
        🏆 Daily Weight Champion
    </h2>
      <div class="grid grid-cols-3 gap-4 items-end mx-2">
        <!-- Second Place -->
        <div class="flex flex-col items-center">
            <span class="text-${podiumData[1].twColor}">${podiumData[1].weight.slice(-1)}${podiumData[1].unit}</span>
            <div
                class="bg-${podiumData[1].twColor} h-48 w-full flex items-center justify-center rounded-lg shadow-lg"
            >
                <span class="text-7xl text-white">🥈</span>
            </div>
            <span class="mt-2 text-xs sm:text-sm md:text-lg font-semibold whitespace-nowrap"
                >${podiumData[1].emoji} ${podiumData[1].name}</span
            >
        </div>

        <!-- First Place -->
        <div class="flex flex-col items-center">
            <span class="text-${podiumData[0].twColor}">${podiumData[0].weight.slice(-1)}${podiumData[0].unit}</span>
            <div
                class="bg-${podiumData[0].twColor} h-64 w-full flex items-center justify-center rounded-lg shadow-lg"
            >
                <span class="text-8xl md:text-9xl text-white">🥇</span>
            </div>
            <span class="mt-2 text-xs sm:text-sm md:text-lg font-semibold whitespace-nowrap"
                >${podiumData[0].emoji} ${podiumData[0].name}</span
            >
        </div>

        <!-- Third Place -->
        <div class="flex flex-col items-center">
            <span class="text-${podiumData[2].twColor}">${podiumData[2].weight.slice(-1)}${podiumData[2].unit}</span>
            <div
                class="bg-${podiumData[2].twColor} h-32 w-full flex items-center justify-center rounded-lg shadow-lg"
            >
                <span class="text-5xl text-white">🥉</span>
            </div>
            <span class="mt-2 text-xs sm:text-sm md:text-lg font-semibold whitespace-nowrap"
                >${podiumData[2].emoji} ${podiumData[2].name}</span
            >
        </div>
    </div>
    `;

  podiumCard.innerHTML += podiumHTML;
}

loadJSONForKittenCards();
