
// Phase 1, get both currancies and give back the exchange rate.
var btnSubmit = document.getElementsByClassName('btnSubmit')[0];
btnSubmit.addEventListener('click', function(){  
    var fromCurrency = document.getElementsByClassName('fromCurrency')[0].value.toUpperCase();
    var toCurrency = document.getElementsByClassName('toCurrency')[0].value.toUpperCase();
    var inputFirst = document.getElementsByClassName('amountFrom')[0].value *1;
    var inputSecond = document.getElementsByClassName('amountTo')[0].value *1;
    
    //var output1 = inputFirst * 
 
    var requestURL = `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
   

    request.onload = function() {
        var response = request.response;
        document.getElementsByClassName('output')[0].innerHTML = response.result;
        document.getElementsByClassName('output1')[0].innerHTML = response.result * inputFirst;
        document.getElementsByClassName('output2')[0].innerHTML = inputSecond / response.result;
        
    };
});

// Phase 2, user being able to select the currency from dropdown menu.

 
var requestURL = 'https://api.exchangerate.host/symbols';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var response = request.response;
    //console.log(response);

    var listOfCurrencies = response.symbols;
    var options = document.createElement('option');
    var select1 = document.getElementById('Currency1');
    var select2 = document.getElementById('Currency2');

    for(var index in listOfCurrencies){
        //console.log(index);
        options.innerText = index;
        select1.appendChild(options.cloneNode(true));
        select2.appendChild(options.cloneNode(true));
    }

};


function getResult(){

    var btnSubmit2 = document.getElementsByClassName('btnSubmit2')[0];
    btnSubmit2.addEventListener('click', function(){ 

        var firstCurrency = document.getElementById('Currency1').value;
        var secondCurrency = document.getElementById('Currency2').value;
        var requestURL = `https://api.exchangerate.host/convert?from=${firstCurrency}&to=${secondCurrency}`;
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
            var response = request.response;
            document.getElementsByClassName('output2')[0].innerHTML = response.result;
        };
    });
}

getResult();