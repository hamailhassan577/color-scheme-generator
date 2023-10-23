const colorPickerEl = document.getElementById("color-picker")
const schemeModSelectEl = document.getElementById("scheme-mode")
const submitBtn = document.getElementById("submit-btn")


let valuesObj = {

}


submitBtn.addEventListener("click", getValues)

function getValues() {
    valuesObj = { 
        hex: colorPickerEl.value,
        mode: schemeModSelectEl.value 
     }

     apiData(valuesObj)
}


function apiData(param) {
    const url = `https://www.thecolorapi.com/scheme?hex=${param.hex.slice(1)}&mode=${param.mode}&count=5`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        let colorScheme = []
        data.colors.forEach(function(color){
            colorScheme.push(color.hex.value)
            renderColors(colorScheme)
        })
    })

    

}

function renderColors(colorsArr) {

    const colorsDivEl = document.getElementById("colors-div")
    colorsDivEl.innerHTML = ''

    colorsArr.forEach(color => {

        const colorDiv = document.createElement('div');
        colorDiv.className = 'color';

        const colorText = document.createElement('p');
        colorText.textContent = color;

        colorDiv.style.backgroundColor = color;
        colorDiv.appendChild(colorText);
        colorsDivEl.appendChild(colorDiv);
    })  

}



