import { RefObject, createRef, useMemo, useState } from "react";
import { sendFileToVisualize } from "../../store/slices/visualizerSlice";
import { useAppDispatch } from "../../store/hook";

const DragDropFile = () => {
    const dispatch = useAppDispatch();
    const [file, setFile] = useState<any>();
    const inputFileRef: RefObject<HTMLInputElement> = createRef();

    const hasFile = useMemo(() => {
        return (
            file &&
            file.name != undefined &&
            file.size != undefined &&
            file.type != undefined &&
            file.lastModifiedDate != undefined
        );
    }, [file]);

    const handleFileChange = (e: any) => {
        setFile(e.target.files[0]);
    };

    const handleFileDrop = (e: any) => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0]);
    };

    const handleLoadClick = () => {
        if (inputFileRef && inputFileRef.current) {
            inputFileRef.current.click();
        }
    };

    const handleFileUpload = async () => {
        if (hasFile) {
            dispatch(sendFileToVisualize(file));
        } else {
            console.log("File has empty fields");
        }
    };

    return (
        <>
            <div className="dragDropFile">
                <div
                    className="dragDropFile__drop-area"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleFileDrop}
                >
                    <p>Drop your file here or</p>
                    <button
                        className="dragDropFile__load-button"
                        onClick={handleLoadClick}
                    >
                        Upload it from your drive
                    </button>
                </div>
                <input
                    className="dragDropFile__input"
                    type="file"
                    onChange={handleFileChange}
                    ref={inputFileRef}
                />
            </div>
            <button
                className="dragDropFile__submit-button"
                onClick={handleFileUpload}
            >
                Extract Data
            </button>
        </>
    );
};

export default DragDropFile;
