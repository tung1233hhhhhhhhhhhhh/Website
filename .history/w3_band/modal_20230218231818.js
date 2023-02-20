const modalContainer = document.querySelector(".js-modal-container");
const buyBtns = document.querySelectorAll(".js-buytickets");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalclose1 = document.querySelector(".js-modal-close1");

// hàm hiển thị modal {thêm class open vào modal}
function showbuyTickets() {
  modal.classList.add("open");
}
// lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showbuyTickets);
}
// hàm ẩn modal{gỡ bỏ class open}
function CloseTickets() {
  modal.classList.remove("open");
}
//hàm đóng modal
modalClose.addEventListener("click", CloseTickets);
modal.addEventListener("click", CloseTickets);
modalclose1.addEventListener("click", CloseTickets);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
