const portfolio = [
  {
    btn: document.querySelector("#three"),
    month: 3,
    apr: 50,
  },
  {
    btn: document.querySelector("#six"),
    month: 6,
    apr: 60,
  },
  {
    btn: document.querySelector("#twelve"),
    month: 12,
    apr: 70,
  },
  {
    btn: document.querySelector("#twentyfour"),
    month: 24,
    apr: 80,
  },
];

const apr = document.querySelector("#apr");
const month = document.querySelector("#cost");
const money = document.querySelector("#money");
const total = document.getElementById("total");

let cash = 10000;

for (let i = 0; i < portfolio.length; i++) {
  portfolio[i].btn.onclick = function () {
    let monthly = 100 * (portfolio[i].apr / 12);
    total.innerText = "$" + (cash + Math.round(portfolio[i].month * monthly));
    cost.innerText = "$" + Math.round(100 * (portfolio[i].apr / 12));
    apr.innerText = portfolio[i].apr;
    document.getElementsByID("slider")[0].style.display = "block";
    //document.getElementById("MYDIV").style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
  };
}

const header = document.getElementById("myDIV");
const btns = header.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
