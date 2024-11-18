document.getElementById("getSettings").addEventListener("click", function () {
	try {
		var idInstance = document.getElementById("idInstance").value;
        var apiTokenInstance = document.getElementById("apiTokenIsntance").value;
        var myURL = "https://7103.api.greenapi.com/waInstance" + idInstance + "/getSettings/" + apiTokenInstance;
        	fetch(myURL, {
        		method: 'GET'
        	})
				.then(response => response.json())
				.then(body => {
					console.log(body);
					document.getElementById("answerFrame").value = JSON.stringify(body, null, 4);
				})
				.catch((error) => {
					console.error(error);
				});
		} catch (reason) {
            console.error(reason);
            document.getElementById("resultText").innerHTML = "Message was not sent. Reason: " + reason + " See logs for details";
        }
    });
document.getElementById("getStateInstance").addEventListener("click", function () {
    try {
        var idInstance = document.getElementById("idInstance").value;
        var apiTokenInstance = document.getElementById("apiTokenIsntance").value;
        var myURL2 = "https://7103.api.greenapi.com/waInstance" + idInstance + "/getStateInstance/" + apiTokenInstance;
        	fetch(myURL2, {
				method: 'GET'
				})
				.then(response => response.json())
				.then(body => {
					console.log(body);
					document.getElementById("answerFrame").value = JSON.stringify(body, null, 4);
				})
				.catch((error) => {
					console.error(error);
				});
		} catch (reason) {
            console.error(reason);
            document.getElementById("resultText").innerHTML = "Message was not received. Reason: " + reason + " See logs for details";
        }
    });
document.getElementById("SendMessage").addEventListener("click", function () {
    try {
        var idInstance = document.getElementById("idInstance").value;
        var apiTokenInstance = document.getElementById("apiTokenIsntance").value;
        var myURL3 = "https://7103.api.greenapi.com/waInstance" + idInstance + "/sendMessage/" + apiTokenInstance;
        const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const raw = JSON.stringify({
			"chatId": document.getElementById("phoneNumber").value + "@c.us",
			"message": document.getElementById("messageText").value
		});
        	console.log(raw);
        	fetch(myURL3, {
				method: 'POST',
				body: raw,
				headers: myHeaders
				})
				.then(response => response.json())
				.then(body => {
					console.log(body);
					document.getElementById("answerFrame").value = JSON.stringify(body, null, 4);
				})
				.catch((error) => {
					console.error(error);
				});
		} catch (reason) {
            console.error(reason);
            document.getElementById("resultText").innerHTML = "Message was not received. Reason: " + reason + " See logs for details";
        }
    }); 

document.getElementById("sendFileByUrl").addEventListener("click", function () {
    try {
        var idInstance = document.getElementById("idInstance").value;
        var apiTokenInstance = document.getElementById("apiTokenIsntance").value;
        var myURL4 = "https://7103.api.greenapi.com/waInstance" + idInstance + "/sendFileByUrl/" + apiTokenInstance;
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const raw = JSON.stringify({
			"chatId": document.getElementById("phoneNumber2").value + "@c.us",
			"urlFile": document.getElementById("messageURL").value,
			"fileName": "randomPicture.png",
  			"caption": "randomPicture.png"
		});
            console.log(raw);
			fetch(myURL4, {
				method: 'POST',
				body: raw,
				headers: myHeaders
				})
				.then(response => response.json())
				.then(body => {
					console.log(body);
					document.getElementById("answerFrame").value = JSON.stringify(body, null, 4);
				})
				.catch((error) => {
					console.error(error);
				});
		} catch (reason) {
            console.error(reason);
            document.getElementById("resultText").innerHTML = "Message was not received. Reason: " + reason + " See logs for details";
        }
    });
   