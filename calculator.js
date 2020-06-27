window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 100000, years: 15, rate: 0.03}
  const amountDefault = document.getElementById('loan-amount')
  const yearDefault = document.getElementById('loan-years')
  const rateDefault = document.getElementById('loan-rate')
  amountDefault.value = values.amount;
  yearDefault.value = values.years;
  rateDefault.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currVals = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currVals));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const amount = values.amount;
  const years = Math.floor(values.years);
  const rate = values.rate;
  const numPayments = years * 12;
  const periodicRate = rate / 12;
  
  if (rate === 0) {
    return ((amount)/(numPayments)).toFixed(2)
  }
   else {
    return ((amount * periodicRate)/(1 - Math.pow(( 1 + periodicRate ),(-numPayments)))).toFixed(2)
  }
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPay = document.querySelector('#monthly-payment')
  monthlyPay.innerText = `$${monthly}`;
}
