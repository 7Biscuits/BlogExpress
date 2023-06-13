import { Link } from "react-router-dom"
import Button from "./Button"

const Form = ({ heading, text, text2, text3, btnText, link, fplink, userInfo }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!e.target.username.value) return alert('Please enter your username');
        if (!e.target.password.value) return alert('Please enter your password');

        userInfo(e.target.username.value, e.target.password.value)

        e.target.username.value = ""
        e.target.password.value = ""
    }

    return (
        <div class="relative flex flex-col justify-center min-h-screen max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="px-6 py-4">
                <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">{heading}</h3>

                <p class="mt-1 text-center text-gray-200 dark:text-gray-400">{text}</p>

                <form onSubmit={handleSubmit}>
                    <div class="w-full mt-4">
                        <input class="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="username" name="username" placeholder="Username" aria-label="Username" />
                    </div>

                    <div class="w-full mt-4">
                        <input class="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" name="password" placeholder="Password" aria-label="Password" />
                    </div>

                    <div class="flex items-center justify-between mt-4">
                        <Link to="#" class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-400">{fplink}</Link>

                        <Button text={btnText} />
                    </div>
                </form>
            </div>

            <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span class="text-sm text-gray-600 dark:text-gray-200">{text2}</span>

                <Link to={link} class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">{text3}</Link>
            </div>
        </div>
    )
}

export default Form