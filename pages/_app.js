import Head from 'next/head'
import GlobalStyles from './../components/GlobalStyles'

const App = ({ Component, pageProps }) => (
  <>
        <Head>
        <title>Tolly</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
			rel="stylesheet"
		/>
      </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App