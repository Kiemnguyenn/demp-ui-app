import React, {useState} from 'react';
import './Upload.css';

import { FaCloudUploadAlt } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Upload() {

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
  return (
    <main>
        <form action=""
        onClick={() => document.querySelector(".input-field").click()}
        >
            <input type='file' accept='image/*' className='input-field' hidden
            onChange={({ target: {files}}) => {
                files[0] && setFileName(files[0].name)
                if(files){
                    setImage(URL.createObjectURL(files[0]))
                }
            }}
            />

            {image ?
            <img className='img' src={image} alt={fileName}/>
            :
            <>
            <FaCloudUploadAlt color='#1475cf' size={60}/>
            <p>Browse Files to upload</p>
            </>
            }
        </form>

        <section className='uploaded-row'>
            <FaFileImage color='#1475cf'/>
            <span className='upload-content'>
                {fileName} -
                <MdDelete
                onClick={() => {
                    setFileName("No selected File")
                    setImage(null)
                }}
                />
            </span>
        </section>
    </main>
  );
}

export default Upload;