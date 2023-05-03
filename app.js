
//1
function check(a,b){
    if(a === b){
        return "is equal"
    }else{
        return "is not equal"
    }
}

//2
function fToC(F){
    if(typeof F === "number"){
        return ((F - 32) * 5 / 9)
    }else{
        return false
    }
}

//3
function doSomething(a,b,operation){
    if(operation === '+' && typeof a === "number" && typeof b === "number"){
        return a + b
    }
    else if(operation === '-' && typeof a === "number" && typeof b === "number"){
        return a - b
    }
    else if(operation === '*' && typeof a === "number" && typeof b === "number"){
        return a * b
    }
    else if(operation === "/" && typeof a === "number" && typeof b === "number"){
        return a / b
    }
    else{
        return false
    }
}

