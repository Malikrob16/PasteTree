// Global variables
let count = 0;

// User favorited post
let favoritePosts = JSON.parse(localStorage.getItem("favorites")) || [];
console.log(favoritePosts);

const postImages = [
  { src: "./assets/images/optimized/optimized-alex-lvrs-unsplash.jpg", alt: "Pumpkin pie on display board"},
  { src: "./assets/images/optimized/optimized-alison-pang-unsplash.jpg", alt: "Eight small cakes with strawberries on top"},
  { src: "./assets/images/optimized/optimized-anastasiya-badun-unsplash.jpg", alt: "six containers of assorted pastries"},
  { src: "./assets/images/optimized/optimized-arsham-baseri-unsplash.jpg", alt: "Baker filling cream puffs"},
  { src: "./assets/images/optimized/optimized-ben-tofan-unsplash.jpg", alt: "Chocolate brownies in a glass display"},
  { src: "./assets/images/optimized/optimized-brother-yoon-unsplash.jpg", alt: "Side of dessert studio displaying name BAKEAT"},
  { src: "./assets/images/optimized/optimized-busra-salkim-unsplash.jpg", alt: "Chocolate covered puff cakes with a strawberry on top"},
  { src: "./assets/images/optimized/optimized-danist-soh-unsplash.jpg", alt: "Front of cafe named Smile Dessert"},
  { src: "./assets/images/optimized/optimized-debby-hudson-unsplash.jpg", alt: "An eaten blueberry pir with one piece remaining"},
  { src: "./assets/images/optimized/optimized-heather-barnes-unsplash.jpg", alt: "Assorted colored macarons stacked"},
  { src: "./assets/images/optimized/optimized-holly-stratton-unsplash.jpg", alt: "A baker filling green macarons"},
  { src: "./assets/images/optimized/optimized-jack-plant-unsplash.jpg", alt: "A glass case inside of a shop displaying assorted desserts"},
  { src: "./assets/images/optimized/optimized-jr-r-unsplash.jpg", alt: "A caramel chocolate cupcake with nuts on it"},
  { src: "./assets/images/optimized/optimized-khanh-do-unsplash.jpg", alt: "A glass case with croissants inside"},
  { src: "./assets/images/optimized/optimized-metin-ozer-unsplash.jpg", alt: "Front of a building named Doughnut Time"},
  { src: "./assets/images/optimized/optimized-mink-mingle-unsplash.jpg", alt: "Assorted puff pastries"},
  { src: "./assets/images/optimized/optimized-mustafa-turhan-unsplash.jpg", alt: "Front of a building named Passion Chocolat"},
  { src: "./assets/images/optimized/optimized-scott-eckersley-unsplash.jpg", alt: "Three pastries"},
  { src: "./assets/images/optimized/optimized-serghei-savchiuc-unsplash.jpg", alt: "A cup of tea beside a pastry"},
  { src: "./assets/images/optimized/optimized-serghei-savchiuc2-unsplash.jpg", alt: "A cup of tea beside multiple pastries"},
  { src: "./assets/images/optimized/optimized-shayna-douglas-unsplash.jpg", alt: "Chocolate chip cookies"},
  { src: "./assets/images/optimized/optimized-siyi-unsplash.jpg", alt: "Multiple glass displays with assorted pastries"},
  { src: "./assets/images/optimized/optimized-siyi-w-unsplash.jpg", alt: "Glass display with multiple croissants"},
  { src: "./assets/images/optimized/optimized-vasylyna-kucherepa-unsplash.jpg", alt: "Lady fingers dessert displayed on tray"},
  { src: "./assets/images/optimized/optimized-vita-marija-murenaite-unsplash.jpg", alt: "Unbaked pastries on flowered surface"}
];

const postUser = [
  "Malik Robinson",
  "Angela Holden",
  "Monique Robinson",
  "Rahul Shrestha",
  "Emilio Edeza",
  "Debby Hudson",
  "Holly Stratton",
  "Alex lvrs",
  "Arsham Baseri",
  "Dabust Soh"
];

function randomTime() {
  return Math.floor(Math.random() * 60) + 1;
};

function randomName() {
  let randomindex = Math.floor(Math.random() * postUser.length);
  let randomUser = postUser[randomindex];

  return randomUser;
}

function createPost(imageObj, userName, randomtime, id, sizeClass= "") {
  return `
    <div class="post-item ${sizeClass}" data-id=${id}>
      <figure class="post-image">
        <img loading="lazy" src="${imageObj.src}" alt="${imageObj.alt}">
        <button aria-label="Favorite this post" class="favorite-icon" id="favorite-button"><svg aria-hidden="true" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
          <polygon class="star" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="32,47 12,62 20,38 2,24 24,24 32,1 40,24 
            62,24 44,38 52,62 "/>
          </svg>
        </button>
      </figure>
      <div class="post-wrapper">
        <div class="creator-info">
          <p class="user-name"><a href="#" class="user-image">
            <svg aria-hidden="true" fill="" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg> ${userName}
          </a></p>
          <span class="seperate">🧁</span>
          <p class="time-posted">${randomtime} minuets ago</p>
        </div>
        <div class="post-interactions">
            <button aria-label="Like this post" class="like-button" id="like-button">
              <svg aria-hidden="true" fill="" width="50px" height="50px" viewBox="0 0 15 15" version="1.1" id="heart" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"/>
              </svg>
              <div class="number-likes" id="number-likes" >0</div>
            </button>

            <button aria-label="Comment on this post" class="comment-button" id="comment-button">
              <svg aria-hidden="true" fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                width="50px" height="50px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
              <g>
                <path d="M88.466,16.936c-0.172-1.703-1.592-3.036-3.34-3.036H14.781v0.009c-1.705,0.047-3.079,1.355-3.247,3.027H11.5v56.342h0.068
                  c0.305,1.512,1.622,2.65,3.214,2.694v0.009h11.564v6.744c0,1.864,1.51,3.374,3.374,3.374c1.165,0,2.192-0.591,2.798-1.49
                  l8.629-8.629h43.979c1.634,0,2.995-1.161,3.306-2.703H88.5V16.936H88.466z"/>
              </g>
              </svg>
              <div class="number-comments" id="number-comments" >0</div>
            </button>

            <button aria-label="Share this post" class="share-button" id="share-button">
              <svg aria-hidden="true" width="50px" height="50px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function addPostEventListeners() {
  document.querySelectorAll(".post-item").forEach(post => {
    const likeButton = post.querySelector(".like-button");
    const commentButton = post.querySelector(".comment-button");
    const shareButton = post.querySelector(".share-button");
    const favoriteButton = post.querySelector(".favorite-icon");

    const likeCount = post.querySelector(".number-likes");
    const commentCount = post.querySelector(".number-comments");

    // Favorite Button
    favoriteButton.addEventListener("click", () => {
      favoriteButton.classList.toggle('favorited');
      const postId = post.dataset.id; // grab post ID

      if (favoriteButton.classList.contains('favorited')) {
        console.log("Post has been favorited!");
        favoriteButton.querySelector("svg .star").style.fill = 'var(--raspberry)';

        if (!favoritePosts.includes(postId)) {
          favoritePosts.push(postId);
          localStorage.setItem("favorites", JSON.stringify(favoritePosts)); // optional save
          console.log(favoritePosts); // Display test of stored post indexes
        }
      } else {
        console.log("Post favorite has been removed");
        favoriteButton.querySelector("svg .star").style.fill = "var(--darkbrown)";

        favoritePosts = favoritePosts.filter(id => id !== postId);
        localStorage.setItem("favorites", JSON.stringify(favoritePosts)); // update save
        console.log(favoritePosts); // Display test of stored post indexes
      }
    });

    // Like Button
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle('liked');

      let count = parseInt(likeCount.textContent);

      if(likeButton.classList.contains('liked')) {
        console.log("Post has been liked");
        likeButton.querySelector("svg").style.fill = 'var(--raspberry)';
        count += 1;

      } else {
        console.log("Post like has been removed");
        likeButton.querySelector("svg").style.fill = 'var(--darkbrown)';
        count -= 1;
      }
      
      likeCount.textContent = count;
    });

    // Comment button
    commentButton.addEventListener("click", () => {
      let count = parseInt(commentCount.textContent);
      commentCount.textContent = count + 1;
      alert("Open comments modal here!");
    });

    // Share button
    shareButton.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert("Post link copied to clipboard!"))
        .catch(() => alert("Failed to copy link"));
    });
  });
}

function resizeGridItem(item) {
  const grid = document.getElementById("main");
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));
  const contentHeight = item.querySelector('.post-wrapper').offsetHeight + item.querySelector('.post-image').offsetHeight;
  const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = `span ${rowSpan}`;
}

function resizeAllGridItems() {
  document.querySelectorAll(".post-item").forEach(item => resizeGridItem(item));
}

window.addEventListener("resize", resizeAllGridItems); // 🔥 Recalculate on layout shift

function renderPosts() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  postImages.forEach((img, index) => {
    // Get username to display on post. repeat if fewer users than images
    const userName = postUser[index % postUser.length];
    const time = randomTime();

    // Alternate post sizes
    let sizeClass = "";

    // Build post
    main.innerHTML += createPost(img, userName, time, index, sizeClass);

    const postItem = main.lastElementChild;
    const image = postItem.querySelector("img");
    const favoriteButton = postItem.querySelector(".favorite-icon");
    const star = favoriteButton.querySelector("svg .star");

    if (favoritePosts.includes(String(index))) {
      favoriteButton.classList.add("favorited");
      star.style.fill = "var(--raspberry)";
    } else {
      star.style.fill = "var(--darkbrown)"
    }

    image.onload = () => {
    resizeGridItem(postItem);
    };

  });

  addPostEventListeners();

  // Ensure images resize properly
  const allItems = document.querySelectorAll(".post-item");
  allItems.forEach(item => {
    const image = item.querySelector("img");
    image.onload = () => resizeGridItem(item);
  });
};

function renderFavorites() {
  const main = document.getElementById("main");
  main.innerHTML = ""; // clear scroll

  favoritePosts.forEach(favId => {
    const img = postImages[favId];
    const userName = postUser[favId % postUser.length];
    const time = randomTime();
    main.innerHTML += createPost(img, userName, time, favId);
  });

  addPostEventListeners();
};

function GetHtmlStructure(randomname) {

  const bodyTag = document.querySelector('body');

  bodyTag.innerHTML = `
  <header class="header" id="header">
    <div class="header-logo">
    <div class="cupcake-logo"><img src="./assets/images/cupcake-logo.gif" alt="cupcake logo gif" style="width:50px;height:50px;"></div>
      <div class="site-name">
        <h1>
          <span class="logo-name-left">Paste</span>
          <span class="logo-name-right">Tree</span>
        </h1>
      </div>
    </div>
  </header>

  <div aria-label="User Profile" class="user-account">
    <details class="user-wrapper" id="user-details">
      <summary>
        <div class="user-profile" aria-label="User Profile details" ><img src="./assets/images/optimized/optimized-profile-image.jpg" alt="User Avatar" style="border-radius:50%; width:50px; height:75px;"></div>
        <div class="user-name">${randomname}</div>
      </summary>
      <div class="user-details">
        <p><span>Currently</span></p>
        <div class="user-name">${randomname}</div>
        <div class="type-account"><span>Personal</span></div>
        <div class="user-email"><span>fakeEmail1@gmail.com</span></div>
        <button aria-label="Go to user profile" class="details-button">Profile</button>
        <button aria-label="Show Favorited post" class="details-button">Favorites</button>
        <button aria-label="Log Out of account" class="details-button">Log Out</button>
      </div>
    </details>
  </div>

  <aside class="aside">
    <nav aria-label="Main" class="aside-container">
      <ul>
        <li class="aside-nav-item" data-label="Home" ><a href="index.html"><svg aria-hidden="true" fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z"/></svg><span>Home</span></a></li>

        <li class="aside-nav-item" data-label="Explore" ><a href="explore.html"><svg aria-hidden="true" fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M17.9842695,7.39078625 C18.1985588,6.64477525 17.4973604,5.9435768 16.7513494,6.1578661 L16.6494246,6.19284365 L9.57835679,9.02127078 L9.47282273,9.07079854 C9.30957453,9.15937167 9.17428758,9.29167162 9.08209683,9.45256344 L9.02127078,9.57835679 L6.19284365,16.6494246 L6.1578661,16.7513494 C5.9435768,17.4973604 6.64477525,18.1985588 7.39078625,17.9842695 L7.49271102,17.949292 L14.5637788,15.1208648 L14.6693129,15.0713371 C14.8325611,14.982764 14.967848,14.850464 15.0600388,14.6895722 L15.1208648,14.5637788 L17.949292,7.49271102 L17.9842695,7.39078625 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z"/>
        </svg><span>Explore</span></a></li>

        <li class="aside-nav-item" data-label="Create" ><a href="#"><svg aria-hidden="true" width="50px" height="50px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><style>
        .cls-1 {
          fill: ;
          fill-rule: evenodd;
        }
        </style></defs><path class="cls-1" d="M1080,270a30,30,0,1,1,30-30A30,30,0,0,1,1080,270Zm14-34h-10V226a4,4,0,0,0-8,0v10h-10a4,4,0,0,0,0,8h10v10a4,4,0,0,0,8,0V244h10A4,4,0,0,0,1094,236Z" id="add" transform="translate(-1050 -210)"/></svg><span>Create</span></a></li>

        <li class="aside-nav-item" data-label="Updates" ><a href="#"><svg aria-hidden="true" fill="red" width="50px" height="50px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" fill="none" width="20" height="20"/>
        <g>
        <path d="M10 18c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zm4-8.2V7.5c0-1.8-1.2-3.4-3-3.9.1-.2.1-.4.2-.5-.1-.6-.6-1.1-1.2-1.1s-1.1.5-1.1 1.1c0 .2.1.4.2.5-1.8.4-3 2-3 3.9v2.2c-.1 1.2-.9 2.3-2 2.8V15h12v-2.5c-1.2-.4-2-1.5-2.1-2.7z"/>
        </g>
        </svg><span>Updates</span></a></li>

        <li class="aside-nav-item" data-label="Messages" ><a href="#"><svg aria-hidden="true" fill=""
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          width="50px"
          height="50px"
          viewBox="0 0 448 448"
          id="svg2"
          version="1.1"
          inkscape:version="0.91 r13725"
          sodipodi:docname="comment-discussion.svg">
          <title
            id="title3349">comment-discussion</title>
          <defs
            id="defs4" />
          <sodipodi:namedview
            id="base"
            pagecolor="#ffffff"
            bordercolor="#666666"
            borderopacity="1.0"
            inkscape:pageopacity="0.0"
            inkscape:pageshadow="2"
            inkscape:zoom="0.9899495"
            inkscape:cx="471.20115"
            inkscape:cy="198.13527"
            inkscape:document-units="px"
            inkscape:current-layer="layer1"
            showgrid="true"
            units="px"
            inkscape:snap-bbox="true"
            inkscape:bbox-nodes="true"
            inkscape:window-width="1264"
            inkscape:window-height="842"
            inkscape:window-x="201"
            inkscape:window-y="440"
            inkscape:window-maximized="0"
            inkscape:object-nodes="true">
            <inkscape:grid
              type="xygrid"
              id="grid3336"
              spacingx="16"
              spacingy="16"
              empspacing="2" />
          </sodipodi:namedview>
          <metadata
            id="metadata7">
            <rdf:RDF>
              <cc:Work
                rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                  rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title>comment-discussion</dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1"
            transform="translate(0,-604.36209)">
            <path
              style="fill-opacity:1;stroke:none;stroke-opacity:1"
              d="M 32 0 C 14.271983 0 0 14.271983 0 32 L 0 192 L 0 224 L 0 320 L 64 256 L 320 256 C 337.72802 256 352 241.72802 352 224 L 352 32 C 352 14.271983 337.72802 0 320 0 L 32 0 z "
              transform="translate(0,604.36209)"
              id="rect3335" />
            <path
              style="fill-opacity:1;stroke:none;stroke-opacity:1"
              d="M 384 128 L 384 240 C 384 266.59202 362.59202 288 336 288 L 96 288 L 96 352 C 96 369.72802 110.27198 384 128 384 L 384 384 L 448 448 L 448 352 L 448 320 L 448 160 C 448 142.27198 433.72802 128 416 128 L 384 128 z "
              transform="translate(0,604.36209)"
              id="rect3337" />
          </g>
        </svg><span>Messages</span></a></li>
      </ul>
    </nav>
  </aside>

  <main aria-label="Post" class="main" id="main">
  </main>

  <footer class="footer" id="footer">
    <img src="./assets/images/cupcake-logo.gif" alt="PasteTree Logo"style="width:35px;height:35px;" class="small-logo">
    <p class="brand-tagline">Bake. Share. Connect.</p>
    <p>©️ 2025 Malik Robinson</p>
  </footer>
  `;
};

// Accessibility close details menu when escape key is pressed and the details menu is open.
document.addEventListener('keydown', (event) => {
  const userDetails = document.getElementById('user-details');
  if (event.key === "Escape" && userDetails?.open) {
    userDetails.open = false; // Alternative way to close
  }
});

// Accessibility close details menu when user clicks outside of menu and the details menu is open.
document.addEventListener('click', (event) => {
  const userDetails = document.getElementById('user-details');
  if (userDetails.open && !userDetails.contains(event.target)) {
    userDetails.open = false;
  }
});

// Accessibility close details menu when escape key is pressed and the details menu is open.
document.addEventListener('keydown', (event) => {
  const postContainer = document.getElementById('main');

  // Check for all possible spacebar values
  if (event.code === 'Space' || event.key === ' ' || event.key === 'Spacebar') {
    event.preventDefault();

    if (postContainer) {
      console.log("Space bar pressed → scrolling to top of post container");
      postContainer.scrollTo({
        top: 0,
        behavior: 'smooth' // optional
      });

      // If you want to *also move keyboard focus* to the container:
      postContainer.setAttribute('tabindex', '-1'); // make it focusable if not already
      postContainer.focus();
    }
  }
});

// Main function
document.addEventListener('DOMContentLoaded', function() {
  console.log("The DOM is fully loaded");

  // Get random user name and display in user profile section
  const name = randomName();

  // Get html structure
  GetHtmlStructure(name);
  renderPosts();

  document.querySelector('button[aria-label="Show Favorited post"]').addEventListener('click', () => {
  console.log("Opening Favorites");
  renderFavorites();
  });
});