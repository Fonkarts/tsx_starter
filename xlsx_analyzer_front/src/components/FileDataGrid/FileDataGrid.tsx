import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useAppSelector } from "../../store/hook";
import { useMemo, useState } from "react";

const FileDataGrid: React.FC = () => {
    const { extractedData, isLoading } = useAppSelector(
        (state) => state.visualizerSlice
    );

    const [colDefs, setColDefs] = useState([
        { field: "Id" },
        { field: "Age" },
        { field: "Salary" },
        { field: "City" },
    ]);

    const hasExtractedData = useMemo(() => {
        return extractedData && extractedData.length > 0;
    }, [extractedData]);

    const canShowGrid = useMemo(() => {
        return hasExtractedData && !isLoading;
    }, [hasExtractedData]);

    return (
        <>
            {isLoading && <p>LOADING !!!!!!!!!!!!!!</p>}
            {canShowGrid && (
                <div className="ag-theme-quartz" id="datagrid">
                    <AgGridReact rowData={extractedData} columnDefs={colDefs} />
                </div>
            )}
        </>
    );
};

export default FileDataGrid;
