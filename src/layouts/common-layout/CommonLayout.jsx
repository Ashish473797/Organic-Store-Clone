import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function CommonLayout({children}) {
  return (
    < >
        <Navbar/>
            {children}
        <Footer/>
    </>
  )
}

export default CommonLayout