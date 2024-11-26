function sendCreateRidePostRequest(){
    fetch("http://localhost:5000/ride_post", {
	method: "POST",
	body: JSON.stringify(createRidePostObj()),
	headers: { "content-type": "application/json" }
    })
      .then(response => {
	if (!response.ok) {
	  throw new Error('Network response was not ok');
	}
	return response.json();
      })
      .then(data => {
	document.getElementById("statusOutput").innerText = "Post Created!"
	console.log(data)
      })
      .catch(error => {
	console.error('Error:', error);
      });
}

function sendCreateGeneralPostRequest(){
    fetch("http://localhost:5000/general_post", {
	method: "POST",
	body: JSON.stringify(createGeneralPostObj()),
	headers: { "content-type": "application/json" }
    })
      .then(response => {
	if (!response.ok) {
	  throw new Error('Network response was not ok');
	}
	return response.json();
      })
      .then(data => {
	document.getElementById("statusOutput").innerText = "Post Created!"
	console.log(data)
      })
      .catch(error => {
	console.error('Error:', error);
      });
}

function buildGeneralPostForm(){

    userTypes = ["hiker", "trail_angel"]

    const userIdLabel = document.createElement("label")
    userIdLabel.setAttribute("for", "userId")
    userIdLabel.textContent = "User Id:"

    const userIdInput = document.createElement("input");
    userIdInput.type = "text";
    userIdInput.id = "userId";

    const divUserId = document.createElement("div")
    divUserId.appendChild(userIdLabel)
    divUserId.appendChild(userIdInput)

    const userTypeLabel = document.createElement("label")
    userTypeLabel.setAttribute("for", "userType")
    userTypeLabel.textContent = "User Type:"

    const userTypeInput = document.createElement("select");
    userTypeInput.id = "userType";

    for (var i = 0; i < userTypes.length; i++) {
	var option = document.createElement("option");
	option.value = userTypes[i];
	option.text = userTypes[i];
	userTypeInput.appendChild(option);
    }

    const divUserType = document.createElement("div")
    divUserType.appendChild(userTypeLabel)
    divUserType.appendChild(userTypeInput)

    const titleLabel = document.createElement("label")
    titleLabel.setAttribute("for", "title")
    titleLabel.textContent = "Title:"

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";

    const divTitle = document.createElement("div")
    divTitle.appendChild(titleLabel)
    divTitle.appendChild(titleInput)

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
    submitButton.onclick = () => {sendCreateGeneralPostRequest()}

    document.getElementById("createPostForm").innerHTML = ""

    document.getElementById("createPostForm").appendChild(divUserId)
    document.getElementById("createPostForm").appendChild(divUserType)
    document.getElementById("createPostForm").appendChild(divTitle)
    document.getElementById("createPostForm").appendChild(divText)
    document.getElementById("createPostForm").appendChild(submitButton)
    
}

function buildRidePostForm(){

    userTypes = ["hiker", "trail_angel"]

    const userIdLabel = document.createElement("label")
    userIdLabel.setAttribute("for", "userId")
    userIdLabel.textContent = "User Id:"

    const userIdInput = document.createElement("input");
    userIdInput.type = "text";
    userIdInput.id = "userId";

    const divUserId = document.createElement("div")
    divUserId.appendChild(userIdLabel)
    divUserId.appendChild(userIdInput)

    const userTypeLabel = document.createElement("label")
    userTypeLabel.setAttribute("for", "userType")
    userTypeLabel.textContent = "User Type:"

    const userTypeInput = document.createElement("select");
    userTypeInput.id = "userType";

    for (var i = 0; i < userTypes.length; i++) {
	var option = document.createElement("option");
	option.value = userTypes[i];
	option.text = userTypes[i];
	userTypeInput.appendChild(option);
    }

    const divUserType = document.createElement("div")
    divUserType.appendChild(userTypeLabel)
    divUserType.appendChild(userTypeInput)

    const titleLabel = document.createElement("label")
    titleLabel.setAttribute("for", "title")
    titleLabel.textContent = "Title:"

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";

    const divTitle = document.createElement("div")
    divTitle.appendChild(titleLabel)
    divTitle.appendChild(titleInput)

    const pickupLabel = document.createElement("label")
    pickupLabel.setAttribute("for", "pickup")
    pickupLabel.textContent = "Pickup:"

    const pickupInput = document.createElement("input");
    pickupInput.type = "text";
    pickupInput.id = "pickup";

    const divPickup = document.createElement("div")
    divPickup.appendChild(pickupLabel)
    divPickup.appendChild(pickupInput)

    const dropoffLabel = document.createElement("label")
    dropoffLabel.setAttribute("for", "dropoff")
    dropoffLabel.textContent = "Dropoff:"

    const dropoffInput = document.createElement("input");
    dropoffInput.type = "text";
    dropoffInput.id = "dropoff";

    const divDropoff = document.createElement("div")
    divDropoff.appendChild(dropoffLabel)
    divDropoff.appendChild(dropoffInput)

    const dateLabel = document.createElement("label")
    dateLabel.setAttribute("for", "date")
    dateLabel.textContent = "Date:"

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";

    const divDate = document.createElement("div")
    divDate.appendChild(dateLabel)
    divDate.appendChild(dateInput)

    const numPassengersLabel = document.createElement("label")
    numPassengersLabel.setAttribute("for", "num_passengers")
    numPassengersLabel.textContent = "Number Of Passengers:"

    const numPassengersInput = document.createElement("input");
    numPassengersInput.type = "number";
    numPassengersInput.id = "num_passengers";

    const divNumPassengers = document.createElement("div")
    divNumPassengers.appendChild(numPassengersLabel)
    divNumPassengers.appendChild(numPassengersInput)

    const submitButton = document.createElement("button")
    submitButton.textContent = "Submit"
    submitButton.onclick = () => {sendCreateRidePostRequest()}

    document.getElementById("createPostForm").innerHTML = ""

    document.getElementById("createPostForm").appendChild(divUserId)
    document.getElementById("createPostForm").appendChild(divUserType)
    document.getElementById("createPostForm").appendChild(divTitle)
    document.getElementById("createPostForm").appendChild(divPickup)
    document.getElementById("createPostForm").appendChild(divDropoff)
    document.getElementById("createPostForm").appendChild(divDate)
    document.getElementById("createPostForm").appendChild(divNumPassengers)
    document.getElementById("createPostForm").appendChild(submitButton)
}

function createRidePostObj(){

    userId = document.getElementById("userId").value;
    userType = document.getElementById("userType").value;
    title = document.getElementById("title").value;
    pickup = document.getElementById("pickup").value;
    dropoff = document.getElementById("dropoff").value;
    date = document.getElementById("date").value;
    num_passengers = document.getElementById("num_passengers").value;

    return {
	user_id: userId,
	user_type: userType,
	title: title,
	pickup: pickup,
	dropoff: dropoff,
	date: date,
	num_passengers: num_passengers
    }
}

function createGeneralPostObj(){

    userId = document.getElementById("userId").value;
    userType = document.getElementById("userType").value;
    title = document.getElementById("title").value;
    text = document.getElementById("text").value;

    return {
	user_id: userId,
	user_type: userType,
	title: title,
	text: text
    }
}

document.getElementById("postType").selectedIndex = 0
document.getElementById("postType").addEventListener("change", function() {
    value = document.getElementById("postType").value
    if (value == "ride"){
	buildRidePostForm();
    }
    else if (value == "general"){
	buildGeneralPostForm();
    }
    else{
	throw new Error("Unhandled Post Type Selected")
    }
});
