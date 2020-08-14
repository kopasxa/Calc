window.onload = function (){ 
    let result = document.querySelector(".result");
    let input = document.getElementById("input");
    let button = document.querySelectorAll("#number");
    let res = " ";

    [].forEach.call( button, function(el) {
        el.onclick = function(e) {
            input.value += el.value;
        }
    });

    result.onclick = function(e) {
        res = eval(input.value);
        input.value = res;
    };
};

