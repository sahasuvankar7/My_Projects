const apiKey = "H6+Ib9OT49wzArJZdrfC9w==u19MjMuqHmZmrmkj";
const btnEl = document.getElementById("btn");
const getEl = document.getElementById("joke");
const options = {
  mehtod: "GET",
  headers: {
    "X-Api-key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  try {
    getEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    getEl.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = "Tell Me Joke";
  } catch (error) {
    jokeEl.innerText = "An error happens someHow";
    console.log(error);
  }
}
btnEl.addEventListener("click", getJoke);
