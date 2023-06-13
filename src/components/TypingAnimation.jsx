import Typed from "typed.js";
import { useEffect, useRef } from "react";

const TypingAnimation = ({ string1, string2, string3, string4, string5 }) => {

    const text = useRef(null);

    useEffect(() => {
        const typed = new Typed(text.current, {
            strings: [string1, string2, string3, string4, string5],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: ""
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <p ref={text} className="font-[500] text-md md:text-2xl lg:text-3xl text-slate-100 h-10"></p>
    )
}

export default TypingAnimation