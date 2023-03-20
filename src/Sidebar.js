import React from 'react';
import "./Sidebar.css"
import { FaBars } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-scroll'
import { CgWebsite,CgProfile } from "react-icons/cg"

import { ImNewspaper} from "react-icons/im";




export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebar: false,
           
        }
        this.showSidebar = this.showSidebar.bind(this)
    }
    showSidebar() {
        this.setState({sidebar:!this.state.sidebar})
    }


  render(){
  return (
            <div class="">
                <div className='navbar text-sky-500  mt-10'>
                <img src="../df_mini_logo.svg" class="lg:w-28 w-20 float-left  inline lg:ml-20 ml-5"/>

                    <button to='#' className='menu-bars float-right'>

                        <FaBars onClick={this.showSidebar} class="bg-transparent  text-green-900 hover:text-green-900  lg:mr-10 md:mr-10  lg:mt-2  float-right" size={40}/>
                    </button>
                    
                </div>

            
                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items  w-full  ' onClick={this.showSidebar} style={{backgroundColor: "#004e38"}}>
                    <li className='navbar-toggle'>
                    <button to='#' className='menu-bars '>
                        <AiIcons.AiOutlineClose class="text-white mt-12  "size={45} />
                    </button>
                    </li>
                  
                  
                        <div class="text-md bg-transparent text-left lg:flex-grow md:flex-grow mt-5 ">
                            <a  onClick={this.showSidebar}  target ="_blank" href="https://linktr.ee/dfhostedbydscsus" smooth={true} class="bg-transparent text-xl block mt-4 p-3 rounded-md    hover:bg-amber-100 hover:bg-opacity-20 lg:mt-0 text-white">
                                <span class="inline-block"><ImNewspaper/> </span>Register
                                
                            </a>
                            <Link  to="LearnMore" onClick={this.showSidebar}  smooth={true}
                                class="bg-transparent  text-xl block mt-4 p-2 rounded-md   hover:bg-opacity-20 hover:bg-amber-100 lg:mt-0 text-white">
                                <span class="inline-block"><CgProfile/></span>Learn More
                            </Link>
                           
     

                        </div>
              
                 
             
                </ul>
                </nav>
            </div>
        );
    }
}