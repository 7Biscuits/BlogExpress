import { Link } from "react-router-dom"

const Form = ({ heading, label1, label2, footerText, footerA1, footerA2, redirectLink, userInfo }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!e.target.username.value) return alert('Please enter your username')
        if (!e.target.password.value) return alert('Please enter your password')

        userInfo(e.target.username.value, e.target.password.value)
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-gray-900 rounded-md shadow-md max-w-md lg:max-w-xl md:max-w-xl xl:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-600">
                    {heading}
                </h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-2">
                        <label
                            for="username"
                            className="block text-sm font-semibold text-blue-600"
                        >
                            {label1}
                        </label>
                        <input
                            type="username"
                            name="username"
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-blue-600"
                        >
                            {label2}
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-blue-600 hover:underline"
                    >
                        {footerA1}
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                            {heading}
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-500">
                    {" "}
                    {footerText}{" "}
                    <Link to={redirectLink}
                        className="font-medium text-blue-600 hover:underline"
                    >
                        {footerA2}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Form