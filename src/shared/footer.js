import "./../styling/index.scss";

const Footer = () => {
    return (
        <div id="footer">
            <div className="left-side">
                <div className="small">
                    <p>Name</p>
                    <input type="text" placeholder="John Smith"></input>
                </div>
                <div className="small">
                    <p>Email</p>
                    <input type="text" placeholder="example@gmail.com"></input>
                </div>
                <div className="small">
                    <p>Phone</p>
                    <input type="text" placeholder="(123) 456 - 789"></input>
                </div>
                <div className="small">
                    <p>Company</p>
                    <input type="text" placeholder="Astar"></input>
                </div>
                <div className="large">
                    <p>Message</p>
                    <textarea placeholder="Please type your message here."></textarea>
                </div>
                <button>Send message</button>
            </div>

            <div className="right-side">
                <h3>CONTACT US</h3>
                <h1>Get in touch today</h1>
                <p>Any questions or inquiries are welcome</p>
                <div className="extra">
                    <p>CBetX@gmail.com</p>
                    <p>(123) 456 - 789</p>
                    <p>347 Old Street</p>
                    <p>Shoreditch, Hackney</p>
                    <p>London, EC1V 9LP</p>
                </div>
            </div>
        </div>
    )
}    

export default Footer;