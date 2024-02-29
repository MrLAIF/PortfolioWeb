import { forwardRef } from "react"
import AboutMe from "../AboutMe"
import ProjectsSection from "../ProjectsSection"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import ContactSection from "../ContactSection"

const ActualContent = ({}, ref) => {
    return (
        <>
            <Parallax pages={3}>
                <ParallaxLayer>
                    <AboutMe ref={ref.aboutMeRef}/>
                </ParallaxLayer>
                
                <ParallaxLayer offset={1}>
                    <ProjectsSection ref={ref.projectsRef}/>
                </ParallaxLayer>

                <ParallaxLayer offset={2}>
                    <ContactSection ref={ref.contactRef} />
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default forwardRef(ActualContent)