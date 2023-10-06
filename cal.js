let currentQuestionNumber = 1; // 현재 질문 번호, 초기값은 1로 설정

function loadQuestionAndAnswer(questionNumber) {
    // 질문 내용 로드
    fetch(`https://raw.githubusercontent.com/MineTime23/OXQUIZ/master/question/question${questionNumber}/question.txt`)
        .then(response => response.text())
        .then(question => {
            document.getElementById("questionText").textContent = question;
        });

    // "O" 또는 "X" 답을 로드
    fetch(`https://raw.githubusercontent.com/MineTime23/OXQUIZ/master/question/question${questionNumber}/answer.txt`)
        .then(response => response.text())
        .then(answer => {
            // 이미지 로드
            document.getElementById("questionImage").src = `https://raw.githubusercontent.com/MineTime23/OXQUIZ/master/question/question${questionNumber}/image.jpg`;

            document.getElementById("oButton").addEventListener("click", () => {
                if (answer.trim() === "O") {
                    playCorrectSound();
                } else {
                    playWrongSound();
                }
                questionNumber = questionNumber +1
                if (questionNumber === 9){
                    questionNumber = 1
                }
                loadQuestionAndAnswer(questionNumber)
            });

            document.getElementById("xButton").addEventListener("click", () => {
                if (answer.trim() === "X") {
                    playCorrectSound();
                } else {
                    playWrongSound();
                }
                questionNumber = questionNumber +1
                if (questionNumber === 9){
                    questionNumber = 1
                }
                loadQuestionAndAnswer(questionNumber)
            });
        });
}

// 띵동 소리 재생 함수 (구현 필요)
function playCorrectSound() {
    // "띵동" 소리 재생 코드를 추가
    // 예: new Audio("correct.mp3").play();
}

// 반대 소리 재생 함수 (구현 필요)
function playWrongSound() {
    // "반대" 소리 재생 코드를 추가
    // 예: new Audio("wrong.mp3").play();
}

// 페이지 로드 시 첫 번째 질문 로드
loadQuestionAndAnswer(currentQuestionNumber);

