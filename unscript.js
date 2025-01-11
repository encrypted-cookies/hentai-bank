document.getElementById('toggle-balance').addEventListener('click', function() {
    var balance = document.querySelector('.balance');
    var amount = document.querySelector('.amount');
    
    balance.classList.toggle('show');
    amount.classList.toggle('blur');
  });
