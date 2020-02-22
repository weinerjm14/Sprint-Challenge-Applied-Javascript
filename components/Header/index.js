// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let newsHeader = document.createElement('div');
    let newsDate = document.createElement('span');
    newsDate.textContent = 'March 28, 2019';
    let newsName = document.createElement('h1');
    newsName.textContent = 'Lambda Times';
    let newsTemp = document.createElement('span');
    newsTemp.innerHTML = `98&#176;`;
    let headerHolder = document.querySelector('.header-container');
    newsHeader.appendChild(newsDate);
    newsHeader.appendChild(newsName);
    newsHeader.appendChild(newsTemp); 
    headerHolder.appendChild(newsHeader);
    return headerHolder;
}

Header();
