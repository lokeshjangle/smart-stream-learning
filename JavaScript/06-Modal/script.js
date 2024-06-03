'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
    console.log("Button clicked ");
    modal.classList.remove('hidden');  //classList contain all class which will mention in html document
    overlay.classList.remove('hidden');
};


const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++) {
    // console.log(btnOpenModal[i].textContent);
    btnOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === 'Escape' && !modal.classList.contains("hidden"))
        closeModal();

})