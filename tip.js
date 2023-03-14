const form = document.querySelector("form")

const send = function(amount) {
    window.ethereum.request({ method: "eth_requestAccounts" })
}

if(window.ethereum) {
    form.classList.add("has-eth")
}


form.addEventListener("submit", function(event) {
    event.preventDefault()

    if(window.ethereum) {
        const input = form.querySelector("input")
        send(input.value)
    } else {
        alert("Please install a wallet: https://metamask.io/download/")
    }

})