import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import DragDropFile from "../../components/DragDropFile/DragDropFile";
import FileDataGrid from "../../components/FileDataGrid/FileDataGrid";

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
                <FileDataGrid />
            </Card>
        </section>
    );
};

export default XlsVisualizer;
