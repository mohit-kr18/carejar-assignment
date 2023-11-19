import { Link } from 'react-router-dom';
import classes from './Service.module.css';


const Service = ({image,serviceType,type,description}) =>{

    return (
        
        <Link to={`/specialist/${type}`} className={classes.service}>
                <img src={image} alt="" />
            <div className={classes.service_desp}>
                <h3>{serviceType}</h3>
                <p>{description}</p>
            </div>   
        </Link>

    )
}

export default Service;