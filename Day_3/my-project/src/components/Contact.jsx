

function Contact(){
    return(
        <div>
            <div>
                <h1>CONTACT US</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
            </div>
            <div>
                <button>VIA SUPPORT CHAT</button>
                <button>VIA CALL</button>
            </div>
            <div>
                <button>VIA EMAIL FORM</button>
            </div>
            <div>
                <label htmlFor="Name">
                    <input type="text" />
                </label>
                <label htmlFor="E-Mail">
                    <input type="text" />
                </label>
                <label htmlFor="TEXT">
                    <input type="text"  />
                </label>
            </div>
        </div>
    );
}

export default Contact;