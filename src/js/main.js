import getResponse from "./api";
const inputText = document.getElementById("input-text");
const responseText = document.getElementById("prompt");
const btn = document.getElementById("btn-submit");
const loader = document.getElementById("loader");

inputText.addEventListener("input", () => {
	responseText.textContent = `Generate a list of 5 examples sentences about ${inputText.value}`;
});
btn.addEventListener("click", async () => {
	responseText.classList.toggle("hidden");
	loader.classList.toggle("hidden");
	const result = await getResponse(5, inputText.value);
	if (result) {
		responseText.classList.toggle("hidden");
		loader.classList.toggle("hidden");
		responseText.textContent = result;
	}
});
