


//Getting divs that will be hidden and shown
const aboutMePageBody = document.getElementById("aboutMePageBody")

const nasaPageBody = document.getElementById("nasaPageBody")

const monopolyPageBody = document.getElementById("monopolyPageBody")

const ticTacToePageBody = document.getElementById("ticTacToePageBody")

const scratchPageBody = document.getElementById("scratchPageBody")

const contactPageBody = document.getElementById("contactBodyPage")

//Getting divs that will be used to click on
const danielJohnson = document.getElementById("name")

const nasa = document.getElementById("nasaCitySmart")

const monopoly = document.getElementById("monopoly")

const ticTacToe = document.getElementById("ticTacToe")

const scratch = document.getElementById("scratch")

const topHome = document.getElementById("topHome")
const sideHome = document.getElementById("sideHome")

const topContact = document.getElementById("topContact")
const sideContact = document.getElementById("sideContact")

//Changes to the home page/about me page
danielJohnson.onclick = function () {
    nasaPageBody.style.display = "none"
    monopolyPageBody.style.display = "none"
    ticTacToePageBody.style.display = "none"
    scratchPageBody.style.display = "none"
    aboutMePageBody.style.display = "block"
    contactPageBody.style.display = "none"
}

sideHome.onclick = function () {
    nasaPageBody.style.display = "none"
    monopolyPageBody.style.display = "none"
    ticTacToePageBody.style.display = "none"
    scratchPageBody.style.display = "none"
    aboutMePageBody.style.display = "block"
    contactPageBody.style.display = "none"
}

topHome.onclick = function () {
    nasaPageBody.style.display = "none"
    monopolyPageBody.style.display = "none"
    ticTacToePageBody.style.display = "none"
    scratchPageBody.style.display = "none"
    aboutMePageBody.style.display = "block"
    contactPageBody.style.display = "none"
}

topHome.onclick = function () {
    nasaPageBody.style.display = "none"
    monopolyPageBody.style.display = "none"
    ticTacToePageBody.style.display = "none"
    scratchPageBody.style.display = "none"
    aboutMePageBody.style.display = "block"
    contactPageBody.style.display = "none"
}
//Changes to the home page/about me page



//Changes to the contact page
sideContact.onclick = function () {
    nasaPageBody.style.display = "none"
    monopolyPageBody.style.display = "none"
    ticTacToePageBody.style.display = "none"
    scratchPageBody.style.display = "none"
    aboutMePageBody.style.display = "none"
    contactPageBody.style.display = "block"
}

topContact.onclick = function () {
    nasaPageBody.style.display = "none"
    monopolyPageBody.style.display = "none"
    ticTacToePageBody.style.display = "none"
    scratchPageBody.style.display = "none"
    aboutMePageBody.style.display = "none"
    contactPageBody.style.display = "block"
}
//Changes to the contact page


//
nasa.onclick = function () {
    nasaPageBody.style.display = "block"
    monopolyPageBody.style.display = "none"
    ticTacToePageBody.style.display = "none"
    scratchPageBody.style.display = "none"
    aboutMePageBody.style.display = "none"
    contactPageBody.style.display = "none"
}
//
//
monopoly.onclick = function () {
    nasaPageBody.style.display = "none"
    monopolyPageBody.style.display = "block"
    ticTacToePageBody.style.display = "none"
    scratchPageBody.style.display = "none"
    aboutMePageBody.style.display = "none"
    contactPageBody.style.display = "none"
}
//
//
ticTacToe.onclick = function () {
    nasaPageBody.style.display = "none"
    monopolyPageBody.style.display = "none"
    ticTacToePageBody.style.display = "block"
    scratchPageBody.style.display = "none"
    aboutMePageBody.style.display = "none"
    contactPageBody.style.display = "none"
}
//
//
scratch.onclick = function () {
    nasaPageBody.style.display = "none"
    monopolyPageBody.style.display = "none"
    ticTacToePageBody.style.display = "none"
    scratchPageBody.style.display = "block"
    aboutMePageBody.style.display = "none"
    contactPageBody.style.display = "none"
}
//
