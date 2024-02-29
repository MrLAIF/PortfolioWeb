import { useContext } from "react";
import { PortfolioContext } from "../../Context";

const Navbar = ({moveToAboutMe, moveToProjects, moveToContact}) => {
    const context = useContext(PortfolioContext)
    return (
        <div>
            <ul className="fixed flex justify-end items-center gap-4 right-10 h-[64px] text-[20px] z-30">
                <li className="cursor-pointer" onClick={() => context.setHead(false)}>Home</li>
                <li className="cursor-pointer" onClick={moveToAboutMe}>About</li>
                <li className="cursor-pointer" onClick={moveToProjects}>Projects</li>
                <li className="cursor-pointer" onClick={moveToContact}>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;