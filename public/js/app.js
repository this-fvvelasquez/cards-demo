window.onload = async function () {
	const elements = (await axios.get("/catalogue/all")).data;
	let rows = "";
	for (const element of elements) {
		rows += `<div class="card">
                <img
                  src="${element.photo}"
                  class="photo"
                  alt="..."
                />
                <div class="text">
                <p class="title">${element.name}</p>
                <p>${element.description}</p>
                </div>
            </div>`;
	}

	document.querySelector("#elements").innerHTML += rows;
};
