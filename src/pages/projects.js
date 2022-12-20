import * as React from "react"
import { BodyPill } from "../components/body-pill"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Projects = () => (
  <Layout>
    <BodyPill
      header="BlakeChartrand.com"
      subtitle="Personal contact website / digital business card"
      bodyCopy="This website is made with ReactJS, Gatsby and Tailwind."
    />
  </Layout>
)

export const Head = () => <Seo title="Projects" />

export default Projects
