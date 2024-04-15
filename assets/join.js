document.getElementById("join").addEventListener("click", (e) => {
  let email = document.getElementById("email").value
  email = new URLSearchParams({
    "email": email
  }).get("email");
  const sessionHash = new URLSearchParams(window.location.search).get("session");
  fetch(`http://localhost:3000/join?email=${email}&session=${sessionHash}`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      if (response) {
        window.location.replace(window.location.origin + `/learnGitBranchingNew/index.html?session=${sessionHash}&email=${email}`)
      }
    });
});
