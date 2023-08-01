export const Student = props => {
    const { name, bio} = props
    return(
        <div>
            <h4>{name}</h4>
            <p>{bio}</p>
        </div>
    )
}