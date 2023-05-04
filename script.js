const apiResourse = "https://jsonplaceholder.typicode.com/users";
const namesAndData = fetch(apiResourse)
  .then((response) => response.json())
  .then((data) => {
    const divBackground = document.querySelector(".background");
    const input = document.createElement("input");
    input.placeholder = "Find your lost kitti";
    divBackground.appendChild(input);

    for (let i = 0; i < data.length; i++) {
      const div = document.querySelector(`.vzk${i + 1}`);
      const img = `https://robohash.org/${i + 1}NX.png?set=set4&size=150x150`;
      div.innerHTML = `<img src="${img}" alt=""/>
      <ul>
        <li><strong>Name:</strong> ${data[i].name};</li>
        <li><strong>Company:</strong> ${data[i].company.name};</li>
        <li><strong>Position:</strong> ${data[i].company.bs};</li>
        <li><strong>Phone number:</strong> ${data[i].phone};</li>
        <li><strong>Email adress:</strong> ${data[i].email};</li>
        <li><strong>Website:</strong> ${data[i].website}.</li>
      </ul>`;
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
        const img = document.createElement("img");
        img.src = `https://robohash.org/${item.id}NX.png?set=set4&size=150x150`;
        img.alt = item.name;
        result.appendChild(img);
        result.innerHTML += `
          <ul>
            <li><strong>Name</strong>: ${item.name};</li>
            <li><strong>Company</strong>: ${item.company.name};</li>
            <li><strong>Position</strong>: ${item.company.bs};</li>
            <li><strong>Phone number</strong>: ${item.phone};</li>
            <li><strong>Email address</strong>: ${item.email};</li>
            <li><strong>Website</strong>: ${item.website}.</li>
          </ul>
        `;
        results.appendChild(result);
      });
    });
  })
  .catch((error) => console.error("Something happend"));
