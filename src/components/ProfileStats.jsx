const ProfileStats = ({ blogs, followers, following }) => {
    return (
        <div className="flex flex-row gap-5">
            <div className="flex flex-col items-center">
                <p className="font-bold text-gray-400 text-xl">{blogs}</p>
                <p className="text-gray-400">Blogs</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold text-gray-400 text-xl">{followers}</p>
                <p className="text-gray-400">Followers</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold text-gray-400 text-xl">{following}</p>
                <p className="text-gray-400">Following</p>
            </div>
        </div>
    )
}

export default ProfileStats