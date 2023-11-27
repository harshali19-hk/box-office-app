

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
        <a href={`/show/${id}`} target="_blank" rel="noreferrer" >Read More</a>
        <button>Star Me</button>
     </div>
    </>
  )
}

export default ShowsCard
