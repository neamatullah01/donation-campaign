import PropTypes from 'prop-types';

const DonationCard = ({ data }) => {

    const {picture, card_bg_color, category_bg_color, title, category, text_button_bg_color, price } = data;
    return (
        <div>
            <div style={{ backgroundColor: card_bg_color }} className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="h-full" src={picture} alt="Album" /></figure>

                <div className="card-body">
                    <h4 style={{ color: text_button_bg_color, backgroundColor: category_bg_color }} className="block font-sans text-base font-medium text-center w-24 rounded-md shadow">
                        {category}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-semibold leading-relaxed text-black">
                        {title}
                    </p>

                    <h3 style={{ color: text_button_bg_color }} className="text-lg font-semibold">${price}</h3>

                    <div className="card-actions">
                        <button
                           style={{ backgroundColor: text_button_bg_color }} className="py-2 px-3 rounded-md border-none text-lg font-medium text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

DonationCard.propTypes ={
    data: PropTypes.object
}

export default DonationCard;