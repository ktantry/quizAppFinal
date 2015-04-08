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
	var question_array = [question1.question, question2.question, question3.question, question4.question, question5.question];

	//Create 5 answers arrays
	var answers1 = ['A. Rafael Nadal','B. John McEnroe','C. Roger Federer','D. Brian Scalabrine'];
	var answers2 = ['A. Margart Court','B. Serena Williams','C. Martina Navratilova','D. Brian Scalabrine'];
	var answers3 = ['A. Rafael Nadal','B. Roger Federer','C. Guillermo Coria','D. Brian Scalabrine'];
	var answers4 = ['A. Rafael Nadal','B. Roger Federer','C. Novak Djokovic','D. Brian Scalabrine'];
	var answers5 = ['A. 1-23','B. 10-11','C. 23-10','D. Brian Scalabrine'];

	var answers_array = [answers1, answers2, answers3, answers4, answers5];

	console.log(answers1[1]);
	console.log(answers_array[0][0]);

	var clickCount = 0;

// Mousedown function to determine the quiz flow
		$('.begin').mousedown(function() {
			if (clickCount < answers_array.length) {
				$('.begin-button').text('submit');	
				$('h2').css('margin-top', '300px');
				$('h1').hide();
				$('.instructions').text('Submit your answer below');
				$('h2').text(question_array[clickCount]);

				$(".instructions").html("<div class = 'question-list-1'><ul>"+
				"<li class='question-a'><input type='checkbox'></li>"+
				"<li class='question-b'><input type='checkbox'></li>"+
				"<li class='question-c'><input type='checkbox'></li>"+
				"<li class='question-d'><input type='checkbox'></li>"+
				"</ul></div>");

				$('.question-a').append(answers_array[clickCount][0]);
				$('.question-b').append(answers_array[clickCount][1]);
				$('.question-c').append(answers_array[clickCount][2]);
				$('.question-d').append(answers_array[clickCount][3]);
				console.log($('.question-a input'));
			}

			else {
				$('li').hide();
				$('.begin-button').hide();
				$('h2').hide();
				$('.instructions').hide();
				$('h1').show().text('Congratulations! You answered X out of 5 questions correctly.')		
			}
			console.log(clickCount);
			clickCount++;	

			
		});		

	});			
