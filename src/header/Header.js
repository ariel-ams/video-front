import UploadIcon from '@material-ui/icons/CloudUpload';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
    return (
        <div className="header">
            <div className="header__left">
                <Link to='/'>
                    <h3 className="header__logo">My Videos</h3>
                </Link>
            </div>

            <div className="header__right">
                <Link to='/upload'>
                    <UploadIcon className="header__icon" />
                </Link>
            </div>
        </div>
    )
}

export default Header;