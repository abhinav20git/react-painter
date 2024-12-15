import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants/canvas"
import useImagePainter from "../hooks/useImagePainter"
import SelectColor from "./SelectColor"
import SelectImage from "./SelectImage"
import SelectRange from "./SelectRange"

const ImagePainter = () => {

    const {
        canvasRef, onMouseMove,
        onMouseDown, onMouseUp,
        onChangeColor, currentImg,
        lineWidth, onChangeLineWidth,
        handleClearCanvas, onSelectImage
    } = useImagePainter()

    return (
        <div className="flex flex-col justify-center " style={{
            padding:'5px',
            
        }}>
            <div>  
            <p style={{
            padding:'5px',
            marginLeft: '130px',
            fontFamily:'sans-serif'
        }}><b>Image Painting Widget</b></p>
            <div style={{fontFamily:'sans-serif'}}><SelectImage onChange={onSelectImage}
                label={!currentImg ? 'Select an image to upload' : currentImg} /></div>
            </div>
           
            
            <canvas ref={canvasRef}
                width={CANVAS_WIDTH}
                height={CANVAS_HEIGHT}
                onMouseMove={onMouseMove}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                style={{
                    border: '1px solid black'
                }}/>
            <br />
            <div className="flex justify-between flex-wrap"
                style={{
                    marginBottom: '10px'
                }} >
                <SelectColor onChange={onChangeColor} />
                <SelectRange value={lineWidth} onChange={onChangeLineWidth} />
                <button onClick={() => handleClearCanvas()}>
                    Clear
                </button>
            </div>
        </div>
    )
}

export default ImagePainter