import { FiSearch } from "react-icons/fi";
import "../styles/searchbar.css";
type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by name, description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ddd"
        }}
      />
    </div>
  );
}
