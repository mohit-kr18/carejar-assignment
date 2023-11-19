import { useEffect } from 'react';
import classes from './Home.module.css';
import { getServices } from '../api/services';
import Service from './Service';
import { useState } from 'react';

const Home = () =>{

    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchService = async () => {
            const services = await getServices();
            console.log(services);
            setServices(services);
        }
        fetchService();
    }, [])

    return (
        <div className={classes.home_wrapper}>
         <h1>Book an appointment for an in-clinic consultaion </h1>
         <h3>Find experienced doctors across all specialties</h3>
         <div className={classes.service}>
            {services.map((service)=>{
                return (<Service  key={service.id} image={service.image} type={service.type} serviceType={service.serviceType} description={service.description}  />
                
                )
            })}

         </div>
        </div>
    )
}

export default Home;