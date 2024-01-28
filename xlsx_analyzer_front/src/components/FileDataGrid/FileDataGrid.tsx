import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useAppSelector } from "../../store/hook";
import { useEffect, useMemo, useState } from "react";
import { DataGridColDefsType } from "../../types/FileDataGridTypes";

const FileDataGrid: React.FC = () => {
    const { isLoading, extractedData, extractedDataKeys } = useAppSelector(
        (state) => state.visualizerSlice
    );

    const [colDefs, setColDefs] = useState<DataGridColDefsType>([]);

    const hasExtractedDataKeys: boolean = useMemo(() => {
        return extractedDataKeys && extractedDataKeys.length > 0;
    }, [extractedDataKeys]);

    const formattedDataKeys: DataGridColDefsType = useMemo(() => {
        if (hasExtractedDataKeys) {
            return extractedDataKeys.reduce((acc: Array<any>, field) => {
                acc.push({ field });
                return acc;
            }, []);
        }
        return [{ field: "no data" }];
    }, [extractedDataKeys]);

    const hasFormattedDataKeys: boolean = useMemo(() => {
        return formattedDataKeys && formattedDataKeys.length > 0;
    }, [formattedDataKeys]);

    useEffect(() => {
        if (hasFormattedDataKeys) {
            setColDefs(formattedDataKeys);
            return;
        }
        return;
    }, [formattedDataKeys, hasFormattedDataKeys]);

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
