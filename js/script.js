let mainHeader = document.querySelector("h1"),
    mainHeaderInner = mainHeader.innerText,
    newHeader = ""

for (let i = 0; i < mainHeaderInner.length; i++) {
    newHeader += `<span>${mainHeaderInner[i]}</span>`
}

mainHeader.innerHTML = newHeader

let smallGallery = document.querySelector(".gallery_small_container")

smallGallery.addEventListener('mouseover', () => {
    smallGallery.style.setProperty("--scrollbar-thumb-color", "#203C30")
})

smallGallery.addEventListener('mouseout', () => {
    smallGallery.style.setProperty("--scrollbar-thumb-color", "#fff")
})

let bigFigure = document.querySelector(".gallery_big_figure"),
    bigImage = document.querySelector(".gallery_big_image"),
    bigFigcaption = document.querySelector(".gallery_big_figure figcaption"),
    smallImages = document.querySelectorAll(".gallery_small_image"),
    popup = document.querySelector(".popup_body"),
    popupCloseIcon = document.querySelector(".popup_close"),
    popupCover = document.createElement("div"),
    body = document.querySelector("body"),
    popupChild,
    popupChildClone


smallImages.forEach((smallImage) => {
    smallImage.addEventListener('click', letBig)
})

function letBig(event) {
    bigImage.src = event.target.src
    bigFigcaption.innerHTML = event.target.nextElementSibling.innerHTML

}


bigFigure.addEventListener('click', (event) => {
    popupOpen()
    console.log(event.target)
    popupChild = event.target
    popupChildClone = popupChild.cloneNode(true)
    popupChildClone.style.objectFit = "contain"
    popupChildClone.style.height = "100vh"
    popupChildClone.style.width = "auto"
    popupChildClone.style.position = "relative"
    popup.appendChild(popupChildClone)
})

popupCloseIcon.addEventListener('click', () => {
    event.preventDefault()
    popupClose()
})

popupCover.addEventListener('click', () => {
    if (event.target !== document.querySelector(".popup_content")) {
        popupClose()
    }
})

function popupOpen() {
    popupCover.style.position = "fixed"
    popupCover.style.width = "100vw"
    popupCover.style.height = "100vh"
    popupCover.style.backgroundColor = "rgba(32, 60, 48, .9)"
    popupCover.style.top = "0"
    popupCover.style.left = "0"
    popupCover.style.overflow = "hidden"
    popup.classList.add("popup_open")
    body.appendChild(popupCover)

}

function popupClose() {
    popup.classList.remove("popup_open")
    body.removeChild(popupCover)
    popup.removeChild(popupChildClone)

}

document.addEventListener('keydown', (event) => {
    if (event.which === 27) {
        let popupActive = document.querySelector(".popup_open")
        popupClose(popupActive)
    }
})

// *** SCROLL TO TOP FOR NORMAL BROWSERS *** //
let smallPictureContainer = document.querySelector(".gallery_small_container"),
    arrowTop = document.querySelector("#scrollTop")
arrowTop.onclick = function () {
    if (navigator.userAgent.indexOf("Trident") > -1) {
        ieTop()
    } else {
        smallPictureContainer.scrollTo(0, 0)
    }
}

// *** SCROLL TO TOP FOR LOVELY IE *** //
function ieTop() {
    let top = smallPictureContainer.pageYOffset
    smallPictureContainer.scrollTo(0, top - 50)
    setTimeout(function () {
        if (top <= 0) {
            smallPictureContainer.scrollTo(0, 0)
        } else {
            ieTop()
        }
    }, 10)
}

