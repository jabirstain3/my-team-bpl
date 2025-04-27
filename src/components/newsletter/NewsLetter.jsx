
const NewsLetter = () => {
    return (
        <div className="absolute top-0 hero rounded-3xl bg-gradient-to-r from-cyan-200 via-white to-orange-300" >
            
            <div className="hero-content text-neutral-content text-center m-4 md:m-10">
                <div className="max-w-md">
                    <h1 className="text-black text-3xl font-bold">Subscribe to our Newsletter</h1>
                    <p className="my-3 md:my-5 text-sec">Get the latest updates and news right in your inbox!</p>
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