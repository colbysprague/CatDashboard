const kittenBirthday = new Date(2024, 5, 8); // June 8 2024

function updateAge() {
  const now = new Date();
  const ageInSeconds = (now - kittenBirthday) / 1000

  const ageInDays = Math.floor((ageInSeconds % (60 * 60 * 24 * 30.44)) / (60 * 60 * 24));

  return ageInDays

  document.getElementbyId("kittenAge").textContent = `${ageInDays}`;
}

updateKittenAge();
setInterval(updateAge, 10000)
