$(document).ready(function(){
	$('body').css('background-color', 'green');
	$('.results').hide();
	$("h1").fadeIn();
//Store answers in objects here




	function Question(question, answer) {
		this.question = question;
		this.answer = answer;
	}

	//Create variables for questions
	var question1 = new Question('Which male tennis player has won the most grand slams?', 'C. Roger Federer');
	var question2 = new Question('Which female tennis player has won the most grand slams?', 'A. Margart Court');
	var question3 = new Question('Which male tennis player has won the most French Opens?', 'A. Rafael Nadal');
	var question4 = new Question('Who won the Australian Open in 2015?', 'C. Novak Djokovic');
	var question5 = new Question("What is Nadal's head to head record vs. Federer", 'C. 23-10');

	//Store questions in an array here
	var question_array = [question1, question2, question3, question4, question5];

	//Create 5 answers arrays
	var answers1 = ['A. Rafael Nadal','B. John McEnroe','C. Roger Federer','D. Brian Scalabrine'];
	var answers2 = ['A. Margart Court','B. Serena Williams','C. Martina Navratilova','D. Brian Scalabrine'];
	var answers3 = ['A. Rafael Nadal','B. Roger Federer','C. Guillermo Coria','D. Brian Scalabrine'];
	var answers4 = ['A. Rafael Nadal','B. Roger Federer','C. Novak Djokovic','D. Brian Scalabrine'];
	var answers5 = ['A. 1-23','B. 10-11','C. 23-10','D. Brian Scalabrine'];

	var answers_array = [answers1, answers2, answers3, answers4, answers5];

	var background1 = 'http://static.sportskeeda.com/wp-content/uploads/2014/03/roger-federer2-2142450.jpg';
	var background2 = 'https://blog-blogmediainc.netdna-ssl.com/upload/SportsBlogcom/80649/0524887001419881428_filepicker.jpg';
	var background3 = 'http://cp91279.biography.com/1120330742/1120330742_1875298171_Bio-Biography-Martina-Navratilova-LF4.jpg?pubId=1120330742';
	var background4 = 'http://static.guim.co.uk/sys-images/Sport/Pix/pictures/2011/5/10/1305051256137/Novak-Djokovic-007.jpg';
	var background5 = 'http://media-1.web.britannica.com/eb-media/22/69222-004-D2C7C07B.jpg';

	var background_array = [background1, background2, background3, background4, background5];
	

	var clickCount = 0;
	var counterCount = 0;
	var total_correct = 0;

	// Button to start over quiz. Refresh.

		$('.start-over').mousedown(function(){
		clickCount = 0;
		counterCount = 0;
		total_correct = 0;
		$('body').children().hide();
		$('h1').show().text("WELCOME TO THIS TENNIS HISTORY QUIZ");
		$('h2').show().text("This is the greatest tennis quiz of all time");
		$('h2').css('margin-top', '0px');
		$('.instructions').show().text('Click the button below to begin');
		$('.begin').show();
		$('.begin-button').show();
		$('.begin-button').text('Begin');
		$('.start-over').show();
		console.log(clickCount);
		$('.number-correct').html("<p>You have gotten " + total_correct + " out of " + [clickCount] + " questions correct so far</p>")
	})

	
// Mousedown function to determine the quiz flow
		$('.begin').mousedown(function() {
			console.log(total_correct);
			$('.number-question').html("<p>You are on question " + [clickCount+1] + " of 5</p>");
			$('body').css('background-image', 'url(' + background_array[clickCount]+')');
			
			if (clickCount <= answers_array.length && counterCount > 0) {
				var checked_input = ($('.question-list-1 input:checked').val());
				var correct_answer = question_array[clickCount-1].answer;


				
				if (checked_input == correct_answer) {
					total_correct++;
					$('.right-wrong').html("<p>You got the last question right</p>")	
				}
				else {
					$('.right-wrong').html("<p>You got the last question wrong</p>")
				}
				
			}

			$('.number-correct').html("<p>You have gotten " + total_correct + " out of " + [clickCount] + " questions correct so far</p>")

			if (clickCount < answers_array.length) {
				$('.begin-button').text('submit');	
				$('h2').css('margin-top', '300px');
				$('h1').hide();
				$('.results').hide();
				$('h2').text(question_array[clickCount].question);

				$(".instructions").html("<div class = 'question-list-1'><ul>"+
				"<li class='question-a'><input type='radio' name='Question'></li>"+
				"<li class='question-b'><input type='radio' name='Question'></li>"+
				"<li class='question-c'><input type='radio' name='Question'></li>"+
				"<li class='question-d'><input type='radio' name='Question'></li>"+
				"</ul></div>");

				$('.question-a').append(answers_array[clickCount][0]);
				$('.question-b').append(answers_array[clickCount][1]);
				$('.question-c').append(answers_array[clickCount][2]);
				$('.question-d').append(answers_array[clickCount][3]);

				$('.question-a input').val(answers_array[clickCount][0]);
				$('.question-b input').val(answers_array[clickCount][1]);
				$('.question-c input').val(answers_array[clickCount][2]);
				$('.question-d input').val(answers_array[clickCount][3]);
			}

			else {
				$('li').hide();
				$('.begin-button').hide();
				$('.results').show();
				$('h2').hide();
				$('.instructions').hide();
				$('.right-wrong').show();
				if (checked_input == correct_answer) {
						$('.right-wrong').text('CORRECT');	
						$('.right-wrong').css('color', 'blue' );
						$('.right-wrong').css('text-align', 'center' );
						$('.right-wrong').css('margin-top', '300px' );
						$('.right-wrong').css('font-size', '300%' );
				}
				else {
						$('.right-wrong').text('INCORRECT');
						$('.right-wrong').css('color', 'red' );
						$('.right-wrong').css('text-align', 'center' );
						$('.right-wrong').css('margin-top', '300px' );
						$('.right-wrong').css('font-size', '300%' );
				}

				$('.results').mousedown(function(){
					$('h1').show().text("Congratulations! You answered " + total_correct + " out of 5 questions correctly.");
					$('.right-wrong').hide();
					$('.results').hide();
			});
				
				$('.number-question').hide();	
				$('.number-correct').hide();	
			}
			counterCount++;
			
			if (counterCount % 2 != 0 && counterCount != 0){
					clickCount++;
					$('h2').show();
					$('.instructions').show();
					$('li').show();
					$('.right-wrong').hide();
					$('.number-question').show();	
					$('.number-correct').show();
			}
			else {
				$('li').hide();
				$('.begin-button').text('Next Question');
				$('h2').hide();
				$('.instructions').hide();
				$('.number-question').hide();	
				$('.number-correct').hide();
				$('.right-wrong').show();
				if (checked_input == correct_answer) {
						$('.right-wrong').text('CORRECT');	
						$('.right-wrong').css('color', 'blue' );
						$('.right-wrong').css('text-align', 'center' );
						$('.right-wrong').css('margin-top', '300px' );
						$('.right-wrong').css('font-size', '300%' );
				}
				else {
						$('.right-wrong').text('INCORRECT');
						$('.right-wrong').css('color', 'red' );
						$('.right-wrong').css('text-align', 'center' );
						$('.right-wrong').css('margin-top', '300px' );
						$('.right-wrong').css('font-size', '300%' );

				}


			}
		});	


  
		
});			