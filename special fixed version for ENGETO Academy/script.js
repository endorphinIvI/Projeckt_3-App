const apiResourse = "https://jsonplaceholder.typicode.com/users";

fetch(apiResourse)
  .then((response) => response.json())
  .then((data) => {
    const divBackground = document.createElement("div");
    divBackground.classList.add("background");
    document.body.appendChild(divBackground);

    const input = document.createElement("input");
    input.placeholder = "Find your lost kitty";
    divBackground.appendChild(input);

    for (let i = 1; i <= 10; i++) {
      const div = document.createElement("div");
      div.classList.add(`kit${i}`);
      divBackground.appendChild(div);
    }

    const vizitky = document.createElement("div");
    vizitky.classList.add("vizitky");
    divBackground.appendChild(vizitky);

    for (let i = 0; i < data.length; i++) {
      const div = document.createElement("div");
      div.classList.add(`vzk${i + 1}`);
      const img = `https://robohash.org/${data[i].id}NX.png?set=set4&size=150x150`;

      const ul = document.createElement("ul");
      ul.innerHTML = `
                <li><strong>Name:</strong> ${data[i].name};</li>
                <li><strong>Company:</strong> ${data[i].company.name};</li>
                <li><strong>Position:</strong> ${data[i].company.bs};</li>
                <li><strong>Phone number:</strong> ${data[i].phone};</li>
                <li><strong>Email address:</strong> ${data[i].email};</li>
                <li><strong>Website:</strong> ${data[i].website}.</li>
              `;
      const imgElement = document.createElement("img");
      imgElement.src = img;
      imgElement.alt = data[i].name;
      div.appendChild(imgElement);
      div.appendChild(ul);
      vizitky.appendChild(div);
    }

    input.addEventListener("input", (event) => {
      const searchQuery = event.target.value.toLowerCase();
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );
      const results = document.querySelector(".vizitky");
      results.innerHTML = "";

      filteredData.forEach((item) => {
        const result = document.createElement("div");
        const imgElement = document.createElement("img");
        imgElement.src = `https://robohash.org/${item.id}NX.png?set=set4&size=150x150`;
        imgElement.alt = item.name;
        result.appendChild(imgElement);
        const ul = document.createElement("ul");
        ul.innerHTML = `
                  <li><strong>Name:</strong> ${item.name};</li>
                  <li><strong>Company:</strong> ${item.company.name};</li>
                  <li><strong>Position:</strong> ${item.company.bs};</li>
                  <li><strong>Phone number:</strong> ${item.phone};</li>
                  <li><strong>Email address:</strong> ${item.email};</li>
                  <li><strong>Website:</strong> ${item.website}.</li>
                `;
        result.appendChild(ul);

        results.appendChild(result);
      });
    });
  })
  .catch((error) => console.log(error));
