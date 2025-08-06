const startBtn = document.getElementById("Start");
const resetBtn = document.getElementById("Reset");
const slotEmojis = ["🍒", "🍋", "🍊", "🍉", "🍇", "🔔", "⭐", "💎", "🍀", "7️⃣"];
const emoji1Txt = document.getElementById("emoji1");
const emoji2Txt = document.getElementById("emoji2");
const emoji3Txt = document.getElementById("emoji3");
const result = document.getElementById("resultText");
let sumaBet = document.getElementById("betAmount");
const placeBet = document.getElementById("placeBet");
const betIs = document.getElementById("betIs");

const moneyShow = document.getElementById("money");

let money = 100;
moneyShow.innerText = `Money: $${money.toFixed(2)}
`;

let emoji;
let bet = Math.max(0.01, parseFloat(sumaBet.value)); /// GPT
betIs.innerText = `Bet is: $${bet.toFixed(2)}`;

startBtn.addEventListener("click", function () {
  if (money - bet >= 0) {
    console.log(bet);
    money -= bet;
    moneyShow.innerText = `Money: $${money.toFixed(2)}
`;
    emoji = new Emojis();
    emoji1Txt.innerText = emoji.emoji1;
    emoji2Txt.innerText = emoji.emoji2;
    emoji3Txt.innerText = emoji.emoji3;
    emoji.egale();
  } else {
    alert("Set a smaller Bet or Reset");
  }
});

resetBtn.addEventListener("click", function () {
  emoji = undefined;
  console.log(emoji);
  emoji1Txt.innerText = "🎰";
  emoji2Txt.innerText = "🎰";
  emoji3Txt.innerText = "🎰";
  result.innerText = "Place your bet and spin!";
  result.style = "";
  betAmount.value = 1;
  bet = 1;
  betIs.innerText = `Bet is: $${bet.toFixed(2)}`;
  money = 100;
  moneyShow.innerText = `Money: $${money.toFixed(2)}
`;
});

placeBet.addEventListener("click", function () {
  const betAmount = parseFloat(document.getElementById("betAmount").value); /// GPT
  if (betAmount >= 0.01) {
    /// GPT
    bet = betAmount; /// GPT
    console.log(bet); /// GPT
    betIs.innerText = `Bet is: $${bet.toFixed(2)}`; /// GPT
  } else {
    /// GPT
    alert("Minimum bet amount is $0.01"); /// GPT
    document.getElementById("betAmount").value = "0.01"; /// GPT
    bet = 0.01; /// GPT
    betIs.innerText = `Bet is: $${bet.toFixed(2)}`; /// GPT
  } /// GPT
});

class Emojis {
  constructor() {
    this.emoji1 = slotEmojis[Math.floor(Math.random() * slotEmojis.length)];
    this.emoji2 = slotEmojis[Math.floor(Math.random() * slotEmojis.length)];
    this.emoji3 = slotEmojis[Math.floor(Math.random() * slotEmojis.length)];
  }

  egale() {
    if (this.emoji1 === this.emoji2 && this.emoji2 === this.emoji3) {
      console.log("JACKPOT");
      result.innerText = "JACKPOT";
      result.style.color = "green";
      money += bet * 10;
      result.style.fontSize = "2rem";
      moneyShow.innerText = `Money: $${money.toFixed(2)}
`;
    } else if (
      this.emoji1 === this.emoji2 ||
      this.emoji1 === this.emoji3 ||
      this.emoji2 === this.emoji3
    ) {
      console.log("SMALL JACKPOT");
      result.innerText = "SMALL JACKPOT";
      result.style.fontSize = "2rem";
      result.style.color = "orange";
      money += bet * 1.5;

      moneyShow.innerText = `Money: $${money.toFixed(2)}
`;
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "UNLUCKY";
      result.style.color = "red";
    }
  }
}
