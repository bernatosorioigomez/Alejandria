import './Home.css'
import Carrousel from '../../components/Carrousel/Carrousel';

const Home = () => {
    return ( 
        <div className="page-container">
            <div className="promo-container">
                <p>On sale! All our books have 5% discount!</p>
            </div>
            <Carrousel title='Top Fantasy'></Carrousel>
            <Carrousel title='Top Crime'></Carrousel>
            <Carrousel title='Top Romance'></Carrousel>
            {/* <div>hello</div> */}
            {/* <Carrousel></Carrousel> */}

            {/* <div className="book-carrousel-section">
                <div className="section-title">
                    Section Title
                </div>
                <div className="book-carrousel">
                    <div className="book">
                        
                    </div>
                    <div className="book">
                        
                    </div>
                    <div className="book">
                        
                    </div>
                </div>
            </div> */}
            
            

        </div>
     );
}
 
export default Home;