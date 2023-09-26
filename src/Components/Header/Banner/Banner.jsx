

const Banner = () => {
    return (
        <div
            className="h-[70vh] bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1iHjVSDlr0IdVaROO5H5jLL55Nlqc7etzJl89zd14a68j7Mt8X96F19Vw')] bg-cover bg-center">

            <div className="w-full h-full flex  justify-center items-center 
             bg-gray-50/70 backdrop-brightness-75">

                <div className="text-center">
                    <h1 className="text-[#0B0B0B] text-5xl font-bold py-8">I Grow By Helping People In Need</h1>
                    <div>
                        <input type="text" placeholder="Search here..." className="py-3 px-4 rounded-l-lg w-full max-w-sm" />

                        <button className="btn btn-secondary rounded-l-none">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;