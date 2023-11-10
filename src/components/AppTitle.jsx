

const AppTitle = (props) => {
    const {title = "Box Office" , subTitle = "Are you looking for a movie or an Actor?"} = props
  return (
    <>
       <h1>{title}</h1>
       <p>{subTitle}</p>
    </>
  )
}

export default AppTitle

