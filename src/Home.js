import React from "react";
import Sidebar from "./Sidebar";
import {HiUserGroup} from "react-icons/hi"
import { MdFastfood } from "react-icons/md"
import { BiNetworkChart } from "react-icons/bi"
import { BsBraces, BsFileSpreadsheet } from "react-icons/bs"
import { FaFlagCheckered } from "react-icons/fa"
import {SiLinktree} from "react-icons/si"
import {RxDiscordLogo} from "react-icons/rx"
import  {AiOutlineYoutube} from  'react-icons/ai'
import {Link} from 'react-scroll'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <div class="border-2 border-white ">
                    <Sidebar/>

                </div>
             
                <div class="mx-auto mt-40">
                    <img class="mx-auto h-90  w-72 " src="./datafest_logo.png"/>

                    <p class="lg:text-8xl text-5xl font-bold mx-auto"> Welcome to CSUS </p>
                    <p class="lg:text-8xl text-5xl font-bold mx-auto">DataFest</p>
                    <p class="mt-20 text-3xl font-light"> Analyze the future</p>

                </div>
                <div class="mx-auto p-10 lg:ml-72 lg:mr-72">
                <div class="grid lg:grid-cols-2  mx-auto">
                    <div class="">
                        <a target="_blank" href="https://linktr.ee/dfhostedbydscsus">
                            <button  class="p-3 w-52 text-white font-semibold hover:shadow-2xl shadow-lg border-2 border-black  hover:border-green-900  rounded-md" style={{backgroundColor: "#004e38"}}>
                                Register!
                            </button>
                        </a>
                    </div>
                    <div class="">
                        <Link to="LearnMore" smooth={true}>
                            <button class ="p-3 w-52 border-2 shadow-lg hover:shadow-2xl border-black rounded-md">
                                Learn More
                            </button>
                        </Link>
                   

                    </div>
                </div>
                </div>
                <div>
                    <div id="LearnMore" class="grid lg:grid-cols-3 mt-20 lg:ml-32 lg:mr-32 xl:ml-60 xl:mr-60 ">
                        <div class="shadow-xl bg-amber-300/50   rounded-2xl lg:w-72">
                        <MdFastfood class="mx-auto  mt-5" size={50}/>

                            <p class="text-2xl mt-10">FREE FOOD!</p>
                            <p class="p-5">Meals, snacks and plenty of caffeine will be provided throughout the weekend</p>
                        </div>
                        <div class="shadow-xl bg-amber-300/50  rounded-2xl lg:w-72">
                            <HiUserGroup class="mx-auto mt-5" size={50}/>

                            <p class="text-2xl mt-10">TEAMWORK</p>
                            <p class="p-5">Teams of 2-5 students work together to tackle a data analysis challenge. Registration preference is given to pre-formed teams of 4-5. Team formation networking events will be held in the weeks prior to the event.</p>
                        </div>
                        <div class="shadow-xl  bg-amber-300/50   rounded-2xl lg:w-72">
                            <BiNetworkChart class="mx-auto  mt-5" size={50}/>

                            <p class="text-2xl mt-10">CONSULTANTS</p>
                            <p class="p-5">Graduates and local business professionals will be available to help you brainstorm and design throughout the event. This is a great opportunity to network with potential local employers.</p>
                        </div>
                    </div>
                    <div class="grid lg:grid-cols-3  lg:ml-32 lg:mr-32 xl:ml-60 xl:mr-60 lg:mt-20">
                        <div class="shadow-xl rounded-2xl bg-amber-300/50 lg:w-72">
                            <BsFileSpreadsheet class="mx-auto  mt-5" size={50}/>

                            <p class="text-2xl mt-10">DATA CHALLENGE</p>
                            <p class="p-5">Challenge yourself by exploring a rich and complex data set. Create informative visualizations to help answer real world data problems.</p>
                        </div>
                        <div class="shadow-xl rounded-2xl bg-amber-300/50 lg:w-72" >
                            <BsBraces class="mx-auto  mt-5" size={50}/>

                            <p class="text-2xl mt-10">NO CODING EXPERIENCE NECESSARY</p>
                            <p class="p-5">Some of the best teams have someone great at storytelling, that isn’t lost in the coding woods. DataFest prep training workshops will be held during Spring.</p>
                        </div>
                        <div class="shadow-xl rounded-2xl bg-amber-300/50   lg:w-72">
                            <FaFlagCheckered class="mx-auto  mt-5" size={50}/>

                            <p class="text-2xl mt-10">FRIENDLY COMPETITION</p>
                            <p class="p-5">Each team will present their results to a panel of judges. Judges will select teams to win prizes for areas such as ‘Best Insight’, ‘Best Visualization’, and ‘Best use of external data’.</p>
                        </div>
                    </div>

                </div>
                {/*Footer Section */}
                <div class="w-full mt-10 " style={{backgroundColor: "#004e38"}}>
                    <div class="grid lg:grid-cols-2 ">
                        <div>
                            <img class="text-black" src="./dslogo_new.png"/>

                        </div>
                        <div class="w-full grid lg:grid-cols-2 mt-10 ">
                            <div>
                                <p class="text-font text-amber-100/90 text-2xl mt-10">Contact Us</p> 
                                <p class="mt-5 text-white text-lg">datascience@csus.edu</p>
                            </div>
                            <div class="text-center mx-auto">
                                <p class="text-font  text-amber-100/90 mt-10 text-2xl ">Socials!</p>
                                <div class="grid grid-cols-3 ">

                                    <div class="p-5">
                                        <a href="https://www.youtube.com/channel/UCjIHLZyFTx3Ek7LwUrGeACA" target="_blank">
                                            <AiOutlineYoutube class="text-white " size={30}/>
                                        </a>
                                    </div>
                                    <div class="p-5">
                                        <a  href="https://discord.gg/vazT5MaAmT" target="_blank">
                                            <RxDiscordLogo  class="text-white " size={30}/>
                                        </a>
                                    </div>
                                    <div class="p-5">
                                        <a  href="https://linktr.ee/dsatcsus" target="_blank">
                                            <SiLinktree class="text-white  " size={30}/>
                                        </a>
                                    </div>
                            </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}