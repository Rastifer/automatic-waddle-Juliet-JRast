$(function(){
    $('#consoleBox').append('console is ready...');
    
    $('iframe').click(function(){
      $('#consoleBox').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
      $(this).toggleClass('selected').siblings().removeClass('selected');
  ; 
    });
    
  });


//   document.querySelector('a').addEventListener('click', function() {
//     // your logic here
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var map = document.getElementById("map");

//     if (map) {
//         map.onload = function() {
//             this.style.pointerEvents = 'none'; 
//         };
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     var map = document.getElementById("map");
//     var consoleBox = document.getElementById("consoleBox");

//     if (map) {
//         map.onload = function() {
//             this.style.pointerEvents = 'none'; 
//         };
//     }

//     if (consoleBox) {
//         consoleBox.onclick = function() {
//             this.innerHTML = 'You clicked the console box.';
//         };
//     }

//     // New code starts here
//     var mapContainer = document.getElementById("map-container");
//     if (mapContainer) {
//         mapContainer.onclick = function(event) {
//             if (event.target.tagName === 'path') {
//                 consoleBox.innerHTML = 'You clicked ' + event.target.id;
//             }
//         };
//     }
//     // New code ends here
// });

