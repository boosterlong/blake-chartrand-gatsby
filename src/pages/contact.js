import * as React from "react"
import { BodyPill } from "../components/body-pill"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <BodyPill
      header="Email"
      subtitle="chartrandblake93@gmail.com"
    />
    <BodyPill
      header="Phone"
      subtitle="778-220-4871"
    />
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default Contact
