function fetchDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      let img = document.createElement("img");
      img.src = data.message;
      img.alt = "Random Dog";
      img.className = "dog-image";

      let container = document.getElementById("dog-container");
      container.innerHTML = ""; // Clear previous image
      container.appendChild(img);
    })
    .catch((error) => console.error("Error fetching dog image:", error));
}
