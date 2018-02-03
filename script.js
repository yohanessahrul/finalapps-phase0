var answer = [];

var body = document.body;

// buat container
var containerDiv = document.createElement('container');
body.appendChild(containerDiv);

// buat form
var formulir = document.createElement('form');
formulir.setAttribute('action', 'hasil.html');
formulir.setAttribute('id', 'myForm');
containerDiv.appendChild(formulir);

// buat Description
var decription = document.createElement('p');
formulir.appendChild(decription); // print html
    var textdecription = document.createTextNode('Kuis ini dibuat untuk menguji pengetahuan anda, pilihlah jawaban yang sesuai dengan pertanyaan.');
    decription.appendChild(textdecription);

// <div class="soal">...</div>
for(var d=0; d<quiz.length; d++){
  // create <div class="soal">
  var divSoal = document.createElement('div');
  divSoal.setAttribute('class', 'soal');
  
  // create <p>...</p>
  var pSoal = document.createElement('p');
  var textpSoal = document.createTextNode(quiz[d].question);

  // create <ul>...</ul>
  var ulElement = document.createElement('ul');
  for(var a=0; a<quiz[d].opt.length; a++){
    // create <li>...</li>
    var liElement = document.createElement('li');
        var labelAnswer = document.createElement('label');
            var radioInput = document.createElement('input');
                radioInput.setAttribute('type', 'radio');
                radioInput.setAttribute('name', [d]);
                radioInput.setAttribute('id', quiz[d].opt[a]);
                radioInput.setAttribute('value', quiz[d].opt[a]);
            var textLiElement = document.createTextNode(quiz[d].opt[a]);

    ulElement.appendChild(liElement);
      liElement.appendChild(labelAnswer);
        labelAnswer.appendChild(radioInput);
        labelAnswer.appendChild(textLiElement);

        // var dpt = document.getElementsByName('');
  }

  // set in parent to show in html web pages
  formulir.appendChild(divSoal);
    divSoal.appendChild(pSoal);
      pSoal.appendChild(textpSoal);
    divSoal.appendChild(ulElement);
}
console.log(containerDiv);

  // bikin tombol
  var button = document.createElement('button');
  button.setAttribute('onclick', 'check()');
  var textButton = document.createTextNode('LIHAT NILAI');
//   button.setAttribute('value', 'Cek Hasil');  button.addEventListener('click', function()){
//     alert('Hello!');
//   }
  formulir.appendChild(button);
    button.appendChild(textButton);

