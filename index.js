var midSection = document.getElementById("mid-div")

console.log(midSection)

function addText(){
    const newVal = document.createElement('p')
    const node = document.createTextNode('Open the downloaded file and put in your information to receive the payout')
    newVal.appendChild(node)
    midSection.appendChild(newVal)
}

