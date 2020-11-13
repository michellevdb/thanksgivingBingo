var questions = []


function newQuestion() {
    var randomNumber = Math.floor(Math.random() * (questions.length));
    document.getElementById('question-display').innerHTML = questions[randomNumber]
}