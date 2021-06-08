import {NavLink} from 'react-router-dom'
import '../styles/Header.css'
export function Header ( props ) {
    const Navigation = props.nav.map( (item) => {
        return (
            <NavLink 
                to ={item.link}
                activeClassname="active"
                exact={ (item.link==="/") ? true : false }
        >
                {item.name}
            </NavLink>
        )

    } )
    return (
    <header className="header">
        <img className="logo" src={props.logo} alt="Sorrento Apartment logo" />
        <nav className ="navigation">
            {Navigation}

        </nav>
    </header>
    )
}

export default Header