function getTrailAngels(){
    fetch("http://localhost:5000/trailangels")
      .then(response => {
	if (!response.ok) {
	  throw new Error('Network response was not ok');
	}
	return response.json();
      })
      .then(data => {
	data.forEach((trail_angel) => createTrailAngelCard(trail_angel));
      })
      .catch(error => {
	console.error('Error:', error);
      });
}

function createTrailAngelCard(trail_angel){
    const div = document.createElement("div");

    const name = document.createElement("H1");
    name.textContent = "NAME: " + trail_angel["first_name"] + " " + trail_angel["last_name"]

    const location = document.createElement("p");
    location.textContent = "Location: " + trail_angel["location"]

    const capacity = document.createElement("p");
    capacity.textContent = "Capacity: " + trail_angel["capacity"]

    const cost = document.createElement("p");
    cost.textContent = "Cost " + trail_angel["cost"]

    div.appendChild(name)
    div.appendChild(location)
    div.appendChild(capacity)
    div.appendChild(cost)

    document.getElementById("trailAngelsDisplay").appendChild(div)
}

getTrailAngels()
