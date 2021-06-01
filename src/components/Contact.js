import '../styles/Contact.css'
import '../styles/Text.css'
export function Contact(props) {
    return (
        <div className="contact">
            <h2 className="main">Contact</h2>
            <h3 className="sub">Information and Booking</h3>
            <div className="content">
            <p>0436 123 456</p>
            <p>42 Holyrood Avenue</p>
            <p>Sorrento VIC 3943</p>
            
            <form
                id="contact-form"
                action="https://example.com/handler"
                method="post"
            >
                {/*name*/}
                <label htmlFor="name"> Name </label>
                <input id="name" name="name" type="text" placeholder="Your Name" />
                {/* email */}
                <label htmlFor="email"> Email </label>
                <input id="email" name="email" type="email" placeholder="you@domain.com" />
                {/* message */}
                <label htmlFor="message"> Message </label>
                <textarea id="message" row="5" cols="24" placeholder= "Hi, how is it going"> </textarea>
                <button type="submit">Send</button>
            </form>
            </div>
        </div>
    )
}

export default Contact