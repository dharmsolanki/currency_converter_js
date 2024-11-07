let form = document.getElementById('currency-form');

form.addEventListener('submit',(e) => {
    e.preventDefault(); // prevent form data submission to server

    let amount = document.getElementById('amount');
    let baseCurrency = document.getElementById('base-currency');
    let targetCurrency = document.getElementById('target-currency');

    // Check if inputs are valid
    if (!amount || !baseCurrency || !targetCurrency) {
        resultDisplay.textContent = "Please enter a valid amount and select currencies.";
        return;
    }

    let inputAmount = document.getElementById('selected-amount');
    let conversion = document.getElementById('conversion');

    inputAmount.appendChild(document.createTextNode(`Amount: ${amount.value}`));
    conversion.appendChild(document.createTextNode(`conversion: ${baseCurrency.value} to ${targetCurrency.value}`));

    //logic for conversion

    const exchangeRates = {
        USD: { USD: 1, EUR: 0.85, INR: 74 },
        EUR: { USD: 1.18, EUR: 1, INR: 87 },
        INR: { USD: 0.014, EUR: 0.011, INR: 1 }
    };
    
    let rate = exchangeRates[baseCurrency.value][targetCurrency.value];
    
    let result = (amount.value) * rate;
    console.log(result);
});


