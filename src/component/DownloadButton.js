import React from 'react';

const DownloadButton = () => {
    return (
        <div className="d-flex col-12 col-sm-4 justify-content-end">
            <button className="btn btn-danger rounded-pill" type="button" id="dowlandPng" onClick={() => {
               // downloadPNG()
            }}>
                Download PNG
            </button>
        </div>
    );
}

export default DownloadButton;
