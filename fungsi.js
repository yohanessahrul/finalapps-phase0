
function jawabanBener(str){
    for(var i=0; i<str.length; i++){
        if(str[i] === '?'){
            var newSlice = str.slice(i+1);
        }
    }
    var newSlice2 = newSlice.split('&');

    var arr = [];
    for(var s=0; s<newSlice2.length; s++){
        var cleanUrl = newSlice2[s].slice(2).replace('+', ' ');
        arr.push(cleanUrl);
    }

    // console.log(arr);

    var point = 0;
    for(var t=0; t<quiz.length; t++){
        for(var u=0; u<arr.length; u++){
            if(quiz[t].answer === arr[u]){
                point++;
            }
        }
    }
    return point*10;
}



var url = document.URL;
var msg = document.getElementById('score');
msg.innerHTML = jawabanBener(url)+'%';

var pesan;
if(jawabanBener(url) == 100){
  pesan = 'Perfect Score';
} else if(jawabanBener(url) > 70){
  pesan = 'Score anda sangat baik!!';
} else if(jawabanBener(url) > 50){
  pesan = 'Score anda cukup baik !!';
} else if(jawabanBener(url) <= 50){
  pesan = 'Score anda buruk!!';
}

var msg = document.getElementById('message');
msg.innerHTML = pesan;
// var msg = document.getElementById('score');
// msg.innerHTML = jawabanBener(url)+'%';