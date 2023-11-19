import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () =>{

    const navigate = useNavigate();

    const handleHomeNavigate = () =>{
        navigate('/')
    }

    return (
        <div className={classes.header_wrapper}>
            <h1 className={classes.left_section} onClick={handleHomeNavigate}>
                Care Jar
            </h1>
        </div>
    )
}

export default Header;