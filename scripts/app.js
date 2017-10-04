// let questionsAnswered = 0
const quizOrder=[4,5,0,1,14,13,12,11,9,10,8,7,2,3,6]

//a function to see if all the questions are answered.
const checkComplete = ()=> {
	return questionsAnswered === $('[data-correct-answer]').length
}

const checkAnswer = (e)=> {
	const $el = $($('[data-correct-answer]')[questionsAnswered])
	const correctAnswer = $el.data('correctAnswer')
	const selectedAnswer = $(e.target).data('possibleAnswer')
	
	if(!$el.data('userAnswer')){
		$el.data('userAnswer', selectedAnswer)
		$('[data-runningscore]').text(`${correctAnswers()} / ${questionsAnswered + 1}`)
	}
	const $correctIcon = $('[data-correct]').hide()
	const $incorrectIcon = $('[data-incorrect]').hide()
	if (correctAnswer === selectedAnswer){
		$correctIcon.show()
	}else{
		$incorrectIcon.show()
	}
	
}

const correctAnswers = () =>{
 const $els = $('[data-correct-answer]')
 let count = 0
 for(let i = 0; i < $els.length; i++ ){
 	let $el = $($els[i]) 
 	if($el.data('correctAnswer') === $el.data('userAnswer')){
 		count += 1
 	}
 }
 return count
}

const nextQuestion = () =>{
	questionsAnswered += 1
	const $el = $($('[data-correct-answer]')[questionsAnswered - 1])
	$el.hide()
	$('[data-correct]').hide()
	$('[data-incorrect]').hide()
	const nextElement = $($('[data-correct-answer]')[questionsAnswered])
	nextElement.show()
	if(checkComplete()){
		
		const $p = $('<p class="final_score">').text(`You got ${correctAnswers()} out of ${questionsAnswered} on your first try`)
		$(".section").append($p)
		$("button").hide()
		//instead of alerting build a paragraph elemnt with jquery and add this as the text of it and append it to the page
		//hide the buttons that you can select answers with
	}	
}
$('[data-possible-answer]').on('click',checkAnswer)
$('[data-next]').on('click',nextQuestion)

