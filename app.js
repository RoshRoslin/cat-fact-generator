let button = document.getElementById("download-button");
let div = document.getElementById("cat-photo");

//api call

async function getCatFact() {
  const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
  const data = await response.json();
  if (response.status === 200 || response.status === 404) {
    console.log("error");
  }
  console.log(data);
  const fact = data.text;
  render(fact);
}

button.addEventListener("click", function () {
  getCatFact();
});

//render method

function render(fact) {
  let random1 = Math.floor(Math.random() * 10);
  let random2 = Math.floor(Math.random() * 10);
  div.innerHTML = `

    <div class="card mx-auto" style="width: 20rem">
    <img class = "img-fluid" src="https://source.unsplash.com/80${random1}x60${random2}/?cat,kitten" alt="">
    <div class="card-body">
      <h5 class="card-title">Cat fact</h5>
      <p class="card-text">
        ${fact}
      </p>
      
    </div>
  
     
    `;
  button.innerText = "Click For More Facts!";
}
