let start = 0;
let timeCount = null;

const $startBtn = $("#start");  
const $stopBtn = $("#stop");  
const $resetBtn = $("#reset"); 

const $hourId = $("#hour");  
const $minuteId = $("#minute");   
const $secondId = $("#second");  
const $millisecondId = $("#millisecond");   

$(document).ready(function(){
     $startBtn.on('click', function () {
          start += 1
          if (start == 1) {
               timeCount = setInterval(TimeCount, 100);
          };
          $(this).prop('disabled', true);
     });

     $stopBtn.on('click', function () {
          clearInterval(timeCount);
          start = 0;
          $startBtn.prop('disabled', false);
     });

     $resetBtn.on('click', function () {
          clearInterval(timeCount);
          start = 0;
          $hourId.text(0);
          $minuteId.text(0);
          $secondId.text(0);
          $millisecondId.text(0);
          $startBtn.prop('disabled', false);
     });
});

function TimeCount() {
     let hour = $hourId.text();  
     let min = $minuteId.text();    
     let sec = $secondId.text();  
     let ms = $millisecondId.text();    

     ms++;

     $millisecondId.text(ms);

     if ($millisecondId.text() == 10) {
          sec++;
          $millisecondId.text(0);
          $secondId.text(sec);
     }

     if ($secondId.text() == 60) {
          min++;
          $secondId.text(0);
          $minuteId.text(min);
     }

     if ($minuteId.text() == 60) {
          hour++;
          $minuteId.text(0);
          $hourId.text(hour);
     }
 }
