import React from "react"

import Layout from "../components/layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não encontrada" />
    <h1>Página não encontrada</h1>
    <p>A página procurada não existe neste site. Verifique o endereço digitado.</p>
  </Layout>
)

export default NotFoundPage
