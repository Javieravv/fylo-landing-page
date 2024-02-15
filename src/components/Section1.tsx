import { useState } from 'react';
import imageLogo from '../../public/images/illustration-1.svg';
import { validEmailFc } from '../utils/utils';

export const Section1 = () => {
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
        <div className="main-div">
            <section className='section1'>
                <article className='section-image'>
                    <img src={imageLogo} alt="" />
                </article>
                <article>
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                    <form action="">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter your email'
                            autoComplete='off'
                            value={email}
                            onChange={handleChangeEmail}
                        />
                        <input 
                        type="submit" 
                        value="Get Started" 
                        onClick={handleClickEmail}
                        />
                    </form>
                    {validEmail
                        ? <p
                            className='message-email'
                            style={{ color: 'red' }}>
                            Please check your email
                        </p>
                        : null}
                </article>
            </section>
        </div>
    )
}
