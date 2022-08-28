const scoreList = {
  R: { score: 0 },
  T: { score: 0 },
  C: { score: 0 },
  F: { score: 0 },
  J: { score: 0 },
  M: { score: 0 },
  A: { score: 0 },
  N: { score: 0 },
};

function solution(survey, choices) {
  let answer = "";

  survey.map((element, index) => calculateScore(element, choices[index]));
  const keys = Object.keys(scoreList);
  const values = Object.values(scoreList);

  for (let i = 0; i < keys.length; i += 2) {
    if (values[i].score >= values[i + 1].score) {
      answer += keys[i];
    } else {
      answer += keys[i + 1];
    }
  }
  return answer;
}

function calculateScore(element, choice) {
  const score = Math.abs(choice - 4);
  if (score === 0) {
    return;
  }
  if (choice > 4) {
    addScore(element[1], score);
  } else {
    addScore(element[0], score);
  }
}

function addScore(element, score) {
  scoreList[element].score += score;
}
