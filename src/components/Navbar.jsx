import { useState, useEffect } from "react";
import User from "./User";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie"

const Navbar = () => {

    const cookies = new Cookies();

    let [username, setUsername] = useState('null');
    let [isSignedIn, setIsSignedIn] = useState(false);

    const userId = cookies.get('userid');

    const fetchUser = async () => {
        await fetch(`http://localhost:8080/users/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(async (response) => {
            const user = await response.json();
            setUsername(user.username);
            setIsSignedIn(true);
        });
    }

    useEffect(() => {
        if (userId) fetchUser();
    }, [userId]);

    const signout = async () => {
        await fetch('http://localhost:8080/auth/signout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        }).then(async (response) => {
            const res = await response.text();
            alert(res);
            window.location.reload(false);
        });
    }

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="bg-transparent">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <svg viewBox="0 0 283 301" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:h-5 md:w-5 lg:w-6 lg:h-6"><path d="M141.5 300.18c-18.582 0-36.982-3.882-54.15-11.425-17.167-7.543-32.766-18.598-45.906-32.535-13.14-13.938-23.562-30.483-30.673-48.693C3.66 189.317 0 169.8 0 150.09s3.66-39.227 10.771-57.437c7.111-18.21 17.534-34.756 30.673-48.693 13.14-13.937 28.739-24.992 45.906-32.535C104.518 3.882 122.918 0 141.5 0v300.18zM159.965 186.907c11.729 0 38.102-2.415 48.937-7.106 10.836-4.691 20.681-11.567 28.974-20.236 8.294-8.668 14.872-18.958 19.36-30.284a97.03 97.03 0 006.798-35.723 97.03 97.03 0 00-6.798-35.723c-4.488-11.326-11.066-21.616-19.36-30.285-8.293-8.668-18.138-15.544-28.974-20.235C198.067 2.624 171.694.21 159.965.21V186.907z" fill="#fff"></path><ellipse cx="225.351" cy="65.8933" rx="15.7222" ry="16.4733" fill="#fff"></ellipse><path d="M154.632 299.583a54.756 54.756 0 013.998-20.554 53.809 53.809 0 0111.384-17.425 52.456 52.456 0 0117.037-11.643 51.512 51.512 0 0120.098-4.088 51.51 51.51 0 0120.097 4.088 52.46 52.46 0 0117.038 11.643 53.841 53.841 0 0111.384 17.425 54.775 54.775 0 013.997 20.554H154.632z" fill="#fff"></path></svg>
                        <span className="font-[800] text-md lg:text-lg text-slate-100">BlogExpress</span>
                    </div>
                    <div className="flex flex-row-reverse items-center">
                        {isSignedIn ? <User username={username} handleClick={signout} /> : <Link to={"/signin"} className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:text-slate-200 dark:hover:text-white hover:border-white mx-1.5 sm:mx-6">Sign in</Link>}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar