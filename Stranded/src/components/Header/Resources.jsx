import BaseResource from "../../resources/BaseResource"

export default function Resources(props) {
  return (
    <li>
      <p>{props.name}: {props.count}</p>
    </li>
  )
}
