import Hero from "@/components/homeComponents/hero"
import FeaturedPosts from "@/components/homeComponents/featuredPosts"
import { Fragment } from "react"

function HomePage(){
    return (
      <Fragment>
        <Hero />
        <FeaturedPosts />
      </Fragment>
    )
  }
  
  export default HomePage
