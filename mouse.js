//マウスオーバー時の処理
function mouseOn(){
  var obj = document.getElementById("map001");
  obj.src = "map002.jpeg";
}    

//マウスアウト時の処理
function mouseOff(){
  var obj = document.getElementById("map001");
  obj.src = "map001.jpeg";
}

//プラスボタン
var num = 0;
function counter(){
num++;
document.getElementById("plus-button").innerHTML = num;
}

//画像配列
img = new Array();
img[0] = "map001.jpeg";
img[1] = "map002.jpeg";
img[2] = "map003.jpeg";

// id 属性が、"aaa" であるエレメントを取得
var element = document.getElementById("aaa");

// WheelEvent に対応している
if(window.WheelEvent){

// ホイールを操作すると実行されるイベント
	element.addEventListener("wheel" , function (e){
			alert("ホイールを操作した");
		});
	}



// ハンバーガメニュー
function hamburger() {
　　document.getElementById('line1').classList.toggle('linea');
　　document.getElementById('line2').classList.toggle('lineb');
　　document.getElementById('line3').classList.toggle('linec');
　　document.getElementById('target').classList.toggle('slidex');
　　document.getElementById('nav_f').classList.toggle('fadein');
}

document.getElementById('target').addEventListener('click', function () {
　　hamburger();
});

let list = document.getElementsByClassName('list');

for (let i = 0; i < list.length; i++) {
　　list[i].addEventListener('click', function () {
　　　　hamburger();
    });
}
