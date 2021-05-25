import '../styles/Book.css'
export function Book( props ) {
    return(
        <div className="book">
            <h2>Book</h2>
            <form
                id="contact-form"
                action="https://example.com/handler"
                method="post"
            >
                <label htmlFor="name"> Name </label>
                <input id="name" name="name" type="text" placeholder="Your Name" />

                <label htmlFor="email"> Email </label>
                <input id="email" name="email" type="email" placeholder="you@domain.com" />

                <label htmlfor="mobile"> Mobile </label>
                <input type="tel" id="mobile" name="mobile" placeholder="Your mobile number" />

                <label htmlfor="check in">Check In date</label>
                <input id="Check in" name="check in" type="date" ></input>

                <label htmlfor="check out">Check Out date</label>
                <input id="check out" name="check out" type="date" ></input>
                <button type="submit">Send</button>

            </form>
        </div>
    )
}

export default Book