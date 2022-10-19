

//function search(){

// var $input = $('EUR').val()
// var $input2 =$('USD').val()
// $.get(`https://api.exchangerate.host/convert?from=${USD}&to=${EUR}`, (data) => {
//     //console.log(data);
  
  

  
// console.log(data);
  
//   });
//}




var fromCurrency = document.getElementsByClassName('fromCurrency')[0].innerHTML;
var toCurrency = document.getElementsByClassName('toCurrency')[0].innerHTML;

var requestURL = `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var response = request.response;
    console.log(response);
};

   


var btnSubmit = document.getElementsByClassName('btnSubmit')[0];

btnSubmit.addEventListener('click', function(){  
    alert('Hello World!'); 
});
