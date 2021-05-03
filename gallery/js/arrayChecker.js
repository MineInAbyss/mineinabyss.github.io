var imageDiv3 = images.length / 3
var imageDiv2 = images.length / 2

var dummyImage = "https://cdn.discordapp.com/attachments/811647502380957766/814497810326093835/null.png"

if(!Number.isInteger(imageDiv3)) {
    if(Number.isInteger(imageDiv2)) {
        //add 2 dummy images to array.
        images.push(dummyImage)
        images.push(dummyImage)
    } else {
        //add 1 dummy image to array
        images.push(dummyImage)
    }
}