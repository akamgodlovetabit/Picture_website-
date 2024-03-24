document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to category links
    var categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            var category = link.getAttribute('data-category');

            // Fetch the JSON data for the selected category
            fetchCategoryData(category);
        });
    });
});

// Function to fetch JSON data for the selected category
function fetchCategoryData(category) {
    var categoryUrl = 'path/to/' + category + '.json'; // Path to your JSON file
    fetch(categoryUrl)
        .then(response => response.json())
        .then(categoryData => {
            // Once data is fetched, you can display it on the browser
            displayCategory(categoryData);
        })
        .catch(error => {
            console.error('Error fetching category data:', error);
        });
}

// Function to display the category data on the browser
function displayCategory(categoryData) {
    // Clear existing content
    var imageGallery = document.getElementById('image-gallery');
    imageGallery.innerHTML = '';

    // Loop through images in the category
    categoryData.contents.images.forEach(function(image) {
        var imgElement = document.createElement('img');
        imgElement.setAttribute('src', image.url);
        imgElement.setAttribute('width', '351');
        imgElement.setAttribute('height', '185');
        imgElement.setAttribute('alt', '');
        imgElement.setAttribute('title', image.name);
        imgElement.setAttribute('itemprop', 'image');

        var metaElement = document.createElement('div');
        metaElement.setAttribute('class', 'meta');
        metaElement.setAttribute('role', 'presentation');
        metaElement.setAttribute('data-meta-type', 'image-info');

        var descElement = document.createElement('p');
        descElement.innerText = image.description;

        var downloadBtn = document.createElement('div');
        downloadBtn.setAttribute('class', 'download-btn');
        downloadBtn.setAttribute('role', 'button');
        downloadBtn.setAttribute('aria-label', 'Download Image');
        downloadBtn.setAttribute('data-button-type', 'download');

        var downloadButton = document.createElement('button');
        downloadButton.setAttribute('aria-hidden', 'true');
        downloadButton.setAttribute('tabindex', '0');

        var span1 = document.createElement('span');
        span1.setAttribute('class', 'fa-solid fa-download fa-beat-fade fa-xs');

        var span2 = document.createElement('span');
        span2.setAttribute('class', 'btn');

        downloadButton.appendChild(span1);
        downloadButton.appendChild(span2);

        downloadBtn.appendChild(downloadButton);

        metaElement.appendChild(descElement);
        metaElement.appendChild(downloadBtn);

        var revealPics = document.createElement('div');
        revealPics.setAttribute('class', 'reveal-pics');
        revealPics.setAttribute('role', 'presentation');
        revealPics.setAttribute('data-reveal-type', 'image');

        revealPics.appendChild(imgElement);
        revealPics.appendChild(metaElement);

        // Append to the image gallery
        imageGallery.appendChild(revealPics);
    });
}
