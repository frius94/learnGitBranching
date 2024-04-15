const sessionHash = new URLSearchParams(window.location.search).get("dashboard");


fetch(`http://localhost:3000/dashboard?dashboard=` + sessionHash)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    response.forEach(participant => {
      if (participant.isHost) {
        document.getElementById("host").innerHTML = `Host: ${participant.email}`
        return
      }

      let progressRow = document.createElement("div")
      let progressCol = document.createElement("div")
      let progressOuter = document.createElement("div")
      let progressInner = document.createElement("div")
      progressRow.classList.add("row", "my-2")
      progressCol.classList.add("col")

      progressOuter.classList.add("progress")
      progressOuter.setAttribute("role", "progressbar")
      progressOuter.setAttribute("aria-valuenow", participant.progress.toString())
      progressOuter.setAttribute("aria-valuemin", "0")
      progressOuter.setAttribute("aria-valuemax", "18")

      progressInner.classList.add("progress-bar", "progress-bar-striped", "progress-bar-animated", "overflow-visible", "text-warning")
      progressInner.style.width = `${participant.progress}%`
      progressInner.innerHTML = participant.email + `: ${participant.progress.toFixed(2)}%`

      progressOuter.appendChild(progressInner)
      progressCol.appendChild(progressOuter)
      progressRow.appendChild(progressCol)
      document.getElementById("dashboardParent").appendChild(progressRow)

      /*
      <div class="row">
    <div class="col">
      <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%">umut.savas@gmail.com</div>
      </div>
    </div>
  </div>
       */


    })
  });
