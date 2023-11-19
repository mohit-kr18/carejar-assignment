import classes from "./Specialist.module.css";
import AppointmentCard from "./AppointmentCard";
import { getServices } from "../api/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Specialist = () => {
  const [doctors, setDoctors] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await getServices();
      console.log(res);
      const service = res.find((service) => service.type === type);
      console.log(service);
      setDoctors(service.doctors);
    };
    fetchDoctors();
  }, []);

  return (
    <div className={classes.specialist_wrapper}>
      {doctors.map((data) => {
        return <AppointmentCard data={data} />;
      })}

      {/* <AppointmentCard data={data}/> */}
    </div>
  );
};

export default Specialist;
