import "./Photos.css"
import Image from "./Image";

const parisUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/2560px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg";
const ImageRow = ({image1, image2}) => {
    return (
        <div className="Image-row">
            <Image imageUrl={parisUrl} imageName={"Paris"}/>
            {(image2 != null) && <Image imageUrl={parisUrl} imageName={"Paris"}/>}
        </div>
    );
};

export default ImageRow;