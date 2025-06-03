import { Card } from "./Card"
import luffyGear1 from '../assets/Pasted image.png'
import luffyGear2 from '../assets/2989882.png'
import luffyGear3 from '../assets/Pasted image (4).png'
import luffyGear4 from '../assets/Gear-Fourth.png'
import luffyGear5 from '../assets/Pasted image (3).png'

export const Content = () => {
    return (<div className="mx-auto max-w-7xl flex flex-col justify-center items-center bg-gear-50 lg:px-12 lg:py-16 px-4 py-6 bg-white rounded-xl lg:my-16 my-20 mx-4">
        <div className="flex flex-col justify-center items-center lg:mx-4 mx-2 lg:mb-16 gap-1 mb-4">
            <h2 className="lg:text-5xl text-3xl text-black font-bold">Luffy's Gears</h2>
            <p className="lg:text-xl pl-4 text-xs text-gear-500">Luffy’s Gears are power-up forms enhancing his strength, speed.</p>
        </div>
        <Card gear="Gear 1" gearFlow="Luffy’s base form using his rubber body for flexible attacks. Relies on creativity, agility, and standard Haki without any enhanced transformations or massive power boosts." image={luffyGear1}/>
        <Card gear="Gear 2" gearFlow="Luffy pumps blood rapidly to increase speed and strength. His body emits steam, movements become blurred, and attacks land faster and harder with enhanced momentum and power." image={luffyGear2}/>
        <Card gear="Gear 3" gearFlow="Luffy inflates his bones to giant size, delivering massive, destructive blows. After use, he temporarily shrinks. It’s slow but powerful, useful for breaking defenses and structures." image={luffyGear3}/>
        <Card gear="Gear 4" gearFlow="Combines Haki and elasticity. Forms like Boundman and Snakeman grant enhanced power, bounce, and reach. Increases durability and agility with compressed, spring-like attacks and armored body." image={luffyGear4}/>
        <Card gear="Gear 5" gearFlow="Luffy awakens his Devil Fruit’s true nature. Gains cartoon-like freedom: stretches reality itself, fights with absurd creativity. It’s powerful, unpredictable, and full of exaggerated, godlike moves." image={luffyGear5}/>
    </div>)
}  