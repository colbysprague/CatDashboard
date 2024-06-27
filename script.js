catData = {
  "cats": [
    {
      "name": "Fats Domino",
      "imgPath": "assets/fatsdomino.jpeg",
      "weight": "235g",
      "desc": "I love to move around. I am a good walker"
    },
    {
      "name": "Darth Vader",
      "imgPath": "assets/darthvader.jpeg",
      "weight": "235g",
      "desc": "I am very vocal. I am also a good sitter"
    },
    {
      "name": "Fuzz Lightyear",
      "imgPath": "assets/fuzzlightyear.jpg",
      "weight": "235g",
      "desc": "I always have milk on my chin"
    },
    {
      "name": "Godzilla",
      "imgPath": "assets/godzilla.jpeg",
      "weight": "235g",
      "desc": "I am a nipple bully"
    },
    {
      "name": "Bonk",
      "imgPath": "assets/bunk.jpeg",
      "weight": "7.6lb",
      "desc": "I hate kittens"
    },
    {
      "name": "Trixie",
      "imgPath": "assets/mum.jpeg",
      "weight": "6.2lb",
      "desc": "I love my kittens"
    }
  ]
}

const container = document.querySelector('#cat-container')

catData.cats.forEach(cat => {
  let catCardsHTML = `
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
          <img src="${cat.imgPath}" alt="${cat.name}" class="w-full h-48 object-cover">
          <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-800">${cat.name}</h3>
              <p class="text-gray-600 mt-2">Weight: ${cat.weight}</p>
              <p class="text-gray-600 mt-2">${cat.desc}</p>
          </div>
      </div>
  `;

  container.innerHTML = catCardsHTML;
})


console.log(catData)
