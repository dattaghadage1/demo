import './App.css'
import Banner from './View/Banner'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Categories from './View/Categories'
import { useState } from 'react'
import Card from './View/Card'
function App() {
  const [cardData, setCardData] = useState([])
  const Categorie = ["Arts", "Music", "Sport", "Fashion", "Science", "Education"]
  return (
    <>
      <header>
        <Banner />
        </header>
      <main>
        <Categories
          Categorie={Categorie}
        />
        <Card />
      </main>
    </>
  )
}

export default App
