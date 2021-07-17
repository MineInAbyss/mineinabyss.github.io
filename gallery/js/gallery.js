function insertImages() {
    images.forEach(function(image) {
        const img = document.createElement('img');
        img.src = "gallery/img/tiny.png"
        img.className = "lazy"
        img.id = image
        img.onclick = function () {
            openModal(this.src)
        }
        document.getElementById("img-container").appendChild(img);
    });
}