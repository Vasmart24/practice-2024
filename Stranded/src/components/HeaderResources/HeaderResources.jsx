import { baseResources } from "../../resources/baseResources"

export default function HeaderResources() {
  return(
    <ul>
        <li>
            {baseResources.map(({key, name, count}) => {
               return <p key={key}>{name} : {count}</p>
            })}
        </li>
    </ul>

  )
}