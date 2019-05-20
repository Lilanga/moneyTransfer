import Head from 'next/head'
import { Container } from 'reactstrap'
import 'bootstrap-css-only/css/bootstrap.min.css';

const Layout = (props) => (
  <div>
    <Head>
      <title>Money Transfer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>
      {props.children}
    </Container>
  </div>
)

export default Layout