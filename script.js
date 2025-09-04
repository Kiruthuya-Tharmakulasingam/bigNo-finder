function compareNumbers() {

            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const num3 = parseFloat(document.getElementById("num3").value);
            let output;

            if (num1 === num2 && num2 === num3) {
                output = `All numbers are equal (${num1})`;
            } else if (num1 >= num3 && num1 === num2) {
                output = `a (${num1}) and b (${num2}) are biggest and equal`;
            } else if (num1 >= num2 && num1 === num3) {
                output = `a (${num1}) and c (${num3}) are biggest and equal`;
            } else if (num2 >= num1 && num2 === num3) {
                output = `b (${num2}) and c (${num3}) are biggest and equal`;
            } else if (num1 > num2 && num1 > num3) {
                output = `a (${num1}) is biggest `;
            } else if (num2 > num1 && num2 > num3) {
                output = `b (${num2}) is biggest`;
            } else if (num3 > num1 && num2 < num3) {
                output = `c (${num3}) is biggest`;
            } else {
                output = `Fill all box`
            }

            document.getElementById("result").innerHTML = output;
        }
