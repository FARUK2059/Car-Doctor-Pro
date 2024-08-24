import Image from "next/image";
import Link from "next/link";



const Footer = () => {
    return (
        <div>
            <div className=" py-12 p-2 ">
                <footer className="footer text-base-content container mx-auto">
                    <aside>
                        <Link href={"/"}>
                            <Image alt="logo" src="https://raw.githubusercontent.com/FARUK2059/Car-Doctor-Pro/099ebbd00d5ec34024a30dd7731393122f9b25f5/public/logo.svg" height={60} width={100} />
                        </Link>
                    </aside>
                    <nav className="">
                        <h6 className="footer-title">Useful Links</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;