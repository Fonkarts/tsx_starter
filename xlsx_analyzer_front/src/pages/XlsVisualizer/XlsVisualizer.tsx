import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import DragDropFile from "../../components/DragDropFile/DragDropFile";

const XlsVisualizer: React.FC = () => {
    return (
        <section className="xlsVisualizer">
            <button className="xlsVisualizer__button">
                <Link to={"/"}>Home</Link>
            </button>
            <Card>
                <h2>Xls Visualizer</h2>
            </Card>
            <Card>
                <p>
                    Drag and Drop your file in the area below and let the magic
                    happen !
                </p>
                <DragDropFile />
            </Card>
        </section>
    );
};

export default XlsVisualizer;
