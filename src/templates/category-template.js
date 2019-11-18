import React from "react"
import ResponsiveHeader from "../components/layout/responsiveHeader"
import { Link } from "gatsby"
import PageContent from "../components/layout/pageContent"
import { rooms, title, copy } from "../data/content"

const Category = ({ pageContext: { category } }) => {
  const color = category.color

  return (
    <>
      <PageContent color={color} />
    </>
  )
}

export default Category
