import { useEffect } from "react"
import "./App.css"

const vizStyle = {
  width: "calc(100vw)",
  height: "cacl(100vh)",
}

function App() {
  useEffect(() => {
    const viz = document.getElementById("tableauViz")
    console.log("Tableau viz ", viz)
  }, [])

  const vizzes = []
  for (let i = 0; i < 12; i++) {
    vizzes.push(
      <tableau-viz
        id="tableauViz"
        hide-tabs
        isDashboard
        toolbar="hidden"
        src={`https://10ax.online.tableau.com/t/developmentonlydev595736/views/DashboardList/kpi${
          i + 1
        }`}
      ></tableau-viz>
    )
  }
  return (
    <div style={vizStyle} className="App">
      {vizzes}
    </div>
  )
}

export default App
