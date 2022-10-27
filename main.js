const buttons = document.querySelectorAll('.card_button--digit');
const submit = document.querySelector('.card_submit');
const initialCard = document.querySelector('.card_body');
const finalCard = document.querySelector('.card_submited');
const rating = document.querySelector('.rating');
let index;

buttons.forEach((button) =>{
    button.onclick = () => {
        removeSelection();
        button.classList.add('selected');
        index = button.value;
    };
});

removeSelection = () => {
    buttons.forEach((button) =>{
        button.classList.remove('selected');
    });
};


submit.onclick = () => {
    showresult();
};

showresult = () => {
    initialCard.classList.add('hidden');
    finalCard.classList.remove('hidden');
    rating.innerHTML = "You selected " +index+ " out of 5";
};
