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

// add blance 

let amountReceived = document.getElementById('amount-received');
let amountInput = document.getElementById('amount-input')
let amountSubmitBtn = document.getElementById('amounts-submit-btn')
let totalBlance = document.getElementById('total-blance');
let donationTitle = document.getElementById('donation-title')


amountSubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let amount = parseFloat(amountInput.value);
    let currentAmount = parseFloat(amountReceived.innerText)
    amountReceived.innerText = amount + currentAmount;

    let currentBlance = parseFloat(totalBlance.innerText);
    totalBlance.innerText = currentBlance - amount;
    let donationTitleText = donationTitle.innerText;
    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.innerHTML = `
            
                <p>${amount} Taka is Donated for ${donationTitleText}</p>
                <p>${new Date()}</p>
            `

    historyPage.appendChild(div);
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
    amountReceivedTwo.innerText = amount + currentAmount;

    let currentBlance = parseFloat(totalBlance.innerText);
    totalBlance.innerText = currentBlance - amount;
    let donationTitleText = donationTitleTwo.innerText;
    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.innerHTML = `
            
                <p>${amount} Taka is Donated for ${donationTitleText}</p>
                <p>${new Date()}</p>
            `

    historyPage.appendChild(div);
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
    amountReceivedThree.innerText = amount + currentAmount;

    let currentBlance = parseFloat(totalBlance.innerText);
    totalBlance.innerText = currentBlance - amount;
    let donationTitleText = donationTitleThree.innerText;
    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.innerHTML = `
            
                <p>${amount} Taka is Donated for ${donationTitleText}</p>
                <p>${new Date()}</p>
            `

    historyPage.appendChild(div);

    openPopUPMOdal();

})

let popupModal = document.getElementById('popup-modal')

function openPopUPMOdal() {
    popupModal.onclick(popupModal.showModal())
}