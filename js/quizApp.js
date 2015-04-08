$(document).ready(function(){
	$('body').css('background-color', 'green');

//Store answers in objects here


// Button to start over quiz. Refresh.
	$('.start-over-button').click(function() {
         location.reload();
	});

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


	var clickCount = 0;
	var total_correct = 0;

// Mousedown function to determine the quiz flow
		$('.begin').mousedown(function() {
			
			if (clickCount <= answers_array.length && clickCount > 0) {
				var checked_input = ($('.question-list-1 input:checked').val());
				var correct_answer = question_array[clickCount-1].answer;

				console.log(checked_input);
				console.log(correct_answer);

				if (checked_input == correct_answer) {
					total_correct++;
					console.log(total_correct);
				}
			}

/*			console.log($('.question-list-1 input:checked').val());*/
			if (clickCount < answers_array.length) {
				$('.begin-button').text('submit');	
				$('h2').css('margin-top', '300px');
				$('h1').hide();
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
				$('h2').hide();
				$('.instructions').hide();
				$('h1').show().text('Congratulations! You answered X out of 5 questions correctly.')		
			}

			clickCount++;	
		
		});	

		

	});			
