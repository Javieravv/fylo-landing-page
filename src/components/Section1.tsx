import imageLogo from '../../public/images/illustration-1.svg';

export const Section1 = () => {
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
                        <input type="email" name="email" id="email" placeholder='Enter your email' autoComplete='off' />
                        <input type="submit" value="Get Started" />
                    </form>
                </article>
            </section>
        </div>
    )
}
