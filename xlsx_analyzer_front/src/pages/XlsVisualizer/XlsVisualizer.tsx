import { Link } from "react-router-dom";

const XlsVisualizer: React.FC = () => {
    return (
        <section className="xlsVisualizer">
            <h2>Xls Visualizer</h2>
            <p>
                Drag and Drop your xls file in the area below and let the magic
                happen !
            </p>
            <button className="xlsVisualizer__button">
                <Link to={"/"}>Home</Link>
            </button>
        </section>
    );
};

export default XlsVisualizer;
