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
