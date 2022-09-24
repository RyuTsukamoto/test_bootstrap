
var n;
var a1,a2,a3,a4,a5,a6,a7,a8,a9;
var kekka;
let index;

function test() {
    n = n + 1;
    a1 = 1;
    counter.innerHTML = n;
}

function test2() {
    n = n + 10;
    a2 = 1;
    counter.innerHTML = n;
}

function test3() {
    n = n + 100;
    a3 = 1;
    counter.innerHTML = n;
}

function test4() {
    n = n + 1000;
    a4 = 1;
    counter.innerHTML = n;
}

function test5() {
    n = n + 10000;
    a5 = 1;
    counter.innerHTML = n;
}

function test6() {
    n = n + 100000;
    a6 = 1;
    counter.innerHTML = n;
}

function test7() {
    n = n + 1000000;
    a7 = 1;
    counter.innerHTML = n;
}

function test8() {
    n = n + 10000000;
    a8 = 1;
    counter.innerHTML = n;
}

function test9() {
    n = n + 100000000;
    a9 = 1;
    counter.innerHTML = n;
}

function kk() {
    if(a1 == 1){
    kekka.innerHTML = "お仕事お疲れ・・・";
    }
    else if(a2 == 1){
    kekka.innerHTML = "恋ってさ・・・つらいよね・・・わかるよ";
    }
    else{
        kekka.innerHTML = "ダイエットってつらいよね・・・";        
    }
    
    if(a4 == 1){
    kekka3.innerHTML = "ちなみに改善のためにどんなことを考えたか教えてくれYO・・・";
    }
    else if(a5 == 1){
    kekka3.innerHTML = "何を試してみたんだい？ベイビー";
    }
    else{
    kekka3.innerHTML = "やる気スイッチがあればね・・・ちなみにやる気が出る時ってどんな時だい？";        
    }

    if(a7 == 1){
    kekka4.innerHTML = "仲間が欲しいか、よくわかるよ・・・じゃあ先ずは自主性を磨くところからだね・・・！！";
     }
     else if(a8== 1){
    kekka4.innerHTML = "自動化って興味あるかい・・・？";
     }
     else{
    kekka4.innerHTML = "集中力ね・・・滝に打たれるかい・・・？？？";        
     }
    }

window.addEventListener("load", () => {
    // 起動時の処理
    counter = document.getElementById("counter");
    kekka = document.getElementById("kekka");
    kekka3 = document.getElementById("kekka3");
    kekka4 = document.getElementById("kekka4");
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
    btnAdd4.addEventListener("click", test4);
    btnAdd5.addEventListener("click", test5);
    btnAdd6.addEventListener("click", test6);
    btnAdd7.addEventListener("click", test7);
    btnAdd8.addEventListener("click", test8);
    btnAdd9.addEventListener("click", test9);
    kekka2.addEventListener("click", kk);
});