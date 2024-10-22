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

const words = [
  ["Office", "Manager"],
  ["Organisatrice de", "Merveilles"],
  ["Opératrice de", "Miracles"],
  ["Orchestratrice", "Multitâche"],
  ["Organisée et", "Maline"],
  ["Omnisciente", "Modératrice"],
  ["Obstinée et", "Motivée"],
  ["Optimiste", "Motivante"],
  ["Originale et", "Malicieuse"],
  ["Officielle", "Maîtresse de cérémonie"],
  ["Ostréiculture et", "Musique"],
  ["Oeil-de-lynx", "Méticuleuse"],
  ["Organisée et", "Modeste"],
  ["Oeuvres", "Mémorables"]
]
let currentIndex = 0;
const dynamicWordSpanO = document.getElementById('dynamic-word-o');
const dynamicWordSpanM = document.getElementById('dynamic-word-m');
const dynamicContainer = document.querySelectorAll('.dynamic-container');

function changeWord() {
  // Set the new word
  dynamicWordSpanO.textContent = words[currentIndex][0].substring(1);
  dynamicWordSpanM.textContent = words[currentIndex][1].substring(1);

  // Show the word
  dynamicContainer.forEach(container => container.classList.add('show'));

  // After 5 seconds, hide the word
  setTimeout(() => {
    dynamicContainer.forEach(container => container.classList.remove('show'));

    // Change to the next word in the array after hiding
    currentIndex = (currentIndex + 1) % words.length;
  }, 5000);
}

// Initial call to display the first word
changeWord();

// Set interval to change the word every 6 seconds (5 seconds display, 1 second transition)
setInterval(changeWord, 6000);
