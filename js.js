// Clasa asta trebuie mutata sus, pt ca nu poti sa o folosesti inainte sa fie definita
// Eu mereu imi definsec clasele inainte de tot
class Result {
  constructor() {
    this.result = document.getElementById("resultText");
  }

  updateDisplay(type) {
    switch (type) {
      case "JACKPOT":
        this.result.style.color = "green";
        break;
      case "SMALL JACKPOT":
        this.result.style.color = "orange";
        break;
      case "UNLUCKY":
        this.result.style.color = "red";
        break;
      default:
        console.log("Valoare invalida:", type);
        return;
    }

    this.result.innerText = type;
    this.result.style.fontSize = "2rem";
  }

  reset() {
    this.result.innerText = "Place your bet and spin!";
    this.result.style = "";
  }
}

// Eu as verifica ceva de genul asta de obicei, dar in proiectul asta, nu prea conteaza
const startBtn = document.getElementById("Start");
if (startBtn === null) {
  throw new Error("Nu a fost gasit butonul");
}

const resetBtn = document.getElementById("Reset");
const slotEmojis = ["🍒", "🍋", "🍊", "🍉", "🍇", "🔔", "⭐", "💎", "🍀", "7️⃣"];
// const emoji1Txt = document.getElementById("emoji1");
// const emoji2Txt = document.getElementById("emoji2");
// const emoji3Txt = document.getElementById("emoji3");
// const result = document.getElementById("resultText");
const result = new Result(); // Eu as folosi o clasa
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
    // emoji1Txt.innerText = emoji.emoji1;
    // emoji2Txt.innerText = emoji.emoji2;
    // emoji3Txt.innerText = emoji.emoji3;
    emoji.egale();
  } else {
    alert("Set a smaller Bet or Reset");
  }
});

resetBtn.addEventListener("click", function () {
  // emoji = undefined;
  // console.log(emoji);
  emoji.reset();
  // emoji1Txt.innerText = "🎰";
  // emoji2Txt.innerText = "🎰";
  // emoji3Txt.innerText = "🎰";
  result.reset();
  // result.innerText = "Place your bet and spin!";
  // result.style = "";
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

// Daca tot folosesti clase, poti sa modifici si elementele din DOM
class Emojis {
  constructor() {
    // Eu as folosi 2 liste (una care contine elementele din DOM, si cealalta care contine emojiul)
    // Dar nu prea conteaza in cazul asta si mi-e lene sa rescriu
    this.emoji1Txt = document.getElementById("emoji1");
    this.emoji2Txt = document.getElementById("emoji2");
    this.emoji3Txt = document.getElementById("emoji3");

    this.emoji1 = slotEmojis[Math.floor(Math.random() * slotEmojis.length)];
    this.emoji2 = slotEmojis[Math.floor(Math.random() * slotEmojis.length)];
    this.emoji3 = slotEmojis[Math.floor(Math.random() * slotEmojis.length)];

    this.updateDisplay();
  }

  reset() {
    this.emoji1Txt.innerText = "🎰";
    this.emoji2Txt.innerText = "🎰";
    this.emoji3Txt.innerText = "🎰";

    // Eu de obicei folosesc null in loc de undefined (daca se poate) dar asta e doar o preferinta
    this.emoji1 = undefined;
    this.emoji2 = undefined;
    this.emoji3 = undefined;
  }

  updateDisplay() {
    this.emoji1Txt.innerText = this.emoji1;
    this.emoji2Txt.innerText = this.emoji2;
    this.emoji3Txt.innerText = this.emoji3;
  }

  egale() {
    if (this.emoji1 === this.emoji2 && this.emoji2 === this.emoji3) {
      console.log("JACKPOT");
      result.updateDisplay("JACKPOT");
      // result.innerText = "JACKPOT";
      // result.style.color = "green";
      // result.style.fontSize = "2rem";
      money += bet * 10;
      moneyShow.innerText = `Money: $${money.toFixed(2)}
`;
    } else if (
      this.emoji1 === this.emoji2 ||
      this.emoji1 === this.emoji3 ||
      this.emoji2 === this.emoji3
    ) {
      console.log("SMALL JACKPOT");
      result.updateDisplay("SMALL JACKPOT");
      // result.innerText = "SMALL JACKPOT";
      // result.style.fontSize = "2rem";
      // result.style.color = "orange";
      money += bet * 1.5;

      moneyShow.innerText = `Money: $${money.toFixed(2)}
`;
    } else {
      result.updateDisplay("UNLUCKY");
      // result.style.fontSize = "2rem";
      // result.innerText = "UNLUCKY";
      // result.style.color = "red";
    }
    // Daca in toate cazurile, fontSize devine mai mare, poti sa-l pui direct la final
    // result.style.fontSize = "2rem";
  }
}
