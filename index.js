document.addEventListener('DOMContentLoaded', () => {
    // btn element
    const btns = document.querySelectorAll('.btn');
    const backSpace = document.querySelector('#backspace');
    //btns
    btns.forEach((btn) => {
        btn.addEventListener('mousedown', () => {
            btn.classList.add('btnPressed');
            writeValue(btn);
        });

        btn.addEventListener('mouseup', () => {
            btn.classList.remove('btnPressed');
        });
    });

    //backspaceBtn
    backSpace.addEventListener('mousedown', () => {
        backSpace.classList.add('backspacePressed');
    });

    backSpace.addEventListener('mouseup', () => {
        backSpace.classList.remove('backspacePressed');
    });

    //functions

    //getValueFromBtnPressed

    const valueHtml = document.querySelector('.value');
    let dot = 0;
    let number1;
    let number2;
    let operator;

    function writeValue(btn) {
        const value = btn.getAttribute('data-value');
        if (valueHtml.innerHTML !== '0') {
            if (
                value !== 'C' &&
                value !== '%' &&
                value !== '/' &&
                value !== 'back' &&
                value !== '*' &&
                value !== '-' &&
                value !== '+' &&
                value !== '='
            ) {
                //dot after number
                if (value !== '.') {
                    valueHtml.style.opacity = '1';
                    valueHtml.innerHTML += value;
                } else if (value === '.' && dot === 0) {
                    valueHtml.style.opacity = '1';
                    valueHtml.innerHTML += value;
                    dot = 1;
                }
                //operatorVerify
            } else if (
                value === '+' ||
                value === '-' ||
                value === '*' ||
                value === '/' ||
                value === '%'
            ) {
                number1 = parseFloat(valueHtml.innerHTML);
                valueHtml.innerHTML = '0';
                operator = value;

                //result
            } else if (value === '=') {
                number2 = parseFloat(valueHtml.innerHTML);
                if (operator === '+') {
                    valueHtml.innerHTML = number1 + number2;
                }
                if (operator === '-') {
                    valueHtml.innerHTML = number1 - number2;
                }
                if (operator === '*') {
                    valueHtml.innerHTML = number1 * number2;
                }
                if (operator === '/') {
                    valueHtml.innerHTML = number1 / number2;
                }
                if (operator === '%') {
                    valueHtml.innerHTML = number1 % number2;
                }
                //clear values
            } else if (value === 'C') {
                valueHtml.innerHTML = '0';
                dot = 0;
                //clear values one by one
            } else if (value === 'back') {
                let splitValue = valueHtml.innerHTML.split('');
                if (valueHtml.innerHTML.length !== 1) {
                    splitValue.pop();
                    valueHtml.innerHTML = splitValue.join('');
                } else {
                    splitValue.pop();
                    valueHtml.innerHTML = splitValue.join('');
                    valueHtml.innerHTML = '0';
                    dot = 0;
                }
            }
            //dot before number
        } else if (
            value !== 'C' &&
            value !== '%' &&
            value !== '/' &&
            value !== 'back' &&
            value !== '*' &&
            value !== '-' &&
            value !== '+' &&
            value !== '='
        ) {
            if (value !== '.') {
                valueHtml.style.opacity = '1';
                valueHtml.innerHTML = '';
                valueHtml.innerHTML += value;
            } else if (value === '.' && dot === 0) {
                valueHtml.style.opacity = '1';
                valueHtml.innerHTML = '';
                valueHtml.innerHTML += value;
                dot = 1;
            }
        }
    }

    //end
});
