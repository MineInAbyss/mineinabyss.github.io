function insertImages() {
    images.forEach(function(image) {
        const img = document.createElement('img');
        img.src = image
        img.onclick = function () {
            openModal(this.src)
        }
        document.getElementById("img-container").appendChild(img);
    });
}