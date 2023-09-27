import { useEffect } from "react";
import { useState } from "react";

const Donation = () => {


    const [donations, setdonations] = useState([])

    useEffect(()=>{

        const donationItems = JSON.parse(localStorage.getItem('donation'));
        setdonations(donationItems)

    },[])

    console.log()


    return (
        <div>
            donation
        </div>
    );
};

export default Donation;