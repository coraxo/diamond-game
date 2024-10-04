import { MouseEventHandler } from "react"

type Props = {
  count: number,
  onClick: MouseEventHandler
}

function CoolButton({count, onClick} : Props) {
  let user = {name: "John"}

  return (
    <button onClick={onClick}>{user.name + ` ${count}`}</button>
  )
 }

 export default CoolButton