import './App.css';
function ColorBox({ childboxColor, childboxOpacity }) {
    return (
        <div style={{ backgroundColor: childboxColor, opacity: childboxOpacity, height: '150px', width: '150px'}}></div>
    )
}
export default ColorBox;