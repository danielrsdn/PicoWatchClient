import "./Photos.css"
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import IconButton from '@mui/material/IconButton';
import { useSelector } from "react-redux";
import { useState } from "react";

const Image = ({imageUrl, imageName}) => {
    const [displayOptions, setDisplayOptions] = useState(false);
    return (
        <div className="Image-box" onMouseEnter={() => {setDisplayOptions(true)}} onMouseLeave={() => {setDisplayOptions(false)}}>
            <img src={imageUrl} alt={imageName}>
            </img>
            {displayOptions && 
             <div className="image-panel">
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit"/>
                </IconButton>
                <IconButton aria-label="download" size="large">
                    <DownloadIcon fontSize="inherit"/>
                </IconButton>
            </div>
            }
        </div>
    );

}

export default Image;