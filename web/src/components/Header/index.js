import "./style.scss";

export default function Header({ children, justifyContent = "flex-end" }) {
  return (
    <header className="header" style={{ justifyContent }}>
      {children}
    </header>
  );
}
