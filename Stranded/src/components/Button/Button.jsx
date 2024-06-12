import './button.css'

export default function Button({ onClick, onMouseEnter, onMouseLeave, isActive, children}) {

  return <button onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className={ isActive ? 'button active' : 'button' } onClick={ onClick }>{ children }</button>
}
