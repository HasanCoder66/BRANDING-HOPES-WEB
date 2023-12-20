import React from 'react'
import './Services.css'
import NavbarT from '../Navbar/NavbarT'
import Footer from '../Footer/Footer'

function Services() {
  return (
    <>
    <NavbarT />
    {/* <!-- services Section Design  --> */}

    <section class="services" id="services">

        <h2 class="heading">
            My <span>Services</span>
        </h2>
        <div class="services-container">
            <div class="services-box">
                {/* <!-- <i class='bx bx-code-alt'></i> --> */}
                <box-icon name='code-alt'></box-icon>
                <h3>
                    Web Development
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ad quaerat, dicta temporibus
                    sapiente dolore esse, corrupti molestias sint harum explicabo fuga fugit excepturi neque,
                    alias quod mollitia?
                </p>
                <a href="
    #" class="btn">Read More</a>
            </div>
            <div class="services-box">
                {/* <!-- <i class='bx bxs-paint'></i> --> */}
                <box-icon name='paint' type='solid'></box-icon>
                <h3>
                    Graphic Designing
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ad quaerat, dicta temporibus
                    sapiente dolore esse, corrupti molestias sint harum explicabo fuga fugit excepturi neque,
                    alias quod mollitia?
                </p>
                <a href="
    #" class="btn">Read More</a>
            </div>
            <div class="services-box">
                {/* <!-- <i class='bx bx-bar-chart-alt'></i> --> */}
                <box-icon name='bar-chart-alt'></box-icon>
                <h3>
                    Digital Marketing
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ad quaerat, dicta temporibus
                    sapiente dolore esse, corrupti molestias sint harum explicabo fuga fugit excepturi neque,
                    alias quod mollitia?
                </p>
                <a href="
    #" class="btn">Read More</a>
            </div>
            <div class="services-box">
                {/* <!-- <i class='bx bx-code-alt'></i> --> */}
                <box-icon name='code-alt'></box-icon>
                <h3>
                    Seo
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ad quaerat, dicta temporibus
                    sapiente dolore esse, corrupti molestias sint harum explicabo fuga fugit excepturi neque,
                    alias quod mollitia?
                </p>
                <a href="
    #" class="btn">Read More</a>
            </div>
            <div class="services-box">
                {/* <!-- <i class='bx bxs-paint'></i> --> */}
                <box-icon name='paint' type='solid'></box-icon>
                <h3>
                    Touch Typing
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ad quaerat, dicta temporibus
                    sapiente dolore esse, corrupti molestias sint harum explicabo fuga fugit excepturi neque,
                    alias quod mollitia?
                </p>
                <a href="
    #" class="btn">Read More</a>
            </div>



        </div>
    </section>
    <Footer />
    </>
  )
}

export default Services