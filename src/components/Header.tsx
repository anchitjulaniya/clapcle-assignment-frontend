import "../styles/header.css";
import { FiBell } from "react-icons/fi";
import profile from '../assets/profile.jpg'

type Props = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: Props) {
  
  return (
    <div className="header">
      <div className="header-left">
        <button className="menuBtn" onClick={onMenuClick}>
        ☰
      </button>
        <h2 className="logo">clapcle</h2>

        <input
          type="text"
          placeholder="Search"
          className="header-search"
        />
      </div>

      <div className="header-right">
        <span className="fy">Financial Year 2023-2024</span>
        <span className="menu">Quick Access</span>
        <span className="menu">Activities</span>
        <FiBell className="icon" />
        <img className="profile-img" src={profile} alt="Profile Image" />
        <div className="user">Akhil Verma</div>
      </div>
    </div>
  );
}
