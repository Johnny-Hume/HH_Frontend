function getPost(post_id){
    fetch("http://localhost:5000/general_post?id=" + post_id)
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

function deletePost(post_id){
    fetch("http://localhost:5000/general_post?id=" + post_id, {method: "DELETE"})
      .then(response => {
	if (!response.ok) {
	  throw new Error('Network response was not ok');
	}
	document.getElementById("postPage").innerHTML = "";
	const deleteStatus = document.createElement("H1");
	deleteStatus.innerText = "Post Deleted";
	document.getElementById("postPage").appendChild(deleteStatus);
      })
      .catch(error => {
	console.error('Error:', error);
      });
}

function createPostCard(post){

    const div = document.createElement("div");

    const title = document.createElement("H1");
    title.textContent = "Title: " + post["title"];

    const text = document.createElement("p");
    text.textContent = "Text: " + post["text"]

    const deleteButton = document.createElement("Button")
    deleteButton.textContent = "Delete Post";
    deleteButton.addEventListener('click', () => {deletePost(post["id"])});

    div.appendChild(title)
    div.appendChild(text)


    document.getElementById("postDisplay").appendChild(div)
}

params = new URLSearchParams(document.location.search)
getPost(params.get("id"))
