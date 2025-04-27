
const NewsLetter = () => {
    return (
        <div className="absolute top-0 hero rounded-3xl" style={{ backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",}} >
            <div className="hero-overlay rounded-3xl"></div>
            
            <div className="hero-content text-neutral-content text-center m-4 md:m-10">
                <div className="max-w-md">
                    <h1 className=" text-3xl font-bold">Subscribe to our Newsletter</h1>
                    <p className="my-3 md:my-5">Get the latest updates and news right in your inbox!</p>
                    <div className="flex justify-center">
                        <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs text-sec" />
                        <button className="btn btn-accent ml-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;