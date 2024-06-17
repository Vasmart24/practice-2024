import "./Button.css";

<<<<<<< HEAD
export default function Button({ onClick, children, className = 'button' }) {
=======
export default function Button({ onClick, children, className='button' }) {
>>>>>>> main
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}