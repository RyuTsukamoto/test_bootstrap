
let n;
let index;

function test() {
    n = n + 1;
    counter.innerHTML = n;
}

function test2() {
    n = n + 10;
    counter.innerHTML = n;
}

function test3() {
    n = n + 100;
    counter.innerHTML = n;
}

window.addEventListener("load", () => {
    // 起動時の処理
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    btnAdd2 = document.getElementById("btnAdd2");
    btnAdd3 = document.getElementById("btnAdd3");
    btnAdd4 = document.getElementById("btnAdd4");
    btnAdd5 = document.getElementById("btnAdd5");
    btnAdd6 = document.getElementById("btnAdd6");
    btnAdd7 = document.getElementById("btnAdd7");
    btnAdd8 = document.getElementById("btnAdd8");
    btnAdd9 = document.getElementById("btnAdd9");
    n = 0;

    btnAdd.addEventListener("click", test);
    btnAdd2.addEventListener("click", test2);
    btnAdd3.addEventListener("click", test3);
    btnAdd4.addEventListener("click", test);
    btnAdd5.addEventListener("click", test2);
    btnAdd6.addEventListener("click", test3);
    btnAdd7.addEventListener("click", test);
    btnAdd8.addEventListener("click", test2);
    btnAdd9.addEventListener("click", test3);
});