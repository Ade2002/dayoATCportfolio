import Head from 'next/head'
const HEAD = () => {
  return (
    <Head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:site_name' content='Ade Sikiru' />
      <meta
        property='og:title'
        content='Ade Sikiru - Jire me for great and awesome websites!!'
      />
      <meta property='og:url' content='https://adee.tech' />
      <meta property='og:type' content='website' />
      <meta
        property='og:description'
        content='Suitable platform for Student entrepenuers, Business men and women, Traders, Marketers, e.t.c'
      />
      <meta property='og:image' content='favico.ico' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <title> ADE </title>
      <link
        rel='apple-touch-icon'
        type='image/svg'
        href='/favico.ico'
        sizes='167x167'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        href='/favico.ico'
        sizes='152x152'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        href='/favico.ico'
        sizes='180x180'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        href='/favico.ico'
        sizes='120x120'
      />
      <Link legacyBehavior rel='apple-touch-icon' type='image/png' href='/favico.ico' />
      <Link legacyBehavior rel='shortcut icon' href='/assets/img/atc_background.ico' />
      <link
        rel='shortcut icon'
        type='image/png'
        href='/favico.ico'
        sizes='196x196'
      />
      <Link legacyBehavior rel='icon' href='/favicon.ico' />
      <link
        rel='shortcut icon'
        type='image/png'
        href='/favico.ico'
        sizes='192x192'
      />
      <link
        rel='shortcut icon'
        type='image/png'
        href='/favico.ico'
        sizes='128x128'
      />
    </Head>
  )
}

export default HEAD
