import '../styles/Contact.css'
export function Contact(props) {
    return (
        <div className="contact">
            <h2>Contact</h2>
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
                <input id="email" name="email" type="Email" placeholder="you@domain.com" />
                {/* message */}
                <label htmlFor="message"> Message </label>
                <textarea id="message" row="5" cols="24" placeholder= "Hi, how is it going"> </textarea>
                <button type="submit">Send</button>
            </form>
            
        </div>
    )
}

export default Contact