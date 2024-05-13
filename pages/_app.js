import { Fragment } from "react";
import Head from "next/head";
import GlobalStyles from "./styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>HEALTH new</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');`,
          }}
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
