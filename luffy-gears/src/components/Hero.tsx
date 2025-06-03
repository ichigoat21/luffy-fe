import luffyImg from '../assets/luffy_gear_5_punch_by_hotpicsa_djsahvt-pre-removebg-preview.png'

export const Hero = () => {
    return (
        <section className="max-w-7xl flex justify-between lg:flex-row flex-col items-center mx-auto pt-25 px-4">
        <img 
        src={luffyImg} 
        alt="Gear 5 Luffy"
        width={700}
        height={800}
        className={"lg:w-[50%] w-[100%] h-full object-contain"}
         />
        <div className="flex flex-col justify-center items-center">
        <h1 className="lg:text-6xl text-4xl font-extrabold text-stone-950 tracking-lighter">
            Monkey <span className="text-gear-700">D. Luffy</span>
        </h1>
        <p className="lg:text-xl text-lg text-stone-950">
        “Kaizoku O’ni orewa Naru"
        </p>
        </div>
        </section>
    )
}