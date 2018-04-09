let background = this.style.backgroundColor;
if (!background) {
    this.style.backgroundColor = "rgba(0,0,0,0.2)"
} else {
    let len = background.length;

    //split the color into an array of chars
    background = background.split("");

    //fetch the opacity property and join them
    let currentValue = background.slice(len - 4, len - 1);
    currentValue = currentValue.join("");

    //add 10% opacity to the value and round to 1 decimal
    let newValue = parseFloat(currentValue) + 0.1;
    newValue = newValue.toFixed(1);

    //set the new backgroundcolor
    background = background.join("").replace(currentValue, newValue);
    this.style.backgroundColor = background;
}
