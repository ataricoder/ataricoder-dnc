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
      <div className="CardGroup">
        <Card
          title="Design Systems"
          text="10 sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="ARKit 2"
          text="10 sections"
          image={require("../images/wallpaper4.jpg")}
        />
      </div>
    </div>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
