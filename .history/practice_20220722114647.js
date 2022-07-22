function plus(n1, n2) {
    return n1 + n2;
}

function argCheck(a, b) {
    if(a === "test" && b !== "temp") {
        return b;
    } else {
        return " " + b + "random text";
    }
}

let numberOfCats = 0;

plus(2, numberOfCats);

argCheck("test", "number")