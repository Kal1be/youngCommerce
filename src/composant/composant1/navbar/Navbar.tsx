import "./navbar.scss"
import {motion} from "framer-motion"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown,faCamera,faSearch,faGlobe,faDiagnoses, faCannabis, faCouch } from "@fortawesome/free-solid-svg-icons"



function Navbar() {
  return (
    <div className="my-back">
    <div className="back">
    <div className=" lg:p-3 p-2 shadow-lg absolute top-0 w-screen">
    <div className="lg:flex justify-between lg:mx-6 mx-2 items-center font-medium">
      <h2 className="text-orange-500"><span className="title lg:text-4xl text-3xl font-extrabold">TchadCommerce</span><span className="lg:text-3xl text-xl ">.com</span></h2>
      {/*___________++++++++++++++++++++++++ the shrink of the search bar when he reach 150px_+++++++++++++++++++++++++++++++++++ */}
      {/* <motion.div
      initial={{opacity:0.3}}
      transition={{duration:1}}
      whileInView={{opacity:1}} className="border w-[40%] p-1 rounded-full flex justify-between items-center bg-white" >
<p className="text-sm">Products <FontAwesomeIcon icon={faChevronDown} className="text-sm mx-1"/></p>|
    <input type="text" title="find your product" className="input w-[54%] " placeholder="find your product here ?"/>
    <FontAwesomeIcon icon={faCamera} className="text-gray-500 text-xl"/>
    <p className="bg-orange-500 px-2 py-1 rounded-full text-white"><FontAwesomeIcon icon={faSearch} className="mx-1"/>search</p>
    </motion.div> */}
      <ul className="navbar lg:flex justify-between w-[40%] items-center text-white" id="product-top">
          <li>Offre:</li>
          <li><FontAwesomeIcon icon={faGlobe} className="mx-1 text-xl"/>Francais-TD</li>
          <li><FontAwesomeIcon icon={faDiagnoses} className="mx-1"/>Se Connecter</li>
          <li className="bg-orange-500 px-10 py-2 rounded-full text-white">S'inscrire</li>
      </ul>
    </div>
  </div>
  <motion.div
  initial={{x:-200,opacity:0}}
  transition={{duration:1}}
  whileInView={{x:0,opacity:1}}
   className="lg:mt-44 mt-36 absolute lg:mx-8 mx-2 w-[85%]">
    <h2 className="text-white lg:text-xl"><FontAwesomeIcon icon={faCouch} className="text-orange-500"/> Departement des Canapes</h2>
    <h3 className="lg:text-7xl lg:my-4 my-2 text-3xl text-white lg:font-bold font-medium" id="text">TchadCommerce.com est une platforme en ligne pour des ventes.</h3>
    <motion.div
      initial={{opacity:0.3}}
      transition={{duration:1}}
      whileInView={{opacity:1}} className="border lg:w-[70%] w-[100%] p-1 my-4 lg:my-0 rounded-full flex justify-between items-center bg-white" >
<p className="navbar text-sm">Products <FontAwesomeIcon icon={faChevronDown} className="text-sm mx-1"/></p><span className="navbar">|</span>
    <input type="text" title="find your product" className="input lg:w-[54%] outline-none " placeholder="recherche ici..."/>
    <FontAwesomeIcon icon={faCamera} className="text-gray-500 text-xl"/>
    <p className="bg-orange-500 px-2 lg:py-2 rounded-full text-white"><FontAwesomeIcon icon={faSearch} className="mx-1"/>search</p>
    </motion.div>
  </motion.div>
    </div>
    </div>
  )
}

export default Navbar
