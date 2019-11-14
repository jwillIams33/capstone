import React from "react"
import PageContent from "../components/pageContent"

const Page = ({ location }) => {
  return <PageContent color={location.state.color} />
}

export default Page
