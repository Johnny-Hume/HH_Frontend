function getPosts(){
    displayLoadingStatus();
    fetch("http://localhost:5000/posts")
	.then(response => {
	    if (!response.ok) {
		throw new Error('Network response was not ok');
	    }
	clearLoadingStatus();
	return response.json();
	})
	.then(data => {
	    data.forEach((post) => {
		type = post.id.split(":")[0];
		if (type == "ride_posts"){
		    createRidePostCard(post)
		}
		else if (type == "general_posts"){
		    createGeneralPostCard(post)
		}
		else {
		    throw new Error("Unhandled Post Type")
		}
	    });
	})
	.catch(error => {
	    console.error('Error:', error);
	});
}

function displayLoadingStatus(){
    const loading = document.createElement("H1");
    loading.textContent = "Loading...";
    document.getElementById("status").appendChild(loading);
}

function clearLoadingStatus(){
    document.getElementById("status").innerHTML = "";
}
function createGeneralPostCard(post){

    const div = document.createElement("div");

    const title = document.createElement("H1");
    title.textContent = "Title: " + post["title"];

    const text = document.createElement("p");
    text.textContent = "Text: " + post["text"];

    const link = document.createElement('a');
    link.href = "general-post.html?id=" + post["id"]
    link.textContent = "View Post"

    div.appendChild(title)
    div.appendChild(text)
    div.appendChild(link)
    div.className = "generalPostCard"

    document.getElementById("postsDisplay").appendChild(div)
}

function createRidePostCard(post){

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
    div.className = "ridePostCard"

    document.getElementById("postsDisplay").appendChild(div)
}

getPosts()
