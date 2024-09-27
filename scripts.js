const images = [
    'image1.jpeg', 
    'image2.jpeg', 
    'image3.jpeg', 
    'image4.jpeg', 
    'image5.jpeg',
    'image6.jpeg',
]; // Replace these with your image paths

let currentImageIndex = 0;

const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Function to update the image and the download link
function updateImage() {
    galleryImage.src = images[currentImageIndex];
    downloadBtn.href = images[currentImageIndex]; // Update the download link to the current image
}

// Event listener for 'Next' button
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Loops to the first image after the last one
    updateImage();
});

// Event listener for 'Previous' button
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Loops to the last image if on the first one
    updateImage();
});
