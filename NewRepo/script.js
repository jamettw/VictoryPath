var timedis = 500;
for(i=0; i<4; i++){
		for(j=0; j<4; j++){
			$('#appendHere').append('<div id="box'+i+j+'"></div>');
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

		function playsound(){
    document.querySelector('#audioau').play();
    }


	score = 0;


		$('div[id^=box]').click(function(){
			pos = $(this).attr('id').slice(3, 5);
			play.push(pos);
			click++;
			playsound();
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
				}
				else{
					alert('Game over your score is '+ score);
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