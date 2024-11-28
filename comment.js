function sendCreateCommentRequest(){
    return fetch("http://localhost:5000/comment", {
	method: "POST",
	body: JSON.stringify(createCommentObj()),
	headers: { "content-type": "application/json" }
    })
      .then(response => {
	if (!response.ok) {
	  throw new Error('Network response was not ok');
	}
	return response.json();
      })
      .then(data => {
	console.log(data)
      })
      .catch(error => {
	console.error('Error:', error);
      });
}

function sendGetCommentsRequestAndBuildCards(){
    postId = params.get("id")
    fetch("http://localhost:5000/comments?post_id=" + postId)
      .then(response => {
	if (!response.ok) {
	  throw new Error('Network response was not ok');
	}
	return response.json();
      })
      .then(comments => {
	    ids = []
	    comments.slice().reverse().forEach((comment) => {
		ids.push(comment["user_id"])
	    });
	    sendGetUserNamesRequest(ids).then(names => {
		i = comments.length - 1;
		while(i >= 0){
		    buildCommentCard(comments[i], names[comments[i]["user_id"]])
		    i--;
		}
      })
      .catch(error => {
	console.error('Error:', error);
      });
})
}

function buildCommentCard(comment, userName){
    const div = document.createElement("div");

    const user = document.createElement("h3");
    user.textContent = userName

    const userDiv = document.createElement("div")
    userDiv.classList.add("commentUserName")
    userDiv.appendChild(user)

    const createdAt = document.createElement("p");
    createdAtNoMillis = comment["created_at"].split(".")[0]
    createdAtNoSeconds = createdAtNoMillis.split(":").slice(0, -1)
    createdAtFormatted = createdAtNoSeconds[0] + ":" + createdAtNoSeconds[1]
    createdAt.textContent = createdAtFormatted

    const createdAtDiv = document.createElement("div")
    createdAtDiv.classList.add("commentCreatedAt")
    createdAtDiv.appendChild(createdAt)

    const text = document.createElement("p");
    text.textContent = comment["text"]

    const textDiv = document.createElement("div")
    textDiv.classList.add("commentText")
    textDiv.appendChild(text)

    div.appendChild(userDiv)
    div.appendChild(textDiv)
    div.appendChild(createdAtDiv)
    div.classList.add("comment")
    div.classList.add("grid-container")
    document.getElementById("commentDisplay").appendChild(div)
}

function buildCreateCommentForm(){

    const userIdLabel = document.createElement("label")
    userIdLabel.setAttribute("for", "userId")
    userIdLabel.textContent = "User Id:"

    const userIdInput = document.createElement("input");
    userIdInput.type = "text";
    userIdInput.id = "userId";

    const divUserId = document.createElement("div")
    divUserId.appendChild(userIdLabel)
    divUserId.appendChild(userIdInput)

    const textLabel = document.createElement("label")
    textLabel.setAttribute("for", "text")
    textLabel.textContent = "Text:"

    const textInput = document.createElement("textarea");
    textInput.cols = "50";
    textInput.rows = "10";
    textInput.id = "text";

    const divText = document.createElement("div")
    divText.appendChild(textLabel)
    divText.appendChild(textInput)

    const submitButton = document.createElement("button")
    submitButton.textContent = "Submit"
    submitButton.onclick = () => {
	sendCreateCommentRequest()
	.then(() => {
		document.getElementById("commentDisplay").innerHTML = ""
		sendGetCommentsRequestAndBuildCards();
	    });
    }

    title = document.createElement("h3")
    title.textContent = "Leave a Comment!"

    document.getElementById("createCommentForm").innerHTML = ""
    document.getElementById("createCommentForm").appendChild(title)
    document.getElementById("createCommentForm").appendChild(divUserId)
    document.getElementById("createCommentForm").appendChild(divText)
    document.getElementById("createCommentForm").appendChild(submitButton)
}

function createCommentObj(){

    userId = document.getElementById("userId").value;
    postId = params.get("id")
    text = document.getElementById("text").value;

    return {
	user_id: userId,
	post_id: postId,
	text: text
    }
}
buildCreateCommentForm()
sendGetCommentsRequestAndBuildCards()
