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

    <div class="aside">aside placeholder</div>


    <div class="post-item">
      <figure class="post-image">
        <img src="./assets/images/alex-lvrs-unsplash.jpg">
      </figure>
      <div class="post-wrapper">
        <div class="creator-info">
          <a href="#" class="user-image">
          <svg fill="" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>
          </a>

          <p class="user-name">Malik Robinson</p>

          <span class="seperate">🥯</span>

          <p class="time-posted">10 minuets ago</p>

        </div>
        <div class="post-interactions">
          <button class="like-button">
            <svg fill="" stroke="" width="50px" height="50px" viewBox="0 0 15 15" version="1.1" id="heart" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"/>
            </svg>
            <span class="sr-only">Like</span>
          </button>

          <button class="comment-button">
            <svg stroke="" width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="icomoon-ignore">
            </g>
            <path d="M26.664 4.82h-21.328c-1.178 0-2.132 0.955-2.132 2.133v13.868c0 1.178 0.955 2.133 2.132 2.133h14.968l4.226 4.226v-4.226h2.134c1.178 0 2.133-0.955 2.133-2.133v-13.868c-0-1.178-0.955-2.133-2.133-2.133zM27.73 20.821c0 0.588-0.479 1.066-1.066 1.066h-3.2v2.718l-2.718-2.718h-15.41c-0.588 0-1.066-0.478-1.066-1.066v-13.868c0-0.588 0.479-1.066 1.066-1.066h21.328c0.588 0 1.066 0.478 1.066 1.066v13.868z" fill="#000000">
            </path>
            <path d="M16 12.824c-0.589 0-1.066 0.478-1.066 1.066s0.477 1.066 1.066 1.066 1.066-0.477 1.066-1.066c0-0.588-0.477-1.066-1.066-1.066z" fill="#000000">
            </path>
            <path d="M20.265 12.824c-0.589 0-1.066 0.478-1.066 1.066s0.477 1.066 1.066 1.066 1.066-0.477 1.066-1.066c0-0.588-0.477-1.066-1.066-1.066z" fill="#000000">
            </path>
            <path d="M11.835 12.824c-0.589 0-1.066 0.478-1.066 1.066s0.477 1.066 1.066 1.066 1.066-0.477 1.066-1.066c0-0.588-0.477-1.066-1.066-1.066z" fill="#000000">
            </path>
            </svg>
            <span class="sr-only">Comment</span>
          </button>

          <button class="share-button">
            <svg fill="" width="50px" height="50px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z"/></svg>
            <span class="sr-only">Share</span>
          </button>
        </div>
      </div>
    </div>
  </main>
  `;
};


// Footer removed for now to style main
// <footer class="footer" id="footer">
  //   <h3>Footer test</h3>
  //   <button class="count-button" id="count-button">Click to count</button>
  //   <button class="remove-button" id="remove-button">Click to remove 1 count</button>
  // </footer>


document.addEventListener('DOMContentLoaded', function() {
  console.log("The DOM is fully loaded");
  GetHtmlStructure();
  CountButtonClick();
  RemoveButtonCountClick();
});