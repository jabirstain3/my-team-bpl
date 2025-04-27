
const PlayerCard = ({ player, handlePlayerSelect }) => {
    const { name, thumbnail, profile, country, rol, price, skills, rating } = player;
    // console.log(player);

    
    return (
        <div className="card bg-base-100 w-80 p-4 shadow-sm">
            <figure className="rounded-lg overflow-hidden w-full aspect-[3/2] bg-gray-400">
                <img src={thumbnail} alt={name} className=""/>
            </figure> 
            <div className="card-body mt-4 p-1">
                <h2 className="card-title text-lg font-bold flex items-center">
                    <img src={profile} alt={name} className="w-8 h-8 rounded-full mr-1" />
                    {name}
                </h2>
                <div className="flex justify-between items-center text-sm ">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                        <p className="text-gray-500">{country}</p>
                    </div>

                    <div className="py-2 px-4 bg-[#13131310] rounded-md">
                        <p className="text-black text-xs font-semibold">{rol}</p>
                    </div>
                </div>

                <div className="divider my-0"></div>

                <div className="flex justify-between items-center">
                    <div className="">
                        <p className="font-bold text-black">Rating</p>
                    </div>

                    <div className="">
                        <p className="text-fir font-semibold"><span>{rating}</span>/5</p>
                    </div>
                </div>

                <div className="">
                    <p className="text-fir font-semibold">{skills[0]}</p>
                </div>

                <div className="">
                    <p className="text-fir font-semibold">{skills[1] || "N/A"}</p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="">
                        <p className="font-bold text-fir">Price: $<span className="">{price}</span></p>
                    </div>

                    <div className="">
                        <button onClick={() => handlePlayerSelect(player)} className="btn text-black ">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;