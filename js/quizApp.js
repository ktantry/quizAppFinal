$(document).ready(function(){
	$('body').css('background-color', 'green');

//Store answers in objects here


// Button to start over quiz. Refresh.
	$('.start-over-button').click(function() {
         location.reload();
	});

	var clickCount = 0;

// Mousedown function to determine the quiz flow
		$('.begin').mousedown(function() {
			clickCount++;
			if(clickCount == 1) {
				$('.begin-button').text('submit');
				$('h2').text('Which male tennis player has won the most grand slams?');
				$('h2').css('margin-top', '300px');
				$('h1').hide();
				$('.instructions').text('Submit your answer below');

			$(".instructions").after("<div class = 'question-list-1'><ul>"+
				"<li class='question-a'><input type='checkbox'>A. Rafael Nadal</li>"+
				"<li class='question-b'><input type='checkbox'>B. John McEnroe</li>"+
				"<li class='question-c'><input type='checkbox'>C. Roger Federer</li>"+
				"<li class='question-d'><input type='checkbox'>D. Brian Scalabrine</li>"+
				"</ul></div>");
		}
			else if(clickCount == 2) {
				$('.question-list-1').hide();
				$('.begin-button').text('submit');
				$('h2').text('Which female tennis player has won the most grand slams?');
				$('h2').css('margin-top', '300px');
				$('h1').hide();
				$('.instructions').text('Submit your answer below');

			$(".instructions").after("<div class = 'question-list-2'><ul>"+
				"<li class='question-a'><input type='checkbox'>A. Margart Court</li>"+
				"<li class='question-b'><input type='checkbox'>B. Serena Williams</li>"+
				"<li class='question-c'><input type='checkbox'>C. Martina Navratilova</li>"+
				"<li class='question-d'><input type='checkbox'>D. Brian Scalabrine</li>"+
				"</ul></div>");
		}
			else if(clickCount == 3) {
				$('.question-list-1').hide();
				$('.question-list-2').hide();
				$('.begin-button').text('submit');
				$('h2').text('Which male tennis player has won the most French Opens?');
				$('h2').css('margin-top', '300px');
				$('h1').hide();
				$('.instructions').text('Submit your answer below');

			$(".instructions").after("<div class = 'question-list-3'><ul>"+
				"<li class='question-a'><input type='checkbox'>A. Rafael Nadal</li>"+
				"<li class='question-b'><input type='checkbox'>B. Roger Federer</li>"+
				"<li class='question-c'><input type='checkbox'>C. Guillermo Coria</li>"+
				"<li class='question-d'><input type='checkbox'>D. Brian Scalabrine</li>"+
				"</ul></div>");
		}

			else if(clickCount == 4) {
				$('.question-list-1').hide();
				$('.question-list-2').hide();
				$('.question-list-3').hide();
				$('.begin-button').text('submit');
				$('h2').text('Who won the Australian Open in 2015?');
				$('h2').css('margin-top', '300px');
				$('h1').hide();
				$('.instructions').text('Submit your answer below');

			$(".instructions").after("<div class = 'question-list-4'><ul>"+
				"<li class='question-a'><input type='checkbox'>A. Rafael Nadal</li>"+
				"<li class='question-b'><input type='checkbox'>B. Roger Federer</li>"+
				"<li class='question-c'><input type='checkbox'>C. Novak Djokovic</li>"+
				"<li class='question-d'><input type='checkbox'>D. Brian Scalabrine</li>"+
				"</ul></div>");
		}

			else if(clickCount == 5) {
				$('.question-list-1').hide();
				$('.question-list-2').hide();
				$('.question-list-3').hide();
				$('.question-list-4').hide();
				$('.begin-button').text('submit');
				$('h2').text("What is Nadal's head to head record vs. Federer");
				$('h2').css('margin-top', '300px');
				$('h1').hide();
				$('.instructions').text('Submit your answer below');

			$(".instructions").after("<div class = 'question-list-4'><ul>"+
				"<li class='question-a'><input type='checkbox'>A. 1-23</li>"+
				"<li class='question-b'><input type='checkbox'>B. 10-11</li>"+
				"<li class='question-c'><input type='checkbox'>C. 23-10</li>"+
				"<li class='question-d'><input type='checkbox'>D. Brian Scalabrine</li>"+
				"</ul></div>");
		}
			//final page
			else if(clickCount == 6) {
				$('.question-list-1').hide();
				$('.question-list-2').hide();
				$('.question-list-3').hide();
				$('.question-list-4').hide();
				$('.question-list-5').hide();
				$('.begin-button').hide();
				$('h2').hide();
				$('.instructions').hide();
				$('h1').show().text('Congratulations! You answered X out of 5 questions correctly.')				
		}

		//Create logic to determine their score


		});



});