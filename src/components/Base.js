import Footer from './Footer/Footer'
import Homebar from './Navbar/Navbar'

const Base = ({children}) => {
  return (
    <div>
        <Homebar/>
            {children}
        <Footer />

    </div>
  )
}

export default Base