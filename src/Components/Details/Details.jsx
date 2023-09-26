import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetail from './CardDetail/CardDetail';

const Details = () => {

    const [detail, setDetail] = useState({})


    const {id} = useParams()

    const allData = useLoaderData()

    useEffect(()=>{
            const findDetail = allData.find(detail=> detail.id === id)

            setDetail(findDetail);

    },[id,allData])

    return (
        <div>
            <CardDetail detail={detail}></CardDetail>
        </div>
    );
};

export default Details;