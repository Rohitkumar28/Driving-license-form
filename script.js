const inputFields = document.querySelectorAll('.input-field');
  const progressBar = document.querySelector('.progress');
  const questions = document.querySelectorAll('.question');
  const totalQuestions = questions.length;
  let answeredQuestions = 0;

  inputFields.forEach(input => {
    input.addEventListener('input', updateProgress);
  });

  function updateProgress() {
    let filledInputs = 0;
    inputFields.forEach(input => {
      if (input.value.length >= 3 || (input.tagName === 'SELECT' && input.value !== '') || (input.type === 'radio' && input.checked)) {
        filledInputs++;
      }
    });
    const progressPercentage = (filledInputs / totalQuestions) * 100;
    progressBar.style.width = `${progressPercentage}%`;

   
    if (this.id === `input${totalQuestions}` || this.id === `select${totalQuestions}` || this.id === `radio${totalQuestions}`) {
      const currentQuestionIndex = Array.from(questions).indexOf(this.parentElement);
      if (currentQuestionIndex < totalQuestions - 1) {
        questions[currentQuestionIndex + 1].scrollIntoView({ behavior: 'smooth' });
      }
    }
  }