

const CardDetail = ({detail}) => {

    const {picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, description, price } = detail;

    return (
        <div>
            <div className="h-[60vh]">
                <img className="w-full h-full" src={picture} alt="" />
                <button>Donate {price}</button>
            </div>
        </div>
    );
};

export default CardDetail;