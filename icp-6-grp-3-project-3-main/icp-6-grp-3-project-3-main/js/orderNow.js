let addToCardUrlList = [];
let addToCardTitleList = [];
let addToCardPriceList = [];
let totalPrice = document.getElementById("total-price");

const addToCardBox = document.getElementById("addToCard-Box");

const addToCardUrlLS = localStorage.getItem("addToCardUrlList");
const addToCardTitleLS = localStorage.getItem("addToCardTitleList");
const addToCardPriceLS = localStorage.getItem("addToCardPriceList");

if (addToCardTitleLS) {
  addToCardUrlList = JSON.parse(addToCardUrlLS);
  addToCardTitleList = JSON.parse(addToCardTitleLS);
  addToCardPriceList = JSON.parse(addToCardPriceLS);
  loadList();
  changeTotal()
}

function addItem(url, titel, price) {
  addToCardUrlList.push(url);
  addToCardTitleList.push(titel)
  addToCardPriceList.push(price)

  localStorage.setItem("addToCardUrlList", JSON.stringify(addToCardUrlList));
  localStorage.setItem("addToCardTitleList", JSON.stringify(addToCardTitleList));
  localStorage.setItem("addToCardPriceList", JSON.stringify(addToCardPriceList));

  loadList();
  changeTotal()
}

function loadList() {
  addToCardBox.innerHTML = "";

  for (let i = 0; i < addToCardTitleList.length; i++) {
    let ur = addToCardUrlList[i];
    let tit = addToCardTitleList[i];
    let prc = addToCardPriceList[i];
    addToCardBox.innerHTML = addToCardBox.innerHTML + `<div class="border-bottom border-dark-subtle py-2 my-2 d-flex position-relative">
    <img src="${ur}" class="w-25 rounded">
    <div class="ms-3">
      <p class="mb-1">${tit}</p>
      <p>Rs. ${prc}/-</p>
      <span role="button" class="position-absolute top-0 end-0 ha fs-4" onclick="removeItem(${i})">x</span>
    </div>
  </div>`;
  
  }
}
function removeItem(index) {
  addToCardUrlList.splice(index, 1);
  addToCardTitleList.splice(index, 1);
  addToCardPriceList.splice(index, 1);

  localStorage.setItem("addToCardUrlList", JSON.stringify(addToCardUrlList));
  localStorage.setItem("addToCardTitleList", JSON.stringify(addToCardTitleList));
  localStorage.setItem("addToCardPriceList", JSON.stringify(addToCardPriceList));

  loadList();
  changeTotal()
}

function changeTotal(){
  totalPrice.innerText = 0;
  for (let i = 0; i < addToCardTitleList.length; i++) {
    let prc = addToCardPriceList[i];
    totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt(prc);
  }
}