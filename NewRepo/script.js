var timedis = 500;
var pingbing = new Audio('pingbing.wav');
var scr = new Audio('scr.wav');
var lose = new Audio('lose.mp3');

//sound
function soundpingbing(){
	pingbing.pause();
	pingbing.currentTime = 0;
	pingbing.play();
}
function soundscr(){
	scr.pause();
	scr.currentTime = 0;
	scr.play();
}
function soundlose(){
	lose.pause();
	lose.currentTime = 0;
	lose.play();
}

//create div
for(i=0; i<4; i++){
		for(j=0; j<4; j++){
			$('#appendHere').append('<div class="box" id="box'+i+j+'"></div>');
		}
		$('#appendHere').append('<br>');
	}

	function timeOut(pos, pos2, t){
		setTimeout(function(){
			allcolor = ["#2fc1ce", "#ffb300", "#ff1280", "#ca8dc9", "#f9ec00", "#6f369d"];
			randomcolor = allcolor[Math.floor(Math.random() * allcolor.length)];
			$('#box'+pos+pos2).css('background-color', randomcolor);
		}, timedis*t);
	}
	score = 0;


		$('div[id^=box]').click(function(){
			pos = $(this).attr('id').slice(3, 5);
			play.push(pos);
			click++;
			soundpingbing();
		});
	function playplay(){
		result = [];
		temp = 9;
		for(i=0, j=3; i < 4; i++,j--){
			if (temp!=9){
				combo = Math.floor(Math.random() * 3);
				if (combo===0 && temp!=0)
					pos = temp-1;
				else if (combo===1)
					pos = temp;
				else if (combo===2 && temp!=3)
					pos = temp+1;
			}
			else
				pos = Math.floor(Math.random() * 4);
			temp = pos;
			timeOut(j, pos, i);
			result.push(j + '' + pos);
		}
		console.log(result);

		play = [];
		click = 0;
		console.log(play);

		setTimeout(function(){
			$('div[id^=box]').each(function(){
				$(this).css('background-color', '#222');
			});
		}, 2000);

		check = setInterval(function(){
			if(click == 4){
				if(JSON.stringify(result) == JSON.stringify(play)){
					score++;
					click = 0;
					soundscr();
				}
				else{
					soundlose();
					modal.style.display = "block";
					alert('Game over your score is '+ score);
					score=0;
				}
				$('#score').text(score);
				clearInterval(check);
				// if (score<=3){
				// 	timedis -= 300;
					playplay();

			}
		}, 100);
	}
	playplay();
	// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}