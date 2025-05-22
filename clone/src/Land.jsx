import { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react'


function Land() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if user has a theme preference saved
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
    <div className='wholepage custom-cursor dark:bg-[#2c3e50]'>
    <div className='innerdiv w-full px-10 md:p-0 md:w-[75%] lg:w-[50%] md:mx-auto '>  
    
    <div className="heroset flex flex-col">

        <div className="logoset flex gap-4 py-24 items-center justify-between items-center">
            <div className="logo flex gap-1 items-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEi0lEQVR4nO1YW2hdVRDdtb5QfKLWYjkzN0aF4ocg6odgEf0T/BONFVRstVXrC0EUJBVfaEEUFPVDUETBSJKZk5AahAar9UMqlAarSNVKtVht0JDEM7Nju2Xf5zk75zZJ7y33BLpgkws597Jm9syaNceYE1jiEMJblfGAMrpFHcKfEird3FHyjq44SxgnFk2+cfZ2NABheNoTsccaAOHPHSPvRlecqQwHq0QWSR7Kf4XwkY4FIDE+WSZRI8M4o3G0Thl65hyK1grDvnQQQjDu3r36lI6Qd2NwujL+ns1qNJBLnqFHGD7IkscjNsY1plMQwkdTdeyzn1jG+/PIJwQbhHAmXWo+oI6RdyPdpynhb0FNc7PsK8P2oHQmp/ujlR0LwMbwYLXmK9knEBvjA03IbxbGI/M1rhuOztOhriuFoluUo/v8bVrC69pO3vWtPlUJfg1UZTiffHRX+KwPVglfFIL3leFzZdxTL698mR1xI91nty0AJVxf/uG4VvugCcPG3MYdzDbuYo/U+oXgw7aQd2PmZD946uVTCWRrc+XBv5sNOf99G1eOxjBPIDDrRrovbD37DPcEjWsTih6aL4AFZZtBq37qOyH8Sghs+v82Ll3TWvb7zHIl+DFzteUabqo8PcqlLULwh5dYPzMs47gyfOHnhXD0ng6VXhXGp5Si9dnv+Z7Kzoyp/q6LWss+RWszSsIwaxk3HT2AYzrv1Hus0cj9rWW/15zk1SJ75dG240B+s09MUKb7p4fh4tayP4i3pxtXGA9LDI+3k7xl3OQHXNDo/7Zc+x5CsCujPOU6bmPmCe6dOy/88Cvd1jJ5HYSrgqwcFoInaoNKGB5Twpd8U1qCISH4Rhn2VRoXDinjy0clH8OdlmFnzgzobZl8al1M//C0MOzW2KsL/LcA339wnhvgHN3/xDmzrE0BRKvTrnNhmt7YEbS8bjYjj2+FiiOMO1288gzTTijB6GKDSN3A9iZN+2x9WFH9+QMzQ6suMe2Giy+/QAi+bDLmJ4XwW3/tVZM2mbUP8EZIPuHSwxpMafGKM1C6tu3k60E4s8wS3lBZWvBuy9H1U1xakX4m4Uu7A3sw661xEIC3I7+kg5Sy4kCP6TSE/GxIEWMYDxVHGb/OKbPnTRGgjNsyN1C20+ns+525YUeqZ8BP+k5zN66v6xzhwEH6GVGve3i9sZnV+2eXfzVjigAluCMojf018sLwjDJIWjKF4K9kOOoyRYEwfpS35NvKtjYRen8vCKYocH1muTAeChb3Xq9WyrB3Tt0PltaZIsHGuCbQ9KmKT8IdcxSH4BVTNCjBlqB8vFv9tFLz0LAKhFv9bZmiQRl+yOo/7qgrTsMm7PFKZYoGGeq6LMfMhXL5Z8JRyRQRUt4N8h1pVXFsQnCjKSqUcSxNuH6qde+9kykqXM70rUpo7fNrpsjQylKSVp+0XI76N3mmyBDCj3MDIPzeDcK5pshwOdO32gsTXplM0WFT0zf1qtEmcXSTWQpQxhfC5rUEG8xSgTI8FwTwpllKcH2rzleGz4ThH2F8u/CKcwLm+OF/awoNfd1iZLIAAAAASUVORK5CYII=" alt="harry-potter-"/>
            <h3 className="text-2xl font-semibold tracking-tight">Kreate</h3>
            </div>
            <button 
                onClick={toggleDarkMode}
                className={`w-5 h-5 rounded-3xl transition-colors duration-200 cursor-pointer ${
                    darkMode ? 'bg-[#f0ebe1]' : 'bg-[#2c3e50]'
                }`}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            ></button>
        </div>





        <div className="herotextset text-start flex flex-col gap-4">
            <h2 className="text-5xl font-mono tracking-tighter leading-15 font-semibold">Kick-start your next product. <br /> <span className="text-gray-700"><span className='text-yellow-500 gradient-stroke'>Design based,</span> User Centric, and stress-free development</span></h2>
            <p className="text-lg text-gray-600 font-normal leading-7 -tracking-tight">Turn your idea into the market-ready MVP in less than a month. With all you need to launch and run it.</p>
        </div>



        <div className="buttonset flex gap-4 py-4">
            <button
            className="button font-medium px-4 py-2 bg-gray-600 text-white rounded-lg cursor-pointer"
            onClick={() => {
                document.getElementById('pricingcard')?.scrollIntoView({ behavior: 'smooth' });
            }}>   
            See pricing
            </button>

            <button className="buttonsecondary font-medium flex gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg cursor-pointer"><Calendar />Book a call
            </button>
        </div>
    </div>



    <div className="nexthero text-left py-24 flex flex-col gap-8">
        <h2 className='text-3xl font-semibold font-mono tracking-tight '>Get that idea out of your head. <br />Let us take it on</h2> 

        <div className='text-lg text-gray-600 flex flex-col gap-3 leading-7 -tracking-tight'>
        <p><span className='font-semibold text-lg text-black'>All included.</span> Web application as your core product, landing page to drive sales, and SEO-ready blog to start getting organic traffic.</p>
        <p><span className='font-semibold text-lg text-black'>Complete infrastructure.</span> Get seamless integration with payment gateways, user authentication systems, and email marketing platforms.</p>
        <p><span className='font-semibold text-lg text-black'>It actually works.</span> We code using latest technologies to ensure blazing-fast performance, stability, and scalability.</p>
        <p><span className='font-semibold text-lg text-black'>Less is more.</span> We guide you to define the core features of your MVP and keep it simple. Stop planning and start testing your idea with real users.</p>
    </div>
    </div>



    <div id="pricingcard" className='pricingcard bg-yellow-300 rounded-2xl p-8 pb-2'>
        <h2 className='text-3xl text-left font-semibold font-mono'>Fixed price with no hidden costs</h2>
        <h2 className='text-2xl text-left font-semibold py-6'>$3,999/MVP</h2>

        <div className='text-left text-xl text-gray-600 py-4 flex flex-col gap-4 leading-7 -tracking-tight'>
            <ul className='list-inside list-disc'>
                <li>Web app, landing page, and blog.</li>
                <li>Your design to code.</li>
                <li>No design? We’ll build the UI with a beautiful component library.</li>
                <li>Integrations: payments, API, databases, authentication, analytics.</li>
                <li>Setup and deployment.</li>
            </ul>
        
        </div>

        <div className="buttonset flex flex-col gap-4 py-4 sm:flex-row">
            <button className="bg-gray-600 font-medium px-4 py-2 rounded-lg text-white w-full justify-center min-w-[160px] cursor-pointer">Get started</button>
            <button className="buttonsecondary bg-white font-medium text-gray-800 px-4 py-2 rounded-lg flex gap-4 w-full justify-center min-w-[160px] cursor-pointer"><Calendar />Book a call</button>
        </div>

    </div>



    
    <div className="aboutfounder py-24">
        <h2 className='text-3xl text-left font-semibold font-mono'>About the founder</h2>
        <div className="foundertextset text-left text-lg leading-7 -tracking-tight text-gray-600 py-4 flex flex-col gap-4">
            <p>Hi, I’m <span className='font-semibold'>Julián Evian</span>, a software engineer from nowhere with 10+ years of experience in product development.</p>
            <p>I’ve built and launched products for startups and big companies. I know how to build a product that users love.</p>
            <p>Seeing others having great ideas and no chance to bring them to life, motivated me to start Refined. Our goal is to help you kick-start your product. You have an idea, we have coding skills.</p>
            <p>Refined saves you from both. We build lean products with just the right features for smooth performance and user love.</p>
            <p>Let’s work together to make your idea a reality.</p>
        </div>
    </div>


    
    <div className="footer text-center">
        <div className="text-7xl font-bold sm:text-[210px] font-bold pt-16 bg-gradient-to-r from-[#999898] via-[#909091] to-[#9d9d9f] 
             bg-clip-text text-transparent hover:from-yellow-300 hover:via-yellow-500 hover:to-[#f9b120] transition-all duration-500
             md:text-[160px] lg:text-[200px]">
             KREATE
        </div>


        
        <div className='iconset flex justify-center px-30 py-16 opacity-50 sm:gap-8'>
        <img width="48" height="48" className='cursor-pointer' src="https://img.icons8.com/material-two-tone/48/instagram-new.png" alt="instagram-new"/>
        <img width="48" height="48" className='cursor-pointer' src="https://img.icons8.com/material-two-tone/48/linkedin--v1.png" alt="linkedin--v1"/>
        <img width="48" height="48" className='cursor-pointer' src="https://img.icons8.com/material-two-tone/48/twitterx--v1.png" alt="twitterx--v1"/>
        <img width="48" height="48" className='cursor-pointer' src="https://img.icons8.com/material-two-tone/48/facebook.png" alt="facebook"/>
        <img width="48" height="48" className='cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src="https://img.icons8.com/material-two-tone/48/chevron-up.png" alt="chevron-up"/>

        </div>
    
    
        
        <div>
            <h3>Crafted with care❤️ by<a href='https://www.gnanasambandam.live'  className='font-semibold pb-4'> Kay </a></h3>
        </div>

    </div>
        
    </div>
    </div>
    );
}

export default Land;