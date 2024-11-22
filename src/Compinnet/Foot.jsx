

export default function Foot({ foottransfer }) {
    const { name, price, color } = foottransfer
    return (
        <div className="main">
            <h2 style={{
                color:
                    color === "gray" ? 'gray' :
                        color === "orange" ? 'orange' :
                            color === "yallow" ? 'yellow' :
                                color === "yellow" ? 'yellow' :
                                color === "green" ? 'green' :
                                color === "red" ? 'red' :
                                    'white' 
            }}> Name : {name} </h2>
            <h2>Price : {price} </h2> 

        </div>
    )
}