
// document.getElementById('dlx').addEventListener('click', changeCurrency());
// document.getElementById('fab').addEventListener('click', changeCurrency());
// document.getElementById('ray').addEventListener('click', changeCurrency());
// document.getElementById('solar').addEventListener('click', changeCurrency());

// function changeCurrency(){

//     console.log("hello");

// }



// const channels = document.querySelectorAll('.channel');

// channels.forEach(function(channel) {  
//   channel.addEventListener('click', function() {
//     hello(1);
//   });
// });

// function hello(x){
//     if(x === 0){
//         console.log(x);        
//     }
//     else{
//         console.log(event);
//     }
// }


// function currencySwitcher(event){
    
//     document.getElementById("btnCurrencyTo").innerHTML = event.target.id.toUpperCase();

// }


document.querySelector('.hamburger-menu').addEventListener('click', sideMenuAppears);
//document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);  


   function sideMenuAppears() {
      
    //document.querySelector('.side-menu-position').style.visibility = 'visible';           
    document.getElementById("leftMenu").style.display = 'block';
    document.querySelector('.tooltipbox').style.display = 'none'; 
  }
  
 
  function sideMenuDisappears() {
    
    document.querySelector('.side-menu-position').style.visibility = 'hidden';  
  }



const currencies = document.querySelectorAll('.currency');

//console.log(currencies);

currencies.forEach(function(currency) {
    currency.addEventListener('click', function() {           
        const currencySelected = event.target.id.toUpperCase();
        listCrypto(1, currencySelected);
    });
});





async function listCrypto(xCall, xToken){
    
        
    //const tokenSelected = event.target.id.toUpperCase();
   
     //console.log(event.target.id.toUpperCase());
     
     const apiKey = "ffee4fd1b20cc7840198f05d0fa224d4";
    
     const url = `http://api.coinlayer.com/list?access_key=${apiKey}`;

     const responseApi = await fetch(url);  
    
     const results = await responseApi.json(); 

     const cryptoList = results.crypto;

        
     for (const [key, value] of Object.entries(cryptoList)) {
        

        const cryptoSymbol = value.symbol;
        const cryptoName = value.name;
        const cryptoIcon = value.icon_url;

       
        
        if(xCall === 0){

            const divCryptoResult = document.createElement("div");                
            divCryptoResult.setAttribute("class", "resultRow");
            divCryptoResult.setAttribute("id", cryptoSymbol);
            divCryptoResult.setAttribute("data-bs-dismiss", "modal");   


            const iconImg = document.createElement("img");    
            iconImg.setAttribute("src", cryptoIcon);            
            divCryptoResult.appendChild(iconImg);

            const cryptoTextDiv = document.createElement("div");                
            cryptoTextDiv.setAttribute("class", "resultRowText");

            const cryptoTextSymbol = document.createElement("p");
            cryptoTextSymbol.innerText = cryptoSymbol
            cryptoTextDiv.appendChild(cryptoTextSymbol);

            const cryptoTextName = document.createElement("span");
            cryptoTextName.innerText = cryptoName
            cryptoTextDiv.appendChild(cryptoTextName);


            divCryptoResult.appendChild(cryptoTextDiv);      
        
            
            document.getElementById("tokenList").appendChild(divCryptoResult);


        }  

        if (xCall === 1){     

            if(cryptoSymbol.toUpperCase() === xToken){

                document.getElementById("btnCurrencyTo").innerHTML = "";

                const iconImg = document.createElement("img");    
                iconImg.setAttribute("src", cryptoIcon);
                document.getElementById("btnCurrencyTo").appendChild(iconImg);
                
                const cryptoTextSymbol = document.createElement("p");
                cryptoTextSymbol.innerText = cryptoSymbol
                document.getElementById("btnCurrencyTo").appendChild(cryptoTextSymbol);
            }           

        }

        if (xCall === 2){     

            if(cryptoSymbol.toUpperCase() === xToken){

                document.getElementById("btnCurrencyFrom").innerHTML = "";

                const iconImg = document.createElement("img");    
                iconImg.setAttribute("src", cryptoIcon);
                document.getElementById("btnCurrencyFrom").appendChild(iconImg);
                
                const cryptoTextSymbol = document.createElement("p");
                cryptoTextSymbol.innerText = cryptoSymbol
                document.getElementById("btnCurrencyFrom").appendChild(cryptoTextSymbol);
            }    

        }


    }

     
  }

listCrypto(0,0);
listCrypto(1,"AIR");
listCrypto(2,"MOD");

// Search Token

const sToken = document.getElementById('searchToken');
sToken.addEventListener('keyup', search_token_keyup);


function search_token_keyup() {
    
    let input = document.getElementById('searchToken').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('resultRow');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="flex";                 
        }
    }
}


// function search_token() {
    
//     let input = document.getElementById('searchToken').value
//     input=input.toLowerCase();m;;l,////////.llll       
//     let x = document.getElementsByClassName('resultRow');
      
//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="flex";                 
//         }
//     }
// }



let btnFrom = document.getElementById("btnFrom");
let btnTo = document.getElementById("btnTo");
const container = document.getElementById("tokenList");

btnFrom.addEventListener('click', function(event) {
    // listCrypto(2,e.target.id); 
    // console.log("From");
    updateTokenDropdown(2);
    //console.log(event.target.id);
    btnFrom = 0;
 });
 btnTo.addEventListener('click', function(event) {
    // listCrypto(1,e.target.id); 
    // console.log("To")
    updateTokenDropdown(1);
    btnTo = 0;
   //console.log(event.target.id);
 });



 function updateTokenDropdown(sDropdown){
    switch(sDropdown) {
        case 2: 
            container.addEventListener('click', function (e) {
                // But only alert for elements that have an alert-button class
                if (e.target.classList.contains('resultRow')) {               
                    listCrypto(2,e.target.id);
                    //document.getElementById('searchToken').value = "";
                }
            });
          break;
        case 1:
            container.addEventListener('click', function (e) {
                // But only alert for elements that have an alert-button class
                if (e.target.classList.contains('resultRow')) {               
                    listCrypto(1,e.target.id);
                   // document.getElementById('searchToken').value = "";
                }
            });
          break;
    
    }
   
}

// const container = document.getElementById("tokenList");

  // Click handler for entire DIV container
//   container.addEventListener('click', function (e) {
//     // But only alert for elements that have an alert-button class
//     if (e.target.classList.contains('resultRow')) {
//         //console.log(e.target.id);    
//         //console.log("btnFrom = " + btnFrom);
//         if(btnFrom != ""){
//             listCrypto(2,e.target.id);
//         }
//         if(btnTo !=""){
//             listCrypto(1,e.target.id);
//         }
        
//     }
//   });




//   // Click handler for entire DIV container
//   container.addEventListener('click', function (e) {
//     // But only alert for elements that have an alert-button class
//     if (e.target.classList.contains('resultRow')) {
//        // console.log(e.target.id);   
//         //listCrypto(1,e.target.id); 
//         console.log(btnTo);

//         btnFrom.addEventListener('click', function() {
//             listCrypto(2,e.target.id); 
//             console.log("From");
//          });
//          btnFrom.addEventListener('click', function() {
//             listCrypto(1,e.target.id); 
//             console.log("To")
//          });
//     }
//   });