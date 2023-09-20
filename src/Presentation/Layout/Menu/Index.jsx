import React , {useState} from "react";
import '../../Assets/Styles/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faExclamationTriangle, faFileCode, faGear} from '@fortawesome/free-solid-svg-icons';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

{/*https://fontawesome.com/search?q=sett&o=r&s=thin */}

function Menu(){

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
      };

    return(
        <>

        <div className={isActive ? 'menu-container open' : 'menu-container' } >
                <div className="menu-semi-circle-outer"></div>
                <div className="menu-semi-circle-inner"></div> 

                <div className="menu-main-button" onClick={handleClick} >Menu</div>
                    <div className="menu-outer-circle-main-button"></div>  
                    <div className="menu-outer-circle-external-main-button"></div>  
                
                <CustomLink to="/" className="site-title">
                    <div className="menu-secondary-button menu-page-1">
                        <div className="menu-outer-circle-secondary-button"></div> 
                        <i><FontAwesomeIcon icon={faHome}/></i>    
                        <div className="menu-secondary-button-title">Home</div>               
                    </div>
                </CustomLink>

                <CustomLink to="/log">
                    <div className="menu-secondary-button menu-page-2">
                        <div className="menu-outer-circle-secondary-button"></div>
                        <i><FontAwesomeIcon icon={faFileCode} /></i>                
                        <div className="menu-secondary-button-title">Logs</div> 
                    </div>
                </CustomLink>

                <CustomLink to="/charts">
                    <div className="menu-secondary-button menu-page-3">
                        <div className="menu-outer-circle-secondary-button"></div>
                        <i><FontAwesomeIcon icon={faChartLine} /></i>                
                        <div className="menu-secondary-button-title">Chart</div> 
                    </div>
                </CustomLink>

               <CustomLink to="/alarms">
                    <div className="menu-secondary-button menu-page-4"> 
                        <div className="menu-outer-circle-secondary-button"></div>
                        <i><FontAwesomeIcon icon={faExclamationTriangle} /></i>                
                        <div className="menu-secondary-button-title">Alarms</div>   
                    </div>
                </CustomLink>

                <CustomLink to="/setting">
                    <div className="menu-secondary-button menu-page-5">
                        <div className="menu-outer-circle-secondary-button"></div>
                        <i><FontAwesomeIcon icon={faGear} /></i>
                        <div className="menu-secondary-button-title">Setting</div>       
                    </div>    
                </CustomLink>
                
        </div>
            
        
        </>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return(
            <i className={isActive ? "active": null}>
                <Link to={to} {...props}>
                    {children}    
                </Link>
            </i>
    )
}

export default Menu