setTimeout(() => {
  document.getElementById("hostSession").addEventListener("click", (e) => {
    let email = document.getElementById("email").value
    email = new URLSearchParams({
      "email": email
    })
    fetch(`http://localhost:3000/host?` + email)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        document.getElementById("hostSessionUrl").innerHTML = "Copy this link: http://localhost:63342/learnGitBranchingNew/join.html?session=" + response
        document.getElementById("hostSessionUrl").href = "http://localhost:63342/learnGitBranchingNew/join.html?session=" + response
        document.getElementById("openDashboard").innerHTML = "Click here to open the Dashboard to see the progress of the users"
        document.getElementById("openDashboard").href = "http://localhost:63342/learnGitBranchingNew/dashboard.html?dashboard=" + response
      });
  });
}, 2000);