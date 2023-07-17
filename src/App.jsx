import { useState } from 'react'
import logo from './assets/logo.png'
import art1 from './assets/art-1.jpg'
import art2 from './assets/art-2.jpg'
import art3 from './assets/art-3.jpg'
import art4 from './assets/art-4.jpg'
import hr from './assets/hr.png'
import pr from './assets/project-ranga.mp4'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='lol'>
    <div className='head-section'>
       <a href="https://www.instagram.com/dasosmi_dhanyosmi/" target="_blank">
         <img id='logo' src={logo} className="logo" alt="Dasosmi Dhanyosmi" />
       </a>
       <p className='content'>
        <h1>Dasosmi</h1>
        <p>'Dasosmi' unites the wisdom of Vedanta, the power of Bhakti, and the beauty of art to unveil self-realization. 
      Breaking free from mythical illusions, it guides individuals towards the ultimate goal of self-discovery.
        </p>
       </p>
       
     </div>
     </div>

     <div className='art'>
     <img id="hr" src={hr} alt="line"/>
      <p>
        <h1 class="content-header" id="s1">Artworks ... </h1>
        <h3>Where realism & digital meets service</h3>
        The essence of these celestial beings is captured through meticulous attention to detail and a profound reverence 
        for the divine. The artwork invites viewers to witness the gods and goddesses as tangible entities, bridging the 
        earthly and the divine realms. Intricate jewelry, elaborate garments, and serene expressions convey both the ethereal 
        beauty and the relatable humanity of these divine figures. The art aims to create a spiritual connection, allowing 
        individuals to immerse themselves in the presence of these Vaishnava deities and experience the divine grace they embody.
      </p>
      <div className='display-work'>
        <img id='art-1' src={art1} className="logo" alt="Dasosmi Dhanyosmi" />
        <img id='art-1' src={art2} className="logo" alt="Dasosmi Dhanyosmi" />
        <img id='art-1' src={art3} className="logo" alt="Dasosmi Dhanyosmi" />
        <img id='art-1' src={art4} className="logo" alt="Dasosmi Dhanyosmi" />
      </div>
     </div>

     <div className='articles'>
     <img id="hr" src={hr} alt="line"/>
      <p>
        <h1 class="content-header" id="s2">... Articles And Blogs</h1>
        <h3>Deep dive into philosophy of the eternal</h3>
        The pursuit of understanding the intricate relationship between the conscious entity and 
        the supreme conscious controller is a profound endeavor that engages the intellectual human mind. 
        This quest lies at the heart of the philosophical discipline known as Vedanta. Within the vast expanse of Sanatana Dharma, this aspect finds its evolution. Through my articles and blogs shared on Reddit, I delve into the captivating realms of Vedanta, specifically exploring its depths through the lens of Vishishtadvaita Vedanta guided by the profound Siddhanta of Ramanujacharya.
      </p>
      <div>
      </div>
     </div>

     <div className='project'>
     <img id="hr" src={hr} alt="line"/>
      <p>
        <h1 class="content-header" id="s3">Project - Ranga ... </h1>
        Renowned as Thiruvarangam and praised by the esteemed Alwars and eminent Acharyas, Srirangam stands as an invaluable gem 
        among the temples of India. Its grandeur transcends boundaries, encompassing literature, architecture, philosophy, and 
        the profound Bhakti movement. Within the endeavor named 'Project - Ranga,' the splendor of Srirangam is meticulously 
        explored through the mediums of art and articles. This endeavor seeks to illuminate the divine aspects of Srirangam, 
        unveiling its unparalleled beauty, spiritual significance, and cultural richness. Through artistic expressions and 
        insightful writings, 'Project - Ranga' endeavors to capture the essence of Srirangam and transport viewers and readers 
        into the mystical realm of this sacred place.
      </p>
      <div className='display-work'>
        <video controls width="80%">
          <source src={pr} type="video/mp4" />
        </video>
      </div>
     </div>
      <h4>copyrights @ 2023 dasosmi_dhanyosmi</h4>
      
    </>

  )
}

export default App
