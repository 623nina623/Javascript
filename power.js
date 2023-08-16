let btn = document.getElementById("pow_btn").addEventListener("click" , function () {

    let x = document.getElementById("f_num").value;
    let n = document.getElementById("pow").value;
    let power = 1;

    if (n == 0) {
        alert("a number with the power of 0 = equals 1");
    }
    else if (n < 0){
        alert("Please enter a valid number")
    }
    else{
        for (let i = 0 ; i < n ; i++) {
            power = power * x;
        }
    }
    document.getElementById("data").innerText= power;
});

