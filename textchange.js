var today = new Date();
var day = today.getDate();
var hour = today.getHour();
var flag =day*hour

if(360>=flag>=0){
document.write("<h2>★今日のフレーズ★〜謙虚な心を持つ〜人からの言葉や物事をあるがままに素直に受け入れる事は、自身の成長につながる</h2>");
}
else if(5400>=flag>360){
document.write("<h2>★今日のフレーズ★〜心の痛みがわかる人〜経験もなく理解するこということは難しく、限られた時間であらゆることを経験することは不可能である。経験により培われた想像力により、自分の懐が深くなっていく</h2>");
        
}else{
document.write("<h2>★今日のフレーズ★〜じっと考える〜当たり前を疑う、考える時間を持つ、その習慣が周りに流されてしまうことを防ぐ</h2>");
        
}
        
