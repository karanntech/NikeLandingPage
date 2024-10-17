import { star } from "../assets/icons"


const PopularProductCard = ({imgURL, name, price}) => {
    return(
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} className="w-[282px] h-[282px]"/>
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating icon" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div>
            <h3 className="mt-2 font-palanquin text-2xl leading-normal font-semibold">{name}</h3>
            <p className="mt-2 font-semibold leading-normal font-montserrat text-2xl text-coral-red">{price}</p>
        </div>
    )
}

export default PopularProductCard;