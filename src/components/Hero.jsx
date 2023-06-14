import { Link } from "react-router-dom"
import TypingAnimation from "./TypingAnimation"

const Hero = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="font-[700] text-6xl lg:text-8xl text-center text-transparent animate-text bg-clip-text bg-gradient-to-r from-slate-50 via-purple-400 to-purple-600">BlogExpress</div>
            <div className="my-3">
                <TypingAnimation string1={"Create and Customize Your Blog"} string2={"Easy Content Creation"} string3={"Engage with Readers"} string4={"Discover and Follow Other Bloggers"} string5={"User-Friendly & Responsive Interface"} />
            </div>
            <div className="flex flex-row gap-5 my-2">
                <Link to={"/signup"} className="px-4 py-2 md:px-5 md:py-3 text-sm md:text-md text-white bg-purple-600 hover:bg-purple-800 rounded-md cursor-pointer ease-in-out duration-100">Sign up</Link>
                <a className="px-4 py-2 md:px-5 md:py-3 text-sm md:text-md text-purple-600 bg-white hover:bg-slate-200 rounded-md cursor-pointer ease-in-out duration-100">Discover</a>
            </div>
        </div>
    )
}

export default Hero