import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <Card
        title="React for Designers"
        text="12 sections"
        image={require("../images/wallpaper.jpg")}
      />
    </div>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
