import { Button } from '@mantine/core';
import classes from "./AppointmentCard.module.css";
import { MdOutlineEventAvailable } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

const AppointmentCard = ( props) =>{
   console.log(props);
    return (
        <div className={classes.appointment}>
                <img src={props.data?.img} alt="" />
                <div className={classes.middle_section}>
                    <div>
                        <h2>{props.data.name}</h2>
                        <p>{props.data.specialist}</p>
                        <p>{props.data.experience}</p>
                        <h5>{props.data.location}</h5>
                        <p>{props.data.fee}</p>
                    </div>
                    <div className={classes.middle_bottom}>
                        <Button variant="filled" color="green" size="xs" radius="xs">
                        <AiFillLike /> 96%
                        </Button>
                        <p>17 Patient Stories</p>
                    </div>
                </div>
                <div className={classes.right_section}>
                    <div className={classes.available}>
                        <MdOutlineEventAvailable color='green' />
                         <p>Available Today</p>
                    </div>
                    <Button >Book Appointment <br/> No Booking Fee
                    </Button>
                </div>
        </div>
    )
}

export default AppointmentCard;