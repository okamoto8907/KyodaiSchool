
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



else{
document.getElementById("phrase").innerHTML = "<h2>★今日のフレーズ★〜じっと考える〜当たり前を疑う、考える時間を持つ、その習慣が周りに流されてしまうことを防ぐ</h2>";                
}

        

        
