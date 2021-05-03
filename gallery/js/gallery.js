/*
this sorts images by threes into columns for the gallery.
To give a bit of an explanation on how it works...
    Put any 3 image links into the imageArray.js file
    This file will then assign those links to img...things with their source being
    the respective link in the js array.

    this will sort images like:
        array = [img_0, img_2, ... img_n]

        column_3 = {img_0, img_1, img_2}
        column_1 = {img_3, img_4, img_5}
        column_n = ... and so on.

     each image is prepped through lazy loading utilizing intersection observers
     which basically means:
        Image has the tag = "lazy"
        if image is detected in window bounds lazy tag is removed and
        the value stored in dataset.src is assigned to the img src.

     How fullscreen works:
        fullscreen is accomplished through utilizing modals
        an image is stored with a placeholder src and hidden.
        once the user clicks on an image it then sets the src to the imageClicked src
        and then displays the modal image.
 */

function insertImages() {
    var i;
    var src = document.getElementsByClassName("column")
    var division = Math.round(images.length / 3)
    for (i = 0; i < division; i++) {
        var img = document.createElement("img")
        img.dataset.src = images[i + division + division]
        img.className = "lazy"
        img.onclick = function() {
            openModal(this.src)
        }
        src[2].appendChild(img)
    }
    for (i = 0; i < division; i++) {
        var img = document.createElement("img")
        img.dataset.src = images[i + division]
        img.className = "lazy"
        img.onclick = function() {
            openModal(this.src)
        }
        src[1].appendChild(img)
    }
    for (i = 0; i < division; i++) {
        var img = document.createElement("img")
        img.dataset.src = images[i]
        img.className = "lazy"
        img.onclick = function() {
            openModal(this.src)
        }
        src[0].appendChild(img)
    }
}