import './App.css'
import Header from "./components/Header.jsx";


function App() {

  return (
    <>
      <div>
       <Header></Header>
       <div className="task__container">
        <AddTask></AddTask>
        <CompletedTask></CompletedTask>
       </div>
      </div>
    </>
  )
}

export default App
