import logo from '../../assets/logo-footer.png';

const Navbar = ({ coin }) => {
    const navlinks = <>
        <li className='text-sec'><a href='/'>Home</a></li>
        <li className='text-sec'><a href=''>Fixture</a></li>
        <li className='text-sec'><a href=''>Teams</a></li>
        <li className='text-sec'><a href=''>Schedules</a></li>
    </>

    return (
        <div className="navbar sticky top-0 sectionBase md:p-4 bg-white rounded-b-lg shadow-sm z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-0 p-2 shadow bg-base-100 rounded-box w-40">
                        {navlinks}
                    </ul>
                </div>
            
                <div className="w-18 h-18">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </div>
            </div>

        
            <div className="navbar-end flex gap-4 items-center">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                
                <div className="border py-2 mx-4 px-6 border-[#13131310] rounded-lg bg-[#13131310] flex items-center gap-2">
                    <span>$ {coin}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;