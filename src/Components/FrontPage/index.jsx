import {ChevronDoubleDownIcon} from "@heroicons/react/24/solid"
import GithubIcon from "../../icons/GithubIconn.png"
import { useContext, useState } from "react"
import { PortfolioContext } from "../../Context"

const FrontPage = () => {
  // const [head, setHead] = useState(false);
  const {head, setHead} = useContext(PortfolioContext)

  const loll = () => {
    setHead(true)
  }
  
    return (
        <div className={`w-[100%] flex items-center justify-center fixed z-20`}>
            <div className={`fixed flex justify-center items-center text-[120px] leading-none ${head ? "name-header-an" : "name-header-an-rev"}`}>
              <p className="name-an">Erikc A.<br /> Dev</p>
            </div>
            <div className={`sub-an fixed top-[65%] left-[17.5%] ${head ? "subtitlee" : undefined}`}>
              <p className="mb-4">Web Developer</p>
              {/* TODO: change the link to github page */}
              <button onClick={() => window.location.href='https://youtube.com'} className="w-7">
                <img src={GithubIcon} alt="Github" />
              </button>
            </div>
            <div className={`fixed  flex justify-center items-center w-[400px] ${head ? "photo-header-an" : "photo-header-an-rev"}`}>
              <img className="-z-10 ph-an object-cover" src="https://cdn.discordapp.com/attachments/1158878065385021491/1206432831346319382/bleh.jpg?ex=65ee7221&is=65dbfd21&hm=2afd559154cceff26774d3c22ff7d1b0734bed9052dfa5d36963075e537ba1a6&" alt="lol" />
            </div>
            
            <div className={`fixed w-10 bottom-8 rounded-full p-1 flex items-center justify-center button-in cursor-pointer`}
            onClick={() => loll()}>
              <ChevronDoubleDownIcon />
            </div>
        </div>
    )
}

export default FrontPage