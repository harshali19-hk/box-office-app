const Details = ({status,premiered,network})=>{
    return <>
    <div>
        <p>status : {status}</p>
        <p>premiered {premiered} {!!network && `On ${network.name}`}</p>
    </div>
 </>
}

export default Details