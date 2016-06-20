var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数当てゲーム。0~2の数字を入力してください！'));

ver message;
if(answer === numbe)
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
 
 document.getElementByID('choice').textContent = message;
