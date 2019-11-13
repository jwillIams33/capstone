import React from "react"
// import storage from "../components/storage"
import PageContent from "../components/pageContent"

// const queenURLs = roomURL.map(url => url.queen)
// const checkOutDate = storage.get("checkOutDate")
// const guests = storage.get("numberOfGuests")

const Page = ({ location }) => {
  return <PageContent color={location.state.color} />
}

export default Page
