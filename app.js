function getStore() {
    return document.getElementById("store-value").innerText;
}
function showStore(num) {
    document.getElementById("store-value").innerText=num;
}
function getResults() {
    return document.getElementById("output-value").innerText;
}
function showResults(num) {
    if (num=="") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = formattedNum(num);
    }
    
}
function formattedNum(num) {
    if(num=="-") {
        return "";
    }
    let v = Number(num);
    let value = v.toLocaleString("en");
    return value;
}
function formattedReverse(num) {
    return Number(num.replace(/,/g,''));
} 
let number = document.getElementsByClassName("number");
for (let i = 0; i<number.length; i++){
    number[i].addEventListener("click", function() {
        let output = formattedReverse(getResults());
        if (output!=NaN) {
            output =  output + this.id;
            showResults(output);
        }
    });
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i<operator.length; i++){
    operator[i].addEventListener("click", function() {
        if (this.id=="clear") {
            showStore("");
            showResults("");
        }
        else if (this.id=="back") {
            let output = formattedReverse(getResults()).toString();
            if (output) {
                output = output.substr(0,output.length-1);
                showResults(output);
            }
        }
        else {
            let output = getResults();
            let store = getStore();
            if(output!=""){
                output = formattedReverse(output);
                store = store + output;
                if (this.id=="="){
                    let result = eval(store);
                    showResults(result);
                    showStore("");
                }
                else {
                    store = store + this.id;
                    showStore(store);
                    showResults("");
                }
            }
        }

       /*  if (this.id=="log") {
            let output = getResults();
            let store = getStore();
            if(output!=""){
                output = formattedReverse(output);
                store = store + output;
            }
                if(this.id=="="){
                let answer = getLog(store);
                function getLog(store) {
                 return Math.log10(store);
                }
                showResults(answer);
                showStore("");

            }
        } */
    });
}
//to get ln of nos
/* function getLog(y) {
    return Math.log(y)
}
console.log(getLog(2));
//to get log of nos
function getLog2(y) {
    return Math.log10(y)
}
console.log(getLog2(2)); */
function getLog(answer) {
    return Math.log10(answer);
}
let logarithm = document.querySelector(".logarithm");
logarithm.addEventListener("click", function(){
    let answer = getResults();
    let store = getStore();
    see = getStore();
    answer = answer + see;

    if (this.id=="="){
        let results = getLog(answer);
        showResults(results);
        showStore("");
    }
    else {
            store =  this.id + store;
            showStore(store);
            showResults("");
        }
        
        
});