import Theme from '../src/styles/theme.js'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default App