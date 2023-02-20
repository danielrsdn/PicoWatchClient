import ImageRow from "./ImageRow";
import "./Photos.css"

const Photos = () => {

    const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    const displayImages = (listOfPhotos) => {
        const rowsList = [];
        var i = 0;
        while (i < (listOfPhotos.length/2)) {
            const sublist = [];
            sublist.push(listOfPhotos[2*i]);
            if ((2*i)+1 < listOfPhotos.length) {
                sublist.push(listOfPhotos[(2*i)+1]);
            }
            rowsList.push(sublist);
            i++;
        }
        return rowsList;
    }

    return (
        <div className="Photos">
            <div className="Header">
                Photos captured by device
            </div>
            <div className="Scroll-box">
                {displayImages(photos).map((imageRowList) => {
                    //k = imageRowList[0].name;
                    var k = imageRowList[0];
                    if (imageRowList.length > 1) {
                        //k = k + " " + imageRowList[1].name;
                        k = k + " " + imageRowList[1];
                    }
                    return <ImageRow key={k} image1={imageRowList[0]} image2={imageRowList.length > 1 ? imageRowList[1] : null}/>;
                })}
            </div>
        </div>

    );
};

export default Photos;