import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { BodyPill } from "../components/body-pill"

const IndexPage = () => (
  <Layout>
    <BodyPill
      header="Projects"
      subtitle="See what I'm up to."
      link="/projects"
    />
    <BodyPill
      header="Contact"
      subtitle="Get in touch."
      link="/contact"
    />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
