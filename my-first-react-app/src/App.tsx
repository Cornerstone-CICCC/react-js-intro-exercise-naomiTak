import Header from './components/Header'
import Welcome from './components/Welcome'
import Info from './components/Info'
import './App.css'

function App() {
  return (
    <>
      <Header logoText='My First React App' />
      <Welcome message='Hello!' />
      <Info firstName='John' lastName='Smith' age={25} isStudent={false}/>
    </>
  )
}

export default App
