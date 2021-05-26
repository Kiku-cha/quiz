//問題・回答・正解
const quiz = [
  {
    question: '「私のたった一つの望み、可能性の獣、希望の象徴・・・父さん、母さんごめん、俺は・・・行くよ！」',
    answers: [ 'アムロ・レイ', 'カミーユ・ビダン', 'バナージ・リンクス', 'リディ・マーセナス'],
    correct: 'バナージ・リンクス'
  }, {
    question: '「受け止めなさい、バナージ」',
    answers: [ 'ミネバ・ザビ', 'フォウ・ムラサメ', 'セイラ・マス', 'アイナ・サハリン'],
    correct: 'ミネバ・ザビ'
  }, {
    question: '「可能性に殺されるぞ！そんなもの、捨てちまえ！」',
    answers: [ 'クワトロ・バジーナ', 'ギニアス・サハリン', 'リディ・マーセナス', 'パプテマス・シロッコ'],
    correct: 'リディ・マーセナス'
  }, {
    question: '「チャンスは必ずくる、その時は迷わずガンダムに乗れ。」',
    answers: [ 'プルツー', 'マリーダ・クルス', 'ハマーン・カーン', 'ロザミア・バダム'],
    correct: 'マリーダ・クルス'
  }, {
    question: '「一緒に宇宙へ帰るんだ！ 俺と来い！ 俺をひとりにするな！」',
    answers: [ 'スベロア・ジンネマン', 'ブライト・ノア', 'ヘンケン・ベッケナー', 'カイ・シデン'],
    correct: 'スベロア・ジンネマン'
  }, {
    question: '「過ちを気に病むことはない。ただ認めて、次の糧にすればいい。それが、大人の特権だ。」',
    answers: [ 'ギレン・ザビ', 'マーサ・ビスト・カーバイン', 'ゾルタン・アッカネン', 'フル・フロンタル'],
    correct: 'フル・フロンタル'
  }, {
    question: '「絶望を退ける勇気を持て。君がガンダムのパイロット・・・ニュータイプであるなら」',
    answers: [ 'ブライト・ノア', 'スベロア・ジンネマン', 'アムロ・レイ', 'ハサウェイ・ノア'],
    correct: 'ブライト・ノア'
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
