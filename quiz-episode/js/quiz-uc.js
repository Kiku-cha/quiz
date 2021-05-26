//問題・回答・正解
const quiz = [
  {
    question: 'ガンダムUCは「逆襲のシャア」から何年後の宇宙世紀何年が舞台か',
    answers: [ '3年後の宇宙世紀0096年', '5年後の宇宙世紀0097年', '6年後の宇宙世紀0099年', '10年後の宇宙世紀0098年'],
    correct: '3年後の宇宙世紀0096年'
  }, {
    question: 'バナージとオードリーが歩きながら食べた物はどれか',
    answers: [ 'フライドポテト', 'ホットドッグ', '焼き鳥', 'ハンバーガー'],
    correct: 'ホットドッグ'
  }, {
    question: 'シャアの再来と呼ばれている男の名前どれか',
    answers: [ 'ギレン・ザビ', 'ギニアス・サハリン', 'パプテマス・シロッコ', 'フル・フロンタル'],
    correct: 'フル・フロンタル'
  }, {
    question: 'クシャトリヤのファンネルを操ったユニコーンガンダムのサイコ・マシン機能はどれか',
    answers: [ 'サイコミュ・ジャック', 'デストロイ・アンチェイド', 'ニュータイプ・デストロイヤー', 'ラプラスプログラム'],
    correct: 'サイコミュ・ジャック'
  }, {
    question: 'ユニコーン2号機の機体名はどれか',
    answers: [ 'バンシィ', 'フェネクス', 'ストライクフリーダム', 'バルバトス'],
    correct: 'バンシィ'
  }, {
    question: '最終決戦仕様になったクシャトリヤの名前はどれか',
    answers: [ 'フルアーマー・クシャトリヤ', 'クシャトリヤ・スペシャル', 'クシャトリヤ・リペアード', 'ハイパー・クシャトリヤ'],
    correct: 'クシャトリヤ・リペアード'
  }, {
    question: '最終決戦仕様になったユニコーンガンダムの名前はどれか',
    answers: [ 'フルアーマー・ユニコーンガンダム', 'スペシャルユニコーンガンダム', 'ユニコーンガンダム・リペアード', 'ハイパー・ユニコーンガンダム'],
    correct: 'フルアーマー・ユニコーンガンダム'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.answer-list__btn');
const $returnMenu = $doc.getElementById('js-return');
const $comment = $doc.getElementById('js-comment');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

//正誤判定
const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

//スコア判定
const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';

  const $items = $doc.getElementById('js-items');
  $items.classList.add('none');

  const $return = $doc.getElementById('js-return');
  $return.classList.add('active');

  const $commentText = $doc.getElementById('js-comment');
  $commentText.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
