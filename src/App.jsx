
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter as Router } from 'react-router-dom'
// import Baseroute from './routes/Baseroute'

// function App() {


//   return (
//     <>
//       <Router>
//         <Baseroute />
//       </Router>
//     </>
//   )
// }

// export default App

// src/App.jsx - CORRECTED
import { BrowserRouter } from 'react-router-dom'
import Baseroute from './routes/Baseroute'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Baseroute />
    </BrowserRouter>
  )
}

export default App
