interface cardProps {
    gear : string,
    gearFlow : string,
    image : string
}

export const Card = (props : cardProps) => {
    return (
        <section className="bg-gear-300 mt-4 lg:px-12 lg:py-4 px-4 py-6 flex flex-col lg:flex-row justify-center items-center rounded-md">
            <img 
            className="rounded-sm"
            src={props.image} 
            alt={props.gear} 
            width={240}
            height={180}
            />
            <div className="px-8 py-2 space-y-2 flex flex-col items-center justify-between text-center">
                <h2 className="flex justify-start ml-5 items-center text-stone-950 font-bold">{props.gear}</h2>
                <p className="flex justify-start items-center text-stone-950">{props.gearFlow}</p>
            </div>
        </section>
    )
}