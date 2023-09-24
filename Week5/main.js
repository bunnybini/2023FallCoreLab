// Add this JavaScript code to your HTML or a separate JavaScript file

// Function to randomize the positions of images in the bottom half of the screen
function randomizePositions() {
  const images = document.querySelectorAll(".image-container img");
  images.forEach((image) => {
    const randomX = Math.random() * (window.innerWidth - image.width);
    const randomY = Math.random() * (window.innerHeight / 2 - image.height); // Restrict to the bottom half
    image.style.left = `${randomX}px`;
    image.style.top = `${window.innerHeight / 2 + randomY}px`; // Adjust the Y position
  });
}

// Function to apply the animations to images
function applyAnimations() {
  const images = document.querySelectorAll(".image-container img");
  images.forEach((image, index) => {
    image.style.animationName = "appearAnimation";
    image.style.animationDelay = `${index * 0.05}s`; // Faster animation delay
  });
}

// Call the randomizePositions and applyAnimations functions when the page loads
window.addEventListener("load", () => {
  randomizePositions();
  applyAnimations();
});
