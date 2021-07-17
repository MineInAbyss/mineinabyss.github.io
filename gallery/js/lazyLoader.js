document.addEventListener("DOMContentLoaded",function() {
    var toLoad

    if("IntersectionObserver" in window) {
        toLoad = document.querySelectorAll(".lazy")
        var imageObserver = new IntersectionObserver(function (entries,observer){
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var image = entry.target
                    image.src = image.id
                    image.classList.remove("lazy")
                    imageObserver.unobserve(image)
                }
            })
        })

        toLoad.forEach(function (image) {
            imageObserver.observe(image)
        })
    } else {
        var timeout
        toLoad = document.querySelectorAll(".lazy")

        function lazyLoad() {
            if(timeout) {
                clearTimeout(timeout)
            }

            timeout = setTimeout(function () {
                var scrollTop = window.pageYOffset
                toLoad.forEach(function (img){
                    if(img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.id
                        img.classList.remove('lazy')
                    }
                })

                if(toLoad.length == 0) {
                    document.removeEventListener("scroll", lazyLoad)
                    window.removeEventListener("resize", lazyLoad)
                    window.removeEventListener("orientationchange", lazyLoad)

                }
            }, 20)
        }
        document.addEventListener("scroll",lazyLoad)
        window.addEventListener("resize",lazyLoad)
        window.addEventListener("orientationchange", lazyLoad)
    }
})
