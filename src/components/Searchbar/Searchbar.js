import { useState } from "react";
import "./Searchbar.css"



const Searchbar = ({placeholder='', data=[], quantity=0}) => {

    const [filteredData, setFilteredData] = useState([])
    

    const handleFilter = (event) => {
        const searchWord = event.target.value
        
        
        if(searchWord === ""){
            setFilteredData([])
        }else {
            const newFilter = data.filter((value) => {
                return value.title.toLowerCase().includes(searchWord.toLowerCase())
            })
            setFilteredData(newFilter)
        }

    }

    return ( 
        <div className="search">
            <div className="search-box">
                <input className="search-input" type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            
            {data.length > 0 && filteredData.length > 0 && <div className="search-result">
                {filteredData.slice(0,quantity).map((value,key)=> {
                    return (
                        <div className="data-item" key={key}> { value.title } </div>
                    )
                })}
            </div>}

        </div>
    );
}
 
export default Searchbar;