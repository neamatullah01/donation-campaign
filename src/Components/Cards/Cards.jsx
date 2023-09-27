import { Link } from "react-router-dom";


const Cards = ({ data }) => {

    const { id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color} = data;

    return (
        <Link to={`/details/${id}`}>
            <div style={{backgroundColor: card_bg_color}} className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={picture}
                    />
                </div>
                <div className="p-6">
                    <h4 style={{ color: text_button_bg_color, backgroundColor: category_bg_color }} className="block font-sans text-base font-medium text-center w-24 py-2 rounded-md shadow">
                        {category}
                    </h4>
                    <p style={{ color: text_button_bg_color }} className="mt-3 block font-sans text-xl font-semibold leading-relaxed">
                        {title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Cards;