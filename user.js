function sendGetUserNamesRequest(ids){
    return fetch("http://localhost:5000/user_names", {
	method: "POST",
	body: JSON.stringify({"ids": ids}),
	headers: { "content-type": "application/json" }
    })
      .then(response => {
	if (!response.ok) {
	  throw new Error('Network response was not ok');
	}
	return response.json();
      })
      .catch(error => {
	console.error('Error:', error);
      });
}
