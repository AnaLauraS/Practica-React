import {Link} from 'react-router-dom';
import banner from '../img/Banner.jpg';

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/lista'>Lista</Link></li>
                <li><Link to='/'>Detalle</Link></li>
                <li><Link to='/'>Carrito</Link></li>
            </ul>
            <img src={banner} alt="Banner" />
        </div>
    )
}

export default Header;