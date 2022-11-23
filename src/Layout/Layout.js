import Navbar from '../components/Navbar/Navbar'
import SecondNavbar from '../components/SecondNavbar/SecondNavbar';
import './Layout.css'





const Layout = (props) => {

    return ( 
        <div>
            <Navbar/>
            <SecondNavbar/>
            <div className='layout'>
                {props.children}
            </div>
            
        </div>
     );
}
 
export default Layout;