const request = require("request");
const config = require("./config.json");
const STATUS_URL = "https://discordapp.com/api/v6/users/@me/settings";

async function loop() {
	for (let anim of config.animation) {
		let res = await doRequest(anim.text, anim.emojiID, anim.emojiName).catch(console.error);
		if (!res) {
			// Die
			return;
		}

		await new Promise(p => setTimeout(p, anim.timeout));
	}

	loop();
}
console.log("Running...");
loop();

function doRequest(text, emojiID = null, emojiName = null) {
	return new Promise((resolve, reject) => {
		request({
			method: "PATCH",
			uri: STATUS_URL,
			headers: {
				Authorization: config.token
			},
			json: {
				custom_status: {
					text: text,
					emoji_id: emojiID,
					emoji_name: emojiName
				}
			}
		}, (err, res, body) => {
			if (err) {
				reject(err);
				return;
			}

			if (res.statusCode !== 200) {
				reject(new Error("Invalid Status Code: " + res.statusCode));
				return;
			}

			resolve(true);
		});
	});
}
