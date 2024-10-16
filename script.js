let arrstr = ["klfsd","fdaf","ggtr","werwe","gfg"];
arrstr.sort();
console.log(arrstr);

let arr = [2,54,6536,234,54,75];
arr.sort(function(a,b){return a-b});
console.log(arr);

let arr1 = [42,34,547,885,34];
arr1.sort(function(a,b){return b-a});
console.log(arr1);

let output = arr1.reduce(function(a,b){return a+b});
console.log(output);

let answerstr = arr1.toString();
console.log(answerstr);

let answerjoin = arr1.join(" | ");
console.log(answerjoin);

//higher order method;
//map;
//reduce;
//number sort;
//find;
//filter;
//foreach;
