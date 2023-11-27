const ShowMainData = ({name,image,rating,summary,genres})=>{
  return <>
    <img src={image ? image.original : '/img-not-found.png'} alt={name} />
    <h1>{name}</h1>
    <div>
        {rating.average || 'N/A'}
    </div>
    <div dangerouslySetInnerHTML={{__html : summary}} />
       <div>
        {
            genres.map((genre)=>(
                <span key={genre}>{genre}</span>
            ))
        }
       </div>
   
  </>
}

export default ShowMainData