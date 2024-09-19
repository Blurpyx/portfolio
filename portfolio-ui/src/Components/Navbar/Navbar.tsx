import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="w-full flex justify-end text-white top-0 right-0 pt-2 pr-2">
            <ul className="flex">
                <li>
                    <a href="/" className="px-2 active">Home</a>
                </li>
                <li>
                    <a href="#about" className="px-2">About me</a>
                </li>
                <li>
                    <a href="#skills" className="px-2">Skills</a>
                </li>
                <li>
                    <a href="#contact" className="px-4">Talk to me</a>
                </li>
            </ul>
        </nav>
    );
}
