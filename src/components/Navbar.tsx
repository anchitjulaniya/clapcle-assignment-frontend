import "../styles/navbar.css";

type Props = {
  toggleSidebar: () => void;
};

export default function Navbar({ toggleSidebar }: Props) {
  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>
      <h3>Activity Dashboard</h3>
    </div>
  );
}
