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

function randomName() {
  let randomindex = Math.floor(Math.random() * postUser.length);
  let randomUser = postUser[randomindex];

  return randomUser;
}

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
    <h3>Explore Page Coming Soon</h3>
  </main>

  <footer class="footer" id="footer">
    <img src="./assets/images/cupcake-logo.gif" alt="PasteTree Logo"style="width:35px;height:35px;" class="small-logo">
    <p class="brand-tagline">Bake. Share. Connect.</p>
    <p>©️ 2025 Malik Robinson</p>
  </footer>
  `;
};

document.addEventListener('DOMContentLoaded', function() {
  console.log("The DOM is fully loaded")
  
  // Get random user name and display in user profile section
  const name = randomName();

  GetHtmlStructure(name);
});