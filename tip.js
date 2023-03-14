const form = document.querySelector("form")

const send = function(color) {
    form.style.backgroundColor = color
}

if(window.ethereum) {
    form.classList.add("has-eth")
}


form.addEventListener("submit", function(event) {
    event.preventDefault()

    if(window.ethereum) {
        send("orange")
    } else {
        alert("Please install a wallet: https://metamask.io/download/")
    }

})