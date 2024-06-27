document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.banner .slider .item');
    const banner = document.querySelector('.banner');
    const wallpaperTitle = document.getElementById('wallpaper-title');
    const wallpaperDescription = document.getElementById('wallpaper-description');
    const message = document.querySelector('.message');
    const downloadBtn = document.querySelector('.download-btn');

    let currentImgSrc = '';

    items.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            banner.style.backgroundImage = `url(${imgSrc})`;
            currentImgSrc = imgSrc;

            const title = item.getAttribute('data-title');
            const description = item.getAttribute('data-description');
            wallpaperTitle.textContent = title;
            wallpaperDescription.textContent = description;

            document.querySelector('.content').classList.add('show');

            message.style.display = 'none';
        });
    });

    downloadBtn.addEventListener('click', () => {
        if (currentImgSrc) {
            const link = document.createElement('a');
            link.href = currentImgSrc;
            link.download = 'wallpaper.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });
});
