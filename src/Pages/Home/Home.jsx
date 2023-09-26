import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Cards from "../../Components/Cards/Cards";

const Home = () => {

    const allData = useLoaderData();
    // console.log(data)

    return (
        <div>
            <Banner></Banner>
            <div className="py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    allData.map(data => <Cards key={data.id} data={data}></Cards>)
                }
            </div>
        </div>
    );
};

export default Home;