import "./Button.css";

export default function Button({ onClick, children, className = "button", disabled = false }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
