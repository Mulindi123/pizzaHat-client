const Contact = () => {
    return ( 
        <>
            <div className="flex justify-center items-center text-white">
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
         </div>
        </>
     );
}
 
export default Contact;