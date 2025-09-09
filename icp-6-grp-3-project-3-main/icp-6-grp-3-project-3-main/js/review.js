let reviewListName = [];
let reviewListMsg = [];

const reviewBox = document.getElementById("review-Box");

const reviewNameItemsLS = localStorage.getItem("reviewListName");
const reviewMsgItemsLS = localStorage.getItem("reviewListMsg");

if(reviewNameItemsLS){
    reviewListName = JSON.parse(reviewNameItemsLS);
    reviewListMsg = JSON.parse(reviewMsgItemsLS);
    loadList();
}

function addReview(){
    const inputName = document.getElementById("input-Name");
    const name = inputName.value;
    const inputMsg = document.getElementById("input-Msg");
    const msg = inputMsg.value;

    if (name) {
        reviewListName.push(name);
        reviewListMsg.push(msg);

        localStorage.setItem("reviewListName", JSON.stringify(reviewListName));
        localStorage.setItem("reviewListMsg", JSON.stringify(reviewListMsg));

        inputName.value = "";
        inputMsg.value = "";
        loadList();
    }
    else {
        alert("Please enter name");
    }
}

function loadList() {
    reviewBox.innerHTML = "";

    for (let i = 0; i < reviewListName.length; i++) {
        let name = reviewListName[i];
        let msg = reviewListMsg[i];
        reviewBox.innerHTML = reviewBox.innerHTML + `<div class="card p-3 col-md-3 col-xs-12 col-sm-4 shadow m-4">
        <h4 class="text-center mt-3">${name}</h4>
        <img src="../images/review-img.png" class="wdt bag p-2 d-block m-auto rounded-circle my-3">
        <p class="mt-1 m-2 text-center">${msg}</p>
        <p role="button" class="link-danger mt-4 mb-0 text-center" onclick="removeReview(${i})">Remove</p>
    </div>`;
    }
}
function removeReview(index) {
    reviewListName.splice(index, 1);
    reviewListMsg.splice(index, 1);

    localStorage.setItem("reviewListName", JSON.stringify(reviewListName));
    localStorage.setItem("reviewListMsg", JSON.stringify(reviewListMsg));

    loadList();
}
function cancelReview(){
    const inputName = document.getElementById("input-Name");
    const name = inputName.value;
    const inputMsg = document.getElementById("input-Msg");
    const msg = inputMsg.value;

    inputName.value = "";
    inputMsg.value = "";
}