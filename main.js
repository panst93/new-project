let currencyRatio ={
    USD:{
        KRW:1184.36,
        USD:1,
        VND:22972.50
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:19.40
        unit:"원"
    },
    VND:{
        KRW:0.052,
        USD:0.000044,
        VND:1
        unit:"동"
    }
};

//1.console.log(currencyRatio.USD.unit)

let fromCurrency="USD";
let toCurrency="USD";

console.log(currencyRatio['VND']["unit"].unit);

console.log(document.querySelectorAll("#from-currency-list a")
.forEach(menu=>menu.addEventListener("click",function(){
       //1. 버튼을 가져온다
      document.getElementById("from-button").textContent=this.textContent;
       //2. 버튼의 값을 바꾼다
       //3. 선택된 환율값을 변수에 저장해준다
       fromCurrency= this.textContent;
       console.log("fromCurrency는", fromCurrency);
}));

document.querySelectorAll("#tos-currency-list a")
.forEach(menu=>menu.addEventListener("click",function(){
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency= this.textContent;
}));