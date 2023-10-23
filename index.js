function reverse() {
    var input = document.getElementById('input').value;
    var result = '';
    for (var i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }
    document.getElementById('reversed').innerText = result;
}

function ifPalindrome() {
    var input = document.getElementById('inputstr').value;
    var reversed = input.split('').reverse().join('');
    var resultmessage = document.getElementById('palindromeresult');

    if (input === reversed) {
        resultmessage.innerText = "true!";
    } else {
        resultmessage.innerText = "flase!";
    }
}

function subtotal() {
    var bill = parseFloat(document.getElementById('billtotal').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    var totalAmount = bill + (bill * tipPercentage / 100);
    document.getElementById('totalAmount').innerText = "Total Amount to be Paid: $" + totalAmount.toFixed(2);
}
