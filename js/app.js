// JavaScript for tab switching functionality
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and content
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    tab.classList.add('active');
    document.querySelector(tab.getAttribute('data-target')).classList.add('active');
  });
});

const oWords = ["ffice", "pératrice de", "rganisatrice", "ptimisatrice de", "racle", "rchestratrice de", "mnisciente", "ptimiste", "pportuniste", "rganisatrice de"];
const mWords = ["anager", "iracles", "agistral", "éthodes", "ultitâche", "aîtrise", "odératrice", "otivante", "aline", "erveilles"];
let currentIndexO = 0;
let currentIndexM = 0;
const dynamicWordSpanO = document.getElementById('dynamic-word-o');
const dynamicWordSpanM = document.getElementById('dynamic-word-m');
const dynamicContainer = document.querySelectorAll('.dynamic-container');

function changeWord() {
  // Set the new word
  dynamicWordSpanO.textContent = oWords[currentIndexO];
  dynamicWordSpanM.textContent = mWords[currentIndexM];

  // Show the word
  dynamicContainer.forEach(container => container.classList.add('show'));

  // After 5 seconds, hide the word
  setTimeout(() => {
    dynamicContainer.forEach(container => container.classList.remove('show'));

    // Change to the next word in the array after hiding
    currentIndexO = (currentIndexO + 1) % oWords.length;
    currentIndexM = (currentIndexM + 1) % mWords.length;
  }, 5000);
}

// Initial call to display the first word
changeWord();

// Set interval to change the word every 6 seconds (5 seconds display, 1 second transition)
setInterval(changeWord, 6000);
