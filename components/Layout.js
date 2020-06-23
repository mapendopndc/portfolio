import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>Portfolio</title>
            <link rel="icon" href="/favicon.png" />
            <link rel="stylesheet" href="https://use.typekit.net/dxb3emo.css" />
        </Head>
        {props.children}
    </div>
)

export default Layout;