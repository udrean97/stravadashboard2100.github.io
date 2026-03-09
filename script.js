async function loadKPIs() {

  const response = await fetch("https://your-vercel-backend.vercel.app/api/kpis")

  const data = await response.json()

  document.getElementById("totalActivities").innerText = data.total_activities
  document.getElementById("totalDistance").innerText = data.total_distance
  document.getElementById("totalTime").innerText = data.total_moving_time
  document.getElementById("runCount").innerText = data.run_count
  document.getElementById("rideCount").innerText = data.ride_count
  document.getElementById("lastActivity").innerText = data.last_activity_date

}

loadKPIs()
