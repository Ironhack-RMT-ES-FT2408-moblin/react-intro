
const listStyles = {backgroundColor: "red", padding: "20px"}

function List() {

  return (
    <ul style={listStyles}>
      <li>HTML</li>
      <li>CSS</li>
      <li style={{fontWeight: "bold"}}>JS</li>
      <li>Manipulación de DOM</li>
    </ul>
  )

}


export default List