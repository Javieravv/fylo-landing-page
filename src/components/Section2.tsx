import imageLogo from '../../public/images/illustration-2.svg';
import imageQuotes from '../../public/images/icon-quotes.svg';
import imageArrow from '../../public/images/icon-arrow.svg';
import imagePerson from '../../public/images/avatar-testimonial.jpg';

export const CardSection2 = () => {
    return (
        <div className='card-section2'>
            <p>
                <span><img src={imageQuotes} alt="" /></span>
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
            </p>
            <div className='data-person'>
                <img src={imagePerson} alt="" />
                <div>
                    <p>Kyle Burton</p>
                    <p>Founder & CEO, Huddle</p>
                </div>
            </div>
        </div>
    )
}


export const Section2 = () => {
    return (
        <div className="main-div">
            <section className='section2'>
                <article>
                    <img src={imageLogo} alt="" />
                </article>
                <article>
                    <h1>Stay productive, wherever you are</h1>
                    <p>Never let location be an issue when accessing your files. Fylo has you
                        covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for
                        live collaboration. No email attachments required!</p>
                    <span>
                        See how Fylo works
                        <img src={imageArrow} alt="" />
                    </span>
                    <CardSection2 />
                </article>
            </section>
        </div>
    )
}
