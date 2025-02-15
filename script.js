function searchPlant() {
    // Get the search input value
    const searchTerm = document.getElementById("plantSearch").value.trim().toLowerCase();

    // List of plant names with corresponding IDs
    const plantNames = {
        'cactus': 'cactus.html',
        'bidens': 'bidens.html',
        'cardamom': 'plant-cardamom',
        'jackfruit': 'plant-jackfruit',
        'parachute plant': 'plant-parachute',
        'peach': 'plant-peach',
        'pineapple': 'plant-pineapple',
        'radish': 'plant-radish',
    };

    // Check if the search term matches a plant name
    if (plantNames[searchTerm]) {
        // Redirect to the corresponding plant's page
        window.location.href = plantNames[searchTerm];
    } else {
        alert("Plant not found. Please try again.");
    }
}

// Image Slider Functionality
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Show the first slide initially
showSlide(currentIndex);