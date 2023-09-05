let input = document.getElementById('input');
let button = document.querySelectorAll('button');
let str = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            str = eval(str);
            input.value = str;
        }
        else if (e.target.innerHTML == 'C') {
            str = "";
            input.value = str;
        }
        else if (e.target.innerHTML == 'DEL') {
            str = str.substring(0, str.length - 1);
            input.value = str;
        }
        else if (str.length >= 12) {
            alert('cant enter more than 12 digits')
        }
        
        else {
            str = str + e.target.innerHTML;
            input.value = str;
        }
    })
})