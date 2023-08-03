import { useState } from 'react'
import background from './assets/background.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function Header () {
  return (
    <>
    <div className='headerkanan'>
      <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"/>

    </div>
    <div className='headerkiri'>
    <form>
      <select id="bahasa">
        <option>Bahasa Indonesia</option>
        <option>English</option>
      </select>
    </form>
    </div>
    <div className='masuk'>
      <button>Masuk</button>
    </div>
    </>
  )
}
function Content () {
  return (
    <>
    <div>
    <h1>Film, acara TV tak terbatas, dan banyak lagi</h1>
    </div>
    <div>
    <p>Tonton di mana pun. Batalkan kapan pun.</p>
    </div>
    <div>
    <p>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
    </div>
    <div>
      <input type='text'></input>
      <span></span>
      <button>Mulai<strong>></strong></button>
    </div>
    </>
  ) 
}
function Footer (){
  return <h1></h1>
}

function App() {
  
  return (
    <>
      <div className='backgroundimg'>
        <header>
          <Header />
        </header>

        <section>
           <Content />
        </section>
      </div>

      <footer>
        <Footer />
      </footer>

    </>
)
}

export default App
