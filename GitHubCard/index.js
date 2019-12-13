// import Axios from "axios";

// import axios from "axios";

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/





/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

//step 3
const container = document.querySelector('.container');

function createCard(object) {
  const card = document.createElement('div');
  const userImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const usersName = document.createElement('p');
  const usersLocation = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  console.log(card)
  

  card.appendChild(userImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(usersName);
  cardInfo.appendChild(usersLocation);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  userImage.src = object.avatar_url;
  name.textContent = `Name: ${object.name}`;
  usersName.textContent = `User Name: ${object.login}`;
  usersLocation.textContent = `Location: ${object.location}` ;
  profile.textContent = `Profile: ${object.html_url}`;
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  bio.textContent = `Bio: ${object.bio}`;


  card.classList.add("card")
  userImage.classList.add("img")
  name.classList.add("name")
  usersName.classList.add("username")
  usersLocation.classList.add("p")
  profile.classList.add("p")
  followers.classList.add("p")
  following.classList.add("p")
  bio.classList.add("p")


  return card;
  
}


//step 1, 2, 4
const getMyData = () => {
axios 
  .get("https://api.github.com/users/fnumilat")
  .then((res) => {
    const gitInfo = (res.data);
    console.log(gitInfo);
    container.appendChild(createCard(gitInfo))

    createCard(gitInfo)
  })
  .catch((err) => {
    console.log('You hit an error:', err)
  })
}
getMyData()

//step 5
const followersArray = ["asvka", "jtkoch", "hmerritt", "ShawnBatson", "fuston05"];

followersArray.forEach((person) => {
  axios
  .get(`https://api.github.com/users/${person}`)
  .then((res) => {
    const gitFollowersInfo = createCard(res.data);
    container.appendChild(gitFollowersInfo)
  })
  .catch((err) => {
    console.log('You hit an error:', err)
  })
})
