import {FaArrowUp} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="flex justify-center items-center h-20 bg-purple-950 text-white">
            <ul className="flex space-x-8">
                <li>
                    <a href="mailto:medrine.mulindi@gmail.com" className="hover:underline">
                        Email
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/medrine" target="_blank" rel="noreferrer" className="hover:underline">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Mulindi123/" target="_blank" rel="noreferrer" className="hover:underline">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://x.com/MedrineMulindi" target="_blank" rel="noreferrer" className="hover:underline">
                        X
                    </a>
                </li>
            </ul>
                <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-6 right-4 flex items-center justify-center space-x-2 px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-200 transition duration-300 transform hover:scale-105 hover:animate-bounce"
                >
                <FaArrowUp className="text-gray-700 text-xl hover:text-blue-900 transition duration-300" />
            </button>
        </div>
    );
}

export default Footer;
