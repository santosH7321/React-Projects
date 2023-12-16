

function Fotter(){
    return(
        <div className="flex justify-center items-center bg-gray-900 text-white p-10">
            <div className="flex justify-between items-center gap-20 ">
                <div className="text-5xl font-bold m-10 ">
                    <h1>Nike</h1>
                </div>
                <div className="m-5 ">
                    <nav>
                        <ul className="flex-col justify-center items-center">
                            <li className="border-t-4 border-indigo-500 py-1"></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Location</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <ul>
                    <li className="border-t-4 border-indigo-500 py-1"></li>
                        <li><a href="#">Costamer</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Rating</a></li>
                        <li><a href="#">Offers</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                    <li className="border-t-4 border-indigo-500 py-1"></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Fotter;
