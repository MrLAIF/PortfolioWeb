import { forwardRef } from "react"

const AboutMe = ({},ref) => {
    return (
        <div className="w-full min-h-[100vh] px-10 flex flex-col items-center justify-center" ref={ref}>
            <div className="flex gap-5">
                <h1 className="text-[73px] [font-family:_'nunito',_sans-serif]">About</h1>
                <h1 className="text-[70px]">me</h1>
            </div>
            <div className="text-center text-[22px]">
                <p>Hello! I'm Erikc</p>
                <p>A passionate web developer with a keen eye for detail</p> 
                <p>and a love for creating engaging digital experiences.</p>
                <p>Yadda Yadda Yadda</p>
            </div>
        </div>
    )
}

export default forwardRef(AboutMe)