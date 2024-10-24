
function getHikers(){
    fetch("http://localhost:5000/hikers")
      .then(response => {
	if (!response.ok) {
	  throw new Error('Network response was not ok');
	}
	return response.json();
      })
      .then(data => {
	data.forEach((hiker) => createHikerCard(hiker));
      })
      .catch(error => {
	console.error('Error:', error);
      });
}

function createHikerCard(hiker){
    const div = document.createElement("div");

    const trailName = document.createElement("H1");
    trailName.textContent = "Trail Name: " + hiker["trail_name"]

    const bio = document.createElement("p");
    bio.textContent = "Bio: " + hiker["bio"]

    div.appendChild(trailName)
    div.appendChild(bio)

    document.getElementById("hikersDisplay").appendChild(div)
}

getHikers()
