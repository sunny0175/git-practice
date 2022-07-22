function plus(n1, n2) {
    return n1 + n2;
}

function argCheck(a1, b1) {
    if(a1 === "test" && b1 !== "temp") {
        return b1;
    } else {
        return " " + b1 + "random text";
    }
}

let numberOfCats = 0;

plus(2, numberOfCats);

argCheck("test", "number");

var warn = "内容に間違いがないか確認してください";
alert(warn);