var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数当てゲーム。0~2の数字を入力してください！'));

var message = '0~3の数字を入力してください';
if(answer === number)
 {
  message = 'あたり！';
 }
else if(answer < number)
 {
  message = 'はずれ。もっと大きいです';
 }
else if(answer > number)
 {
  message = 'はずれ。もっと小さいです';
 }
 else
 {
  message = '0~3の数字を入力してください';
 }
 
 document.getElementById('choice').textContent = message;
