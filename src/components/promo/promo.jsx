import Figma from "../Icons/Figma";

import hero from '../../images/hero.png'
function Promo () {
    return (
        <section className="bg-white bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">
                    Building Digital <br/>Analytics & Big Data <br/>for brands.
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-gray-400">
                We will produce for you detailed analytics of your web resources.
                 We will show analytics and statistics of your social network with a range of 1 day.
                 We work with the legal API who was found by Jackie and Akeel.
                    <a href="https://tailwindcss.com" className="hover:underline">
                        </a> <a href="https://flowbite.com/docs/getting-started/introduction/" className="hover:underline"></a><a href="https://flowbite.com/blocks/" className="hover:underline"></a></p>
                
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={hero} alt="hero image"/>
            </div>                
        </div>
        </section>
    )
}

export default Promo;