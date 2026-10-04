function solve() {
  const sections = Array.from(document.querySelectorAll('#quizzie section'));
  const answers = Array.from(document.querySelectorAll('.quiz-answer'));

  const result = document.querySelector('#results');
  const resultInfo = result.querySelector('h1');

  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  let currQuestionInd = 0;
  let countRightAnswers = 0;

  answers.forEach((answer) => {
    answer.addEventListener('click', () => {

      if (answer.textContent.trim() === rightAnswers[currQuestionInd]) {
        countRightAnswers++;
      }

      sections[currQuestionInd].style.display = 'none';
      currQuestionInd++;

      if (currQuestionInd < sections.length) {
        sections[currQuestionInd].style.display = 'block';

      } else {
        result.style.display = 'block';

        resultInfo.textContent = countRightAnswers < sections.length
          ? `You have ${countRightAnswers} right answers`
          : `You are recognized as top JavaScript fan!`
      }
    });
  });
}