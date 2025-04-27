import herobg from '../../assets/bg-shadow.png';
import heroping from '../../assets/banner-main.png';

const HeroBanner = ({ handleCradit }) => {
    return (
        <div className='h-screen w-full'>
            <div className="hero h-[calc(100%-80px)] lg:h-[calc(100%-100px)]" style={{ backgroundImage: `url(${herobg})`,backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}} >
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-4xl">
                        <div className="w-60 m-auto mb-5">
                            <img src={heroping} alt="" />
                        </div>

                        <h1 className="mb-5 text-4xl font-bold text-black">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 text-black">Beyond Boundaries Beyond Limits</p>

                        <button onClick={handleCradit} className="btn btn-accent text-white">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;