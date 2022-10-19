

//function search(){

// var $input = $('EUR').val()
// var $input2 =$('USD').val()
// $.get(`https://api.exchangerate.host/convert?from=${USD}&to=${EUR}`, (data) => {
//     //console.log(data);
  
  

  
// console.log(data);
  
//   });
//}



var btnSubmit = document.getElementsByClassName('btnSubmit')[0];
btnSubmit.addEventListener('click', function(){  
    var fromCurrency = document.getElementsByClassName('fromCurrency')[0].value;
    var toCurrency = document.getElementsByClassName('toCurrency')[0].value;
 
    var requestURL = `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var response = request.response;
        document.getElementsByClassName('output')[0].innerHTML = response.result;
    };
});


