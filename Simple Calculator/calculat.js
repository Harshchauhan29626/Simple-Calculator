function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    let = result;

    if (num1 == "+") {
        result = Number(num2) + Number(num3);
    }
    else if (num1 == "-") {
        result = num2 - num3;
    }
    else if (num1 == "*") {
        result = num2 * num3;
    }
    else if (num1 == "/") {
        result = num2 / num3;
    } else {
        result = "Invalid operator";
    }

    document.getElementById("p1").innerHTML = "Result: " + result;
}