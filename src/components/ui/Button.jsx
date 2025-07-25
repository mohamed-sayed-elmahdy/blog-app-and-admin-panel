

function Button({ onClick, type = "button", children, className = "", ariaLabel = "" }) {
  return (
    <button type={type} onClick={onClick} className={`${className}`} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default Button;
