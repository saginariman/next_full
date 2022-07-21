import Head from "next/head"
import A from "../components/A"

const MainContainer = ({children, keywords, page_title}) => {
  return (
    <>
        <Head>
            <meta keywords={"ulbi tv, nextjs "+keywords} ></meta>
            <title>{page_title}</title>
        </Head>
        <div className="navbar">
            <A href="/">Главная</A>
            <A href="/users">Пользователи</A>
        </div>
        <div>
            {children}
        </div>
        
        <style jsx>
            {`
                .navbar {
                    background: orange;
                    padding: 15px;
                }
                
            `}
        </style>
    </>
  )
}

export default MainContainer