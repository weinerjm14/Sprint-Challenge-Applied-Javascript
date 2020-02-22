// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
// https://lambda-times-backend.herokuapp.com/articles

// data.articles.type
function articleMaker(obj){
    let articleMainContainer = document.querySelector('.cards-container');

    let articleSmallContainer = document.createElement('div');
    articleSmallContainer.classList.add('card');
    articleMainContainer.appendChild(articleSmallContainer);

    let articleHeadline = document.createElement('div');
    articleHeadline.classList.add('headline');
    articleHeadline.textContent = obj.headline;
    articleMainContainer.appendChild(articleHeadline);

    let articleAuthorContainer = document.createElement('div');
    articleAuthorContainer.classList.add('author');
    articleMainContainer.appendChild(articleAuthorContainer);

    let authorImg = document.appendChild('img');
    authorImg.setAttribute('src', `${obj.authorPhoto}`);
    articleMainContainer.appendChild(authorImg);

    let authorName = document.createElement('span');
    authorName.textContent = `By: ${obj.authorName}`
    articleMainContainer.appendChild(authorName);

    return articleMainContainer;

}
// console.log(articleMaker());



axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((response) =>  {
        response.data.articles.javascript.forEach((item => {
            articleMaker(item);
        }))
        // console.log(response.data.articles.javascript);
    })
    .catch((err) => {
        console.log(err);
    })
