import Navbar from "../components/navbar"

function Contact() {
  return (
    <div>
      <Navbar />
      <section className="hero"> 
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            <ul className="contact-links">
              <li className="contact-item">Email : syauqisugara@gmail.com</li>
              <li className="contact-item">Phone : 0813 8743 0339</li>
            </ul>
          </div>  
        </div>
      </section>
    </div>
  )
}

export default Contact