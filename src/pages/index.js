import ProductList from '../containers/ProductList.jsx';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Shop</title>
      </Head>
      <ProductList />;
    </>
  );
}
