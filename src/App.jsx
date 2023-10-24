import { Outlet } from "react-router-dom"
import './App.css'
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

const App = () => {
  return (
    <>
      <Header />
      <main className="m-start bg-green-light">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
