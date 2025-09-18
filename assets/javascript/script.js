// Global variables
let count = 0;

function CountButtonClick() {
  const countButton = document.getElementById('count-button');

  countButton.addEventListener('click', () => {
    count++;
    countButton.textContent = count;
  });
};

function RemoveButtonCountClick() {
  const removecountButton = document.getElementById('remove-button');
  const countButton = document.getElementById('count-button');

  removecountButton.addEventListener('click', () => {
    // Ensure count can not go below 0
    if (count != 0){
    count--;
    countButton.textContent = count;
    };
  });
};

function GetHtmlStructure() {

  const bodyTag = document.querySelector('body');

  bodyTag.innerHTML = `
  <header class="header" id="header">
    <div class="header-logo">
      <img class="backtree" src="./assets/images/trees.gif">
      <img class="frontcupcake" src="./assets/images/cupcake-logo.gif">
      <span class="logo-name-left">Paste</span>
      <span class="logo-name-right">Tree</span>
    </div>
    <div class="user-account">
      <p>A Pinterest Inspired website</p>
    </div>
  </header>

  <main class="main" id="main">
    <h2>Section test</h2>

    <button class="count-button" id="count-button">Click to count</button>
    <button class="remove-button" id="remove-button">Click to remove 1 count</button>
  </main>
  
  <footer class="footer" id="footer">
    <h3>Footer test</h3>
  </footer>
  `;
};


document.addEventListener('DOMContentLoaded', function() {
  console.log("The DOM is fully loaded");
  GetHtmlStructure();
  CountButtonClick();
  RemoveButtonCountClick();
});