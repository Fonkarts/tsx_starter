import { RefObject, createRef, useMemo, useState } from "react";

const DragDropFile = () => {
    const [file, setFile] = useState<any>();
    const inputFileRef: RefObject<HTMLInputElement> = createRef();

    useMemo(() => {
        console.log(file);
    }, [file]);

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
        const formData = new FormData();
        if (hasFile) {
            formData.append("file", file);
            // THUNK !!!
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
                    <p>Drop your file here</p>
                    <button
                        className="dragDropFile__load-button"
                        onClick={handleLoadClick}
                    >
                        Upload from your drive
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
