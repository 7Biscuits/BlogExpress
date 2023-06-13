import Post from "./Post"

const RecentBlogs = () => {
    return (
        <div className="flex flex-col justify-center mt-10">
            <p className="font-[400] ml-10 text-md md:text-2xl text-slate-100">Recently added</p>
            <div className="relative flex flex-col items-center mt-5 mx-3">
                <div className="flex flex-col lg:flex-row py-0 md:py-2 gap-2">
                    <Post />
                    <Post />
                </div>
                <div className="flex flex-col lg:flex-row py-0 md:py-2 gap-2">
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default RecentBlogs