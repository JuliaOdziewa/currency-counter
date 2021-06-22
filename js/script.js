{

    const calculateResult = (amount, currency) => {

        const rateEUR = 4.57;
        const rateUSD = 3.78;
        const rateUAH = 0.14;
        const rateHUF = 0.013;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "UAH":
                return amount / rateUAH;

            case "HUF":
                return amount / rateHUF;

        }
    };

    const updateResultText = (result, currency) => {

        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = `Po przeliczeniu otrzymasz: ${result.toFixed(2)} ${currency}`;

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}