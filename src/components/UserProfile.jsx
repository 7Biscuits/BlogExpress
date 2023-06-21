import ProfileStats from "./ProfileStats"
// import Button from "./Button"

const UserProfile = ({ username, blogs, followers, following }) => {
    return (
        <div className="p-32">
            <div className="flex flex-col">
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <img className="inline-block rounded-full w-32 h-32 lg:w-13 lg:h-13 cursor-pointer" src="https://www.asiamediajournal.com/wp-content/uploads/2022/11/Default-PFP.jpg" alt="user" />
                    <h1 className="text-4xl font-medium text-gray-700">{username}</h1>
                    <p className="font-light text-gray-600 mb-3">{username}</p>
                    <ProfileStats blogs={blogs} followers={followers} following={following} />
                </div>
            </div>
        </div>
    )
}

export default UserProfile