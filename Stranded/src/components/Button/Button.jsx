import "./Button.css";

export default function Button({ onClick, children, className='button' }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}