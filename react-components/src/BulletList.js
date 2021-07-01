export default ({ list }) => {
    return (
        <ul>
            {list.map((e,i) => <li key={i}>{e}</li>)}
        </ul>
    )
}