document.addEventListener("DOMContentLoaded", function() {
    // Function to get query parameter value by name
    function getQueryParam(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Get the 'amount' query parameter value
    var full = getQueryParam('full');
    var downpayment = getQueryParam('downpayment');
    // Update the content of the div with id 'amount' and the Venmo link
    if(full !== null && downpayment !== null) {
        var fullPay = document.getElementById('full');
        var downPay = document.getElementById('downpayment');
        fullPay.href = full
        downPay.href = downpayment

    } else {
        window.location.href = 'https://flickerandframe.com'
    }
});
