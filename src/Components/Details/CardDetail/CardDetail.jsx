import swal from "sweetalert";


const CardDetail = ({ detail }) => {

    const { id, picture, title, text_button_bg_color, description, price } = detail;

    const handleAddToDonation = () => {

        const addedDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if (!donationItems) {
            addedDonationArray.push(detail)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal("Thank You!", "Your donation added!", "success");
        }
        else {

            const isExists = donationItems.find(donation => donation.id === id)
                addedDonationArray.push(...donationItems, detail)
                localStorage.setItem('donation', JSON.stringify(addedDonationArray))
                swal("Thank You!", "Your donation added!", "success");

        }
    }

    return (
        <div>
            <div className="h-[65vh] relative">
                <img className="w-full h-full" src={picture} alt="" />
                <div className="absolute bg-[#0000004D] w-full bottom-0 py-8 px-6">
                    <button onClick={handleAddToDonation}
                        style={{ backgroundColor: text_button_bg_color }} className="py-4 px-3 rounded-lg border-none text-xl font-semibold text-white">Donate ${price}</button>
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