const container = document.getElementById("card-container");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    data.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
      `;
      container.appendChild(card);
    });
  });