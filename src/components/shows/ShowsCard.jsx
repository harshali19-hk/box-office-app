import { Link } from "react-router-dom"

const ShowsCard = ({name,image,id,summary}) => {
    const summaryStripped = summary ? summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g,' ') : 'No Discription Found'
    .split(' ').slice(0,10).join(' ').replace(/<.+?>/g,' ')
  return (
    <>
    <div>
    <img src={image} alt={name} />
    </div>
      <h2>{name}</h2>
<p>{summaryStripped}</p>
     <div>
        <Link to={`/show/${id}`} >Read More</Link>
        <button>Star Me</button>
     </div>
    </>
  )
}

export default ShowsCard
