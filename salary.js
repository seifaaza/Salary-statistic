
// calculate the hourly rate
function hourlyRate() {
    salary = parseFloat(document.querySelector('#salary').value)
    WH = parseFloat(document.querySelector('#workingHours').value)
    result = (salary / WH).toFixed(2)
    document.querySelector('#hourlyRate').innerHTML = result +" Dh per hour"
}

// working hours select
function WHsel() {
    var WHsel =""
    if (WHmonthly.selected)WHsel += WH
    if (WHdaily.selected)WHsel += WH *22 
    HR = (salary / WHsel).toFixed(2)
    document.querySelector('#hourlyRate').innerHTML =  HR +" Dh per hour"
}

// calculate the rest
function rest() {
    spending = parseFloat(document.querySelector('#spending').value)
    rest1 = (salary - (spending * 30)).toFixed(2)
    document.querySelector('#rest').innerHTML = rest1 +" Dh per month"
}

// working spending select
function spendingsel() {
    var spendingsel = ""
    if (Smonthly.selected) spendingsel += spending 
    if (Sdaily.selected) spendingsel += spending *30
    rest2 = (salary - spendingsel).toFixed(2)
    document.querySelector('#rest').innerHTML = rest2 +" Dh per month"
}

// rest select
function restSel() {
    var restSel = "" 
    var duration = ""
    if (Rmonthly.selected){
        restSel = 1
        duration="per month"
    } 
    if (Ryearly.selected) {
        restSel = 12
        duration="per year"
    } 
    rest2 = (rest1 * restSel).toFixed(2)
    document.querySelector('#rest').innerHTML = rest2 +" "+ duration
}

// reset all values
function reset() {
    document.querySelector('#salary').value = ""
    document.querySelector('#workingHours').value = ""
    document.querySelector('#spending').value = ""
    document.querySelector('#hourlyRate').value = ""
    document.querySelector('#rest').value = ""
}