import classes from './Header.module.css';
import { CgSearch } from "react-icons/cg";
import { Text } from '@mantine/core';
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
            <div className={classes.right_section}>
            <Text  className={classes.btn}>Services</Text>
               <div className={classes.search_wrapper}>
                    <input type="text" />          
                    <CgSearch className={classes.search} size={20}/>
               </div>
            </div>
        </div>
    )
}

export default Header;