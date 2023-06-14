import Hero from "../components/Hero"
import RecentBlogs from "../components/RecentBlogs"

const Index = () => {

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="mt-48">
          <Hero />
        </div>
        <RecentBlogs />
      </div>
    </>
  )
}

export default Index