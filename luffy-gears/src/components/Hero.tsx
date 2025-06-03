import luffyImg from '../assets/luffy_gear_5_punch_by_hotpicsa_djsahvt-pre-removebg-preview.png'

export const Hero = () => {
    return (
        <section className="max-w-7xl flex justify-between items-center mx-auto pt-25 px-4">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-extrabold text-stone-950 tracking-lighter">
            Monkey <span className="text-gear-700">D. Luffy</span>
        </h1>
        <p className="text-xl text-stone-950">
        “Kaizoku O’ni orewa Naru"
        </p>
        </div>
        <img 
        src={luffyImg} 
        alt="Gear 5 Luffy"
        width={700}
        height={800}
        className={"w-[50%] h-full object-contain"}
         />
        </section>
    )
}