const quiz = document.querySelector("#aga-quiz");
const result = document.querySelector("#result");
const scoreNode = document.querySelector("#risk-score");
const messageNode = document.querySelector("#risk-message");

const messages = [
  {
    min: 80,
    text: "進行リスクが高めです。先延ばしにせず、まずは現在の状態を医師に相談してみましょう。",
  },
  {
    min: 55,
    text: "薄毛のサインが複数あります。気になっている時間を減らすためにも、無料相談で確認してみましょう。",
  },
  {
    min: 0,
    text: "現時点では低〜中程度のリスクです。ただしAGAは進行性のため、気になり始めた今の確認がおすすめです。",
  },
];

quiz?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(quiz);
  const rawScore = Array.from(formData.values()).reduce((sum, value) => sum + Number(value), 0);
  const score = Math.min(96, Math.max(28, rawScore + 25));
  const message = messages.find((item) => score >= item.min)?.text ?? messages.at(-1).text;

  scoreNode.textContent = String(score);
  messageNode.textContent = message;
  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
});
