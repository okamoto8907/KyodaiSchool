
var today = new Date();
var day = today.getDate();
var hour = today.getHours();
var minutes = today.getMinutes();
var flag =day+hour+minutes;


if(flag%30 == 0){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜謙虚な心を持つ〜人からの言葉や物事をあるがままに素直に受け入れる事は、自身の成長につながる</h2>";
}
else if(flag%30 == 1){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜心の痛みがわかる人〜経験もなく理解するこということは難しく、限られた時間であらゆることを経験することは不可能である。経験により培われた想像力により、自分の懐が深くなっていく</h2>";        
}
else if(flag%30 == 2){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜自分は、情けない、いい加減、ずるいと思わないといけない〜自らを律していく点を探し、改善していくことで、向上することが出来る。</h2>";        
}
else if(flag%30 == 3){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜自分が自分に嘘をつく〜他人に嘘はつけても、自分をだますことは出来ない。</h2>";        
}
else if(flag%30 == 4){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜頂上見ずに何が人生か〜頂上からの景色は格別である。そこを目指すのも目指さないのもあなた次第。</h2>";        
}
else if(flag%30 == 5){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜ルーツが大事〜ルーツとは祖先や物事の根元・起源である。ルーツをたどる事で、起源がわかると同時に、今の立ち位置を理解する事ができる。</h2>";        
}
else if(flag%30 == 6){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜人の話をメモする〜人間は忘れる生き物である。チャンスを逃さないよう、メモしよう。</h2>";        
}
else if(flag%30 == 7){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜プライドとは〜高慢や我との違いを正しく理解しているか。</h2>";        
}
else if(flag%30 == 8){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜心配りが必要〜人に対して何よりも必要なものは、気遣い、心配りである。</h2>";        
}
else if(flag%30 == 9){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜まず自分を信じられるか〜人から信用される人間になるために、まず、自分を厳しい目で見る。</h2>";        
}
else if(flag%30 == 10){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜現在は過去のルーティーン〜癖、習慣はなかなか変えられない。良い癖付けを幼少から身につけさせることが肝要である。</h2>";        
}
else if(flag%30 == 11){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜慌ただしさの中の静寂〜慌ただしい生活に充実はあるか？日々が日常の繰り返しになっていないか？</h2>";        
}
else if(flag%30 == 12){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜毎日、自分と向き合う〜いま、そして次のミッションを把握する。自分を前進させる効果的な方法である。ミッションから逃げるのは、もってのほかである。</h2>";        
}

else if(flag%30 == 13){
    document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜人生を学ぶ〜生きることを通じて人生を学び、学んだ成果を人生の中で活かさなければならない。</h2>";        
}


else{
document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜じっと考える〜当たり前を疑う、考える時間を持つ、その習慣が周りに流されてしまうことを防ぐ</h2>";                
}

        

        
