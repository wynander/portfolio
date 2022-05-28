import Theme from '../src/styles/theme.js';

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 