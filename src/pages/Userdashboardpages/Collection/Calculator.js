function GetHoldTimeInDays(dateObject) {
    let today = new Date();
    let difference = Math.abs(today - dateObject);
    return difference / (1000 * 3600 * 24);//Should give me how many days!
}

function CalculateCashoutAmount(initialPrice, unixDate) {
    const milliseconds = unixDate * 1000;
    let dateGotten = new Date(milliseconds)
    let amountPerDay = (initialPrice / 365).toExponential();
    let daysHeld = GetHoldTimeInDays(dateGotten);
    if (daysHeld > 183) {
        return amountPerDay * daysHeld
    } else {
        return initialPrice - (0.3 * initialPrice);
    }
}

export { CalculateCashoutAmount }