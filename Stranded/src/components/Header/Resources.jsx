import BaseResource from "../../resources/baseResources"

export default function Resources(props) {
  return (
    <li>
      <p>{props.name}: {props.count}</p>
    </li>
  )
}
