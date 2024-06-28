const kittenBirthday = new Date(2024, 5, 8); // June 8, 2024

function updateAge() {
  console.log("Calling kitten age");

  const now = new Date();
  const ageInSeconds = Math.floor((now - kittenBirthday) / 1000);

  const seconds = ageInSeconds % 60;
  const minutes = Math.floor((ageInSeconds / 60) % 60);
  const hours = Math.floor((ageInSeconds / (60 * 60)) % 24);
  const days = Math.floor((ageInSeconds / (60 * 60 * 24)) % 30.44);
  const months = Math.floor((ageInSeconds / (60 * 60 * 24 * 30.44)) % 12);
  const years = Math.floor(ageInSeconds / (60 * 60 * 24 * 365.25));

  // document.getElementById("kittenAge").textContent =
  console.log(`Y: ${years}, M: ${months}, D: ${days}, ` +
    `H: ${hours}, M: ${minutes}, S: ${seconds}`);
}

updateAge();
setInterval(updateAge, 1000);
