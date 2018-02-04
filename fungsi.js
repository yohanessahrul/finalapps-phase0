
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

// get answer from url, and execute to be clean
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

var body = document.body;
var wrapDiv = document.getElementById('wrap');
body.appendChild(wrapDiv);
var scoreDiv = document.getElementById('score');
wrapDiv.appendChild(scoreDiv);
var message = document.getElementById('message');
wrapDiv.appendChild(message);
var benerDiv = document.getElementById('bener');
wrapDiv.appendChild(benerDiv);
var ulElement = document.createElement('ul');
benerDiv.appendChild(ulElement);




function arrAnswer (str){
    for(var b=0; b<str.length; b++){
        if(str[b] === '?'){
            var newSlice = str.slice(b+1);
        }
    }
    var newSlice2 = newSlice.split('&');

    var arr = [];
    for(var c=0; c<newSlice2.length; c++){
        var cleanUrl = newSlice2[c].slice(2).replace('+', ' ');
        arr.push(cleanUrl);
    }

    console.log(arr);
    
    for(var f=0; f<quiz.length; f++){
        // console.log(quiz[f].answer);
        var currAn = quiz[f].answer;
        if(arr.indexOf(currAn) === -1){
            // console.log(quiz[f].answer);
            var liElement = document.createElement('li');
            var textLiElement = document.createTextNode(quiz[f].question + ' = ' + quiz[f].answer);
            ulElement.appendChild(liElement);
            liElement.appendChild(textLiElement);
        }
    }


}

console.log(arrAnswer(url));


console.log(body);




