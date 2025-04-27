
const FooterContent = () => {
    return (
        <div className="bg-[#121F5E] pt-40 md:pt-48">
            <footer className="w-full ">
                <div className="footer max-w-[1440px] m-auto p-6 lg:p-10 gap-8 sm:footer-horizontal">
                    <aside>
                        <a href="/" className="mb-2"><img src="./src/assets/logo-footer.png" alt="logo" className="w-32"/></a>

                        <p className="text-thi w-60">We are a passionate team dedicated to providing the best services to our customers.</p>

                    </aside>

                    <nav className="text-thi">
                        <h6 className="footer-title">Quick Links</h6>

                        <a className="link link-hover" href="/">Home</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Service</a>
                        <a className="link link-hover">Contact</a>
                    </nav>

                    <form className="text-thi w-full max-w-80">
                        <h6 className="footer-title">Subscribe</h6>
                        <p className="mb-2">Subscribe to our newsletter for the latest updates.</p>

                        <fieldset className="w-full">
                            <input type="email" placeholder="Enter Your Email" className="input bg-[#ffffff0d]" />
                            <button className="w-full btn btn-accent text-white mt-2">Subscribe</button>
                        </fieldset>
                    </form>
                </div>
            </footer>

            <div className="text-center p-4 border-t-2 border-[#ffffff1a]">
                <p className="text-thi">@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>

    );
};

export default FooterContent;