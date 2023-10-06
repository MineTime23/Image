let currentQuestionNumber = 1; // 현재 질문 번호, 초기값은 1로 설정

function loadQuestion(questionNumber) {
    const questionTextElement = document.getElementById("questionText");

    // questionNumber에 해당하는 질문 파일 로드
    fetch(`question/question${questionNumber}/question.txt`)
        .then(response => {
            if (!response.ok) {
                throw new Error("질문 파일을 로드하는 중 오류 발생");
            }
            return response.text();
        })
        .then(question => {
            questionTextElement.textContent = question;
        })
        .catch(error => {
            console.error(error);
            questionTextElement.textContent = "질문을 로드하지 못했습니다.";
        });
}

function nextQuestion() {
    // 다음 질문 번호 계산
    currentQuestionNumber++;
    if (currentQuestionNumber > 8) {
        currentQuestionNumber = 1; // 8번 질문 이후 1번으로 돌아감
    }
    loadQuestion(currentQuestionNumber);
}

// 초기 질문 로드 (1번 질문부터 시작)
loadQuestion(currentQuestionNumber);

// 질문 순환 시작 (예: 버튼 클릭 시)
document.getElementById("nextButton").addEventListener("click", nextQuestion);
