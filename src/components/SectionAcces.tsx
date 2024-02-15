import { useState } from "react"
import { validEmailFc } from "../utils/utils"

export const SectionAcces = () => {
    const [validEmail, setValidEmail] = useState(false)
    const [email, setemail] = useState('')

    const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setemail(e.target.value)
    }

    const handleClickEmail = (e:React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        validEmailFc(email) ? setValidEmail(true) : setValidEmail(false);
    }

    return (
        <div className="main-div main-section-access">
            <section className="section-access">
                <article>
                    <h2>Get early access today</h2>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </article>
                <article>
                    <form action="">
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="email@example.com" 
                        autoComplete="off" 
                        value={email}
                        onChange={handleChangeEmail}
                        />
                        {validEmail
                            ? <p className='message-email'>Please check your email</p>
                            : null}
                        <input 
                        type="submit" 
                        value="Get Started For Free" 
                        onClick={handleClickEmail}
                        />
                    </form>
                    
                </article>
            </section>
        </div>
    )
}
