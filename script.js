async function loadJSONForKittenCards() {
  const url =
    "https://raw.githubusercontent.com/colbysprague/CatDashboard/main/kittenData.json";

  try {
    const response = await fetch(url);
    const data = await response.json();
    // createKittenCards(data);
    createPodiumCard(data);
    createKittenScrollCards(data);
    createSuperlativeContainer(data);
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

function createKittenScrollCards(catData) {
  const catScrollContainer = document.getElementById("cat-scroll-container");

  catData.forEach((cat) => {
    let catCardHTML = `
      <!-- Card Start -->
      <div
          class="flex-none overflow-hidden rounded-lg shadow-lg bg-white w-96 xs:w-96 sm:w-96 md:w-96 lg:w-96 xl:w-96"
      >
          <div class="overflow-hidden h-80">
              <img
                  src="${cat.imgPath}"
                  alt="profile-picture"
                  class="w-full h-full object-cover"
              />
          </div>
          <div class="p-6 text-center border-solid border-t-4 ${
            cat.isKitten ? `border-${cat.twColor}` : "border-sky-500"
          }">
              <h4 class="text-2xl font-semibold text-blue-gray-900">
                  ${cat.emoji} ${cat.name}
              </h4>
              <div class="flex flex-col align-center">
                  <span class="text-lg text-gray-600">

                  ${cat.weight.slice(-1)}${cat.unit}

                  ${
                    cat.gain >= 0
                      ? `<span class="text-green-700 text-sm">(+${cat.gain})</span>`
                      : `<span class="text-red-700 text-sm">(-${cat.gain})</span>`
                  }
                  </span>
                  <span class="text-xs text-gray-400">Weight</span>
              </div>
          </div>
      </div>
      <!-- Card End -->
      `;

    catScrollContainer.innerHTML += catCardHTML;
  });
}

function createSuperlativeContainer(catData) {
  let superaltiveData = `

        <h3 class="text-xl font-semibold text-gray-800">🏆 Daily Superlatives</h3>

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
          <p class="text-gray-400 mt-2">Wed Jul 10 @ 1:13pm </p>
        </div>

  `;

  const superlativeContainer = document.getElementById("superlative-container");
  superlativeContainer.innerHTML += superaltiveData;
}

loadJSONForKittenCards();
