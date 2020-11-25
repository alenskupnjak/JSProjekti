document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block'

  setTimeout(calculateResult,2000);

  e.preventDefault()
}
)

// Calculate results
function calculateResult () {
  console.log('Calculating');
  // UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const montlyPayment = document.getElementById('montly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totaltInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12 ;

  //Compute montla payments
  const  x = Math.pow(1+ calculateInterest, calculatePayments);
  const  montly = (principal * x * calculateInterest)/( x - 1 );
  if(isFinite(montly)){
    montlyPayment.value = montly.toFixed(2);
    totalPayment.value = (montly * calculatePayments).toFixed(2);
    totaltInterest.value = ((montly* calculatePayments) - principal).toFixed(2);

    // Show the results
    document.getElementById('results').style.display = 'block';

    // Hide loader
    document.getElementById('loading').style.display = 'none'

  } else {
    showError('Plese check your numbers');
  }

}

function showError(error){
  // Create a div
  const errorDiv = document.createElement('div')

  // get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  // Add class
  errorDiv.className ='alert alert-danger'

  // Create text node an append to div
  errorDiv.appendChild(document.createTextNode(error))

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 second
  setTimeout(clearError,2000);

  function clearError () {
    document.querySelector('.alert').remove();

    // Hide loader
    document.getElementById('loading').style.display = 'none'

    // Hide results
    document.getElementById('results').style.display = 'none';
  }
}