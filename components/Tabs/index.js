// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
function tabCreator(obj){
    let tabHolder = document.createElement('div');
    tabHolder.classList.add('tab');
    tabHolder.textContent = obj;
    let tabMainHolder = document.querySelector('.topics');
    tabMainHolder.appendChild(tabHolder);
    return tabMainHolder;
}

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then((response) => {
        response.data.topics.forEach(element => {
            tabCreator(element);
        })
        // console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })