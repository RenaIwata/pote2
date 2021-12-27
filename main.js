//初期値は「0」から始める
let start = 0;
//タイムを図る
let timeCount = null;

const $startBtn = $("#start");  //スタートボタン
const $stopBtn = $("#stop");  //ストップボタン
const $resetBtn = $("#reset");  //リセットボタン

const $hourId = $("#hour");   //1時間
const $minuteId = $("#minute");   //分
const $secondId = $("#second");   //秒
const $millisecondId = $("#millisecond");   //ミリ秒


$(document).ready(function(){

     //スタートボタンを押下した時
     $startBtn.on('click', function () {
          start += 1
          if (start == 1) {
               timeCount = setInterval(TimeCount, 100);
          };
          //ボタンを非活性にする 非活性のクラスを付与
          $(this).addClass('is-disabled');
     });

     //ストップボタンを押下した時
     $stopBtn.on('click', function () {
          clearInterval(timeCount);
          start = 0;
          //スタートボタンの非活性のクラスを削除
          $startBtn.removeClass('is-disabled');
     });

     //リセットボタンを押下した時
     $resetBtn.on('click', function () {
          clearInterval(timeCount);
          start = 0;
          $hourId.text(0);
          $minuteId.text(0);
          $secondId.text(0);
          $millisecondId.text(0);
          //スタートボタンの非活性のクラスを削除
          $startBtn.removeClass('is-disabled');
     });
});

function TimeCount() {

     //それぞれのテキストを取得
     let hour = $hourId.text();   //1時間
     let min = $minuteId.text();    //分
     let sec = $secondId.text();    //秒
     let ms = $millisecondId.text();    //ミリ秒

     //1ミリ秒ごとプラスする
     ms++;

     //秒数を出力する
     $millisecondId.text(ms);

     //ミリ秒が10になった時に、+1秒繰り上げる
     if ($millisecondId.text() == 10) {
          sec++;
          $millisecondId.text(0);
          $secondId.text(sec);
     }

     //秒が60になった時に、+1分繰り上げる
     if ($secondId.text() == 60) {
          min++;
          $secondId.text(0);
          $minuteId.text(min);
     }

     //分が60になった時に、+1時間分繰り上げる
     if ($minuteId.text() == 60) {
          hour++;
          $minuteId.text(0);
          $hourId.text(hour);
     }
 }
