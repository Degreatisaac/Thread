const thread = [
    'Our mumu don do, we need to take ourselves from lawlessness that abound in our land and stop putting our lives in danger.', 'Our unborn generation deserves to live right, let us make Nigeria a home for all', 'We need someone who will work with our diversity and bring to order every good thing that each of us can offer, and taking advantage of all that God has indepted in us.', 'We need a leader to say NO to curruption, Shedding of Bloods, Rappery, Kidnapping and other insurgencies.', 'We want to take our land back from clueless people, we belive a new Nigeria is possible'
];

const president = ['Atiku', 'Peter Obi', 'Tinubu', 'Sowore', 'Kwarkwasor'];

const reason = document.getElementById('reason');
const BackBtn = document.querySelector('.B-btn');
const NextBtn = document.querySelector('.N-btn');
const random = document.querySelector('.random');

currentThread = 0;

window.addEventListener('DOMContentLoaded', function () {
    showThread();
});


function showThread() {
    const show = thread[currentThread];
    reason.textContent = show;
}

NextBtn.addEventListener('click', function () {
    currentThread++;
    if (currentThread > thread.length - 1) {
        currentThread = 0;
    }
    showThread();
})

BackBtn.addEventListener('click', function () {
    currentThread--;
    if (currentThread < 0) {
        currentThread = thread.length -1;
    }
    showThread();
})


const who = 0;


random.addEventListener('click', function () {
   alert(president[3])
})