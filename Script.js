'use strict'

const drop_btn = document.querySelector(".dropdown-button");
const tooltip = document.querySelector(".tooltip");
const menu_wrapper = document.querySelector(".dropdown-menu");
const menu_bar = document.querySelector(".dropdown-menu-bar");

drop_btn.onclick = (()=>{
    menu_wrapper.classList.toggle("show");
    tooltip.classList.toggle("show");
});

// 
let imageIndex = 0;
let isLoading = false;

async function loadImage(image) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = image.url;
    });
}

async function loadImages(){
    if(isLoading) return;
    isLoading = true;
    document.getElementById('loading').style.display = 'block';

    try{
        const response = await fetch('Pictures.json');
        const data = await response.json();
        let imageContainer = document.querySelector('.wrapper-container-page');

        // Use slice to get the remaining images and forEach to iterate over them
        let imagesToLoad = data.images.slice(imageIndex, imageIndex + 8);
        for (let image of imagesToLoad) {
            await loadImage(image);  // Wait for the image to load

            let div = document.createElement('div');
            div.className='reveal-pics';
            let img = document.createElement('img');
            img.className='image wp-post-image';
            img.alt='image json';
            img.style.display = 'none';
            img.onload = function (){
                img.style.display = 'block';
            };
            img.src = image.url;
            div.appendChild(img);

            let meta = document.createElement('div');
            meta.className='meta';

            let caption = document.createElement('p');
            caption.id='pic2-description';
            caption.textContent = image.name;
            meta.appendChild(caption);

            let downloadBtn =document.createElement('div');
            downloadBtn.className = 'download-btn';

            let btn = document.createElement('button');
            btn.className='download-btn';
            // btn.textContent = 'Download';
            btn.onclick = function (){
                window.open(image.url, '_parent');
            };
            // Create the span elements
            let span1 = document.createElement('span');
            span1.className = 'fa-solid fa-download fa-beat-fade fa-xs';

            let span2 = document.createElement('span');
            span2.className = 'btn';
            span2.textContent = '';

// Append the span elements to the button


            btn.appendChild(span1);
            btn.appendChild(span2);

            downloadBtn.appendChild(btn);
            div.appendChild(meta);
            meta.appendChild(caption);
            meta.appendChild(downloadBtn);

            imageContainer.appendChild(div);

            imageIndex++;
        }
        isLoading = false;
        document.getElementById('loading').style.display = 'none';
    }
    catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('viewMore').addEventListener('click', loadImages);