const form = document.querySelector("form")

if(window.ethereum) {
    form.classList.add("has-eth")
}


form.addEventListener("submit", function(event) {
    event.preventDefault()

    if(window.ethereum) {
        form.style.backgroundColor = "red"
    } else {
        alert("Please install a wallet: https://metamask.io/download/")
    }

})