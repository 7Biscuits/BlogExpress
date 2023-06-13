import Hero from "../components/Hero"
import RecentBlogs from "../components/RecentBlogs"

const Index = () => {

  return (
    <>
      <div className="relative min-h-screen top-52 flex flex-col justify-center">
        <Hero />
        <RecentBlogs />
      </div>
    </>
  )
}

export default Index