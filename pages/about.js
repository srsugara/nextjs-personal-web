import Link from "next/link"

import Navbar from "../components/navbar"

function About() {
  return (
    <div>
      <Navbar />
      <section className="hero"> 
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About</h1>
            <p className="description">Saya seorang pekerja milennial yang sedang merasakan quarter life crisis dan sedang berjuang agar tetap santai dalam menyikapinya. Saya seorang pekerja milennial yang sedang merasakan quarter life crisis dan sedang berjuang agar tetap santai dalam menyikapinya...</p>
          </div>  
        </div>
      </section>
    </div>
  )
}

export default About