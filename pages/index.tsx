import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import Link from 'next/link'
import Layout from '../components/Layout'

// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { ApolloProvider } from '@apollo/client';

// const client = new ApolloClient({
//   uri: process.env.API,
//   cache: new InMemoryCache()
// });

const IndexPage = () => (
  // <ApolloProvider client={client}>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/products">product</Link>
      </p>
    </Layout>
  // </ApolloProvider>
)

export default IndexPage;
