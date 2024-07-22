import { Dropdown } from "antd";

export default function Dropdown({menu, onClick, children, trigger = "contextMenu"}) {
  return (
    <Dropdown menu={menu} onClick={onClick} trigger={trigger} children={children}></Dropdown>
  )
}
