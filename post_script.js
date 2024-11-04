function getPost(post_id){
    fetch("http://localhost:5000/post?id=" + post_id)
      .then(response => {
	if (!response.ok) {
	  throw new Error('Network response was not ok');
	}
	return response.json();
      })
      .then(data => {
	createPostCard(data);
      })
      .catch(error => {
	console.error('Error:', error);
      });
}

function createPostCard(post){

    const div = document.createElement("div");

    const title = document.createElement("H1");
    title.textContent = "Title: " + post["title"];

    const pickup = document.createElement("p");
    pickup.textContent = "pickup: " + post["pickup"]

    const dropoff = document.createElement("p");
    dropoff.textContent = "dropoff: " + post["dropoff"]

    const date = document.createElement("p");
    date.textContent = "date: " + post["date"]

    const num_passengers = document.createElement("p");
    num_passengers.textContent = "num_passengers: " + post["num_passengers"]

    div.appendChild(title)
    div.appendChild(pickup)
    div.appendChild(dropoff)
    div.appendChild(date)
    div.appendChild(num_passengers)

    document.getElementById("postDisplay").appendChild(div)
}

post = {
    title: "Need a ride to Seattle",
    pickup: "WAC",
    dropoff: "Seattle",
    date: "08/09/24",
    num_passengers: 4
}

params = new URLSearchParams(document.location.search)
getPost(params.get("id"))
