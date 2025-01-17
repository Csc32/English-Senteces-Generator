const API = import.meta.env.PUBLIC_API_KEY;
async function getResponse(amount = 5, userPrompt) {
	const data = {
		model: "command-r-plus-08-2024",
		prompt: `generate a list of ${amount} examples sentences about ${userPrompt}`,
		max_tokens: 400,
		temperature: 1,
		k: 0,
		p: 1,
		frequency_penalty: 1,
		presence_penalty: 1,
		stop_sequences: [],
		return_likelihoods: "NONE",
	};
	const result = await fetch("https://api.cohere.com/v2/chat", {
		method: "POST",
		headers: {
			Authorization: `BAERER ${API}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => res.json());
	const text = result.text;

	return text;
}

export default getResponse;
