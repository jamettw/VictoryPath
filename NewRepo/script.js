for(i=0; i<4; i++){
		for(j=0; j<4; j++){
			$('#appendHere').append('<div id="box'+i+j+'"></div>');	
		}
		$('#appendHere').append('<br>');
	}

	function timeOut(pos, pos2, t){
		setTimeout(function(){
			$('#box'+pos+pos2).css('background-color', 'red');
		}, 1000*t);
	}

		function playsound(){
    document.querySelector('#audioau').play();	
    }
    
    
	score = 0;
	function playplay(){
		result = [];
		for(i=0; i < 4; i++){ 
			pos = Math.floor(Math.random() * 4);
			pos2 = Math.floor(Math.random() * 4);
			timeOut(pos, pos2, i);
			result.push(pos + '' + pos2);
		}
		console.log(result);

		play = [];
		click = 0;
		$('div[id^=box]').click(function(){
			pos = $(this).attr('id').slice(3, 5);
			play.push(pos);
			click++;
			playsound();
			// alert($(this).attr('id'));
		});
		console.log(play);

		setTimeout(function(){
			$('div[id^=box]').each(function(){
				$(this).css('background-color', 'black');
			});
		}, 5000);
		// $('div[id^=box]').each(function(){
			// console.log($(this).attr('id'));
		//})

		function clear(){

		}

		check = setInterval(function(){
			if(click == 4){
				if(JSON.stringify(result) == JSON.stringify(play)){
					alert('yes');
					score++;
				}else{
					alert('no');
				}
				$('#score').text(score);
				clearInterval(check);
				playplay();
			}
		}, 100);
	}
	playplay();