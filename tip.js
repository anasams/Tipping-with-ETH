const form = document.querySelector("form")

const send = async function(amount) {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })

    if(accounts.length > 0) {
        window.ethereum.request({ 
            method: "eth_sendTransaction",
            params: [{
                from: accounts[0],
                to: "0x84120D763683af356d404DAB50BcBf3F42a2AdE4", 
                value: "10"
            }] 
        })
    }

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