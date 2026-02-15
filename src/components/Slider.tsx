import "../styles/slider.css";

export default function Slider() {
  return (
    <div className="slider-wrapper">
      <input type="range" min="0" max="150000" />
    </div>
  );
}
