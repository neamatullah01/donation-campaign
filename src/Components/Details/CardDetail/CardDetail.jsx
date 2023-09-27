

const CardDetail = ({detail}) => {

    const {picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, description, price } = detail;

    return (
        <div>
            <div className="h-[60vh] relative">
                <img className="w-full h-full" src={picture} alt="" />
                <div className="absolute bg-[#0000004D] w-full bottom-0 py-8 px-6">
                    <button style={{backgroundColor: text_button_bg_color}} className="py-4 px-3 rounded-lg border-none text-xl font-semibold text-white">Donate ${price}</button>
                </div>
                <div className="py-8">
                    <h1 className="text-4xl font-bold py-8">{title}</h1>
                    <p className="text-base font-normal">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;