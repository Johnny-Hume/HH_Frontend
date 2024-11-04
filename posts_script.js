function getPosts(){
    fetch("http://localhost:5000/posts")
      .then(response => {
	if (!response.ok) {
	  throw new Error('Network response was not ok');
	}
	return response.json();
      })
      .then(data => {
	data.forEach((post) => createPostCard(post));
      })
      .catch(error => {
	console.error('Error:', error);
      });
}

function createPostCard(post){

    const div = document.createElement("div");

    const title = document.createElement("H1");
    title.textContent = "Title: " + post["title"];

    const link = document.createElement('a');
    link.href = "post.html?id=" + post["id"]
    link.textContent = "View Post"

    const pickup = document.createElement("p");
    pickup.textContent = "pickup: " + post["pickup"];

    const dropoff = document.createElement("p");
    dropoff.textContent = "dropoff: " + post["dropoff"];

    const date = document.createElement("p");
    date.textContent = "date: " + post["date"];

    const num_passengers = document.createElement("p");
    num_passengers.textContent = "num_passengers: " + post["num_passengers"];

    div.appendChild(title)
    div.appendChild(link)
    div.appendChild(pickup)
    div.appendChild(dropoff)
    div.appendChild(date)
    div.appendChild(num_passengers)
    div.className = "postCard"

    document.getElementById("postsDisplay").appendChild(div)
}

getPosts()
