export default function Singleallpets({petstransfer}) {
    return (
        <div>
            <div>
                <img className="w-[400px]" src={petstransfer.image} alt="" />
                <div className="flex gap-8">
                    <h1>{petstransfer.pet_name ? petstransfer.pet_name : "Not avilable"}</h1>
                    <h1>{petstransfer.breed ? petstransfer.breed :"Not avilable" }</h1>
                </div>
                <div className="flex gap-8">
                    <h1>{petstransfer.date_of_birth ? petstransfer.date_of_birth :"Not avilable"}</h1>
                    <h1>{petstransfer.gender ? petstransfer.gender :"Not avilable"}</h1>
                </div>
                <h1>{petstransfer.price ? "Price " + petstransfer.price + "$" :"Not avilable" }</h1>
                <button onClick={()=>alert("test")} className="btn my-3 bg-black text-white px-5 py-1 rounded-lg">Details</button>
            </div>

        </div>
    )
}