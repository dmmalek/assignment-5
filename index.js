// Change Button Color 

let btnDonation = document.getElementById('btn-donation')
let btnHistory = document.getElementById('btn-history')

// Change Page 
let donationPage = document.getElementById("donation-page")
let historyPage = document.getElementById("history-page")




btnDonation.addEventListener('click', toggleBtnClass)
btnHistory.addEventListener('click', toggleBtnClass)
window.addEventListener("load", function () {
    btnDonation.classList.add("active")
    historyPage.classList.add('hidden')
})

function toggleBtnClass(e) {
    let btnText = e.target.innerText;
    if (btnText === 'Donation') {
        btnDonation.classList.add("active")
        btnHistory.classList.remove('active')
        historyPage.classList.add('hidden')
        donationPage.classList.remove('hidden')



    }
    else {
        btnHistory.classList.add("active")
        btnDonation.classList.remove('active')
        historyPage.classList.remove('hidden')
        donationPage.classList.add('hidden')


    }
}

// add balance 

let amountReceived = document.getElementById('amount-received');
let amountInput = document.getElementById('amount-input')
let amountSubmitBtn = document.getElementById('amounts-submit-btn')
let totalBalance = document.getElementById('total-balance');
let donationTitle = document.getElementById('donation-title')


amountSubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let amount = parseFloat(amountInput.value);
    let currentAmount = parseFloat(amountReceived.innerText)
    let currentBalance = parseFloat(totalBalance.innerText);
    let inputValidation = isInputValid(amountInput.value, currentBalance)
    if (!inputValidation) {
        return;
    }

    amountReceived.innerText = amount + currentAmount;

    totalBalance.innerText = currentBalance - amount;
    let donationTitleText = donationTitle.innerText;
    amountInput.value = "";
    donationCard(amount, donationTitleText);
    openPopUPMOdal();



})

let amountReceivedTwo = document.getElementById('amount-received-2');
let amountInputTwo = document.getElementById('amount-input-2')
let amountSubmitBtnTwo = document.getElementById('amounts-submit-btn-2')
let donationTitleTwo = document.getElementById('donation-title-2')

amountSubmitBtnTwo.addEventListener('click', function (e) {
    e.preventDefault();
    let amount = parseFloat(amountInputTwo.value);
    let currentAmount = parseFloat(amountReceivedTwo.innerText)
    let currentBalance = parseFloat(totalBalance.innerText);
    let inputValidation = isInputValid(amountInputTwo.value, currentBalance)
    if (!inputValidation) {
        return;
    }
    amountReceivedTwo.innerText = amount + currentAmount;
    totalBalance.innerText = currentBalance - amount;
    let donationTitleText = donationTitleTwo.innerText;
    amountInputTwo.value = "";
    donationCard(amount, donationTitleText);
    openPopUPMOdal();



})

let amountReceivedThree = document.getElementById('amount-received-3');
let amountInputThree = document.getElementById('amount-input-3')
let amountSubmitBtnThree = document.getElementById('amounts-submit-btn-3')
let donationTitleThree = document.getElementById('donation-title-3')

amountSubmitBtnThree.addEventListener('click', function (e) {
    e.preventDefault();
    let amount = parseFloat(amountInputThree.value);
    let currentAmount = parseFloat(amountReceivedThree.innerText)
    let currentBalance = parseFloat(totalBalance.innerText);

    let inputValidation = isInputValid(amountInputThree.value, currentBalance)
    if (!inputValidation) {
        return;
    }
    amountReceivedThree.innerText = amount + currentAmount;

    totalBalance.innerText = currentBalance - amount;
    let donationTitleText = donationTitleThree.innerText;
    amountInputThree.value = "";
    donationCard(amount, donationTitleText);
    openPopUPMOdal();

})

let popupModal = document.getElementById('popup-modal')

function openPopUPMOdal() {
    popupModal.onclick(popupModal.showModal())
}

// create useable donation function 

function donationCard(amount, donationTitleText) {
    const div = document.createElement('div');
    div.classList.add('border', 'border-gray-200', 'rounded-xl', 'mx-auto', 'w-8/12', 'my-8', 'p-8', 'space-y-4');
    div.innerHTML = `
            
                <p class = 'font-bold'>${amount} Taka is Donated for ${donationTitleText}</p>
                <p>${new Date()}</p>
            `

    historyPage.appendChild(div);
}


function isInputValid(amount, currentBalance) {
    if (!amount) {
        alert("donation amount is empty")
        return false;
    } else if (isNaN(amount)) {
        alert("input is not valid")
        return false;
    } else if (parseFloat(amount) > currentBalance) {
        alert("amount is greater than the balance")
        return false;
    }

    return true;
}