import React,{useState} from 'react'
import Overlay from "react-overlay-component";
import Caro from './Caro';
import NoDataFound from './NoDataFound';
import SearchBarOverlay from './Overlay/SearchBarOverlay';


const Popup = (props) => {
    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
        // clickDismiss: false,
        // escapeDismiss: false,
        // focusOutline: false,
    };
    // if(props.flag === 'haaa') 
    // {
    //     console.log("object")
    //     setOverlay(true)
    // }
  return (
    <div>
    <button
        className="primary"
        onClick={() => {
            setOverlay(true);
        }}
    >
        open modal
    </button>
    
    
    

    <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        {/* <Caro/> */}
        <NoDataFound/>

        {/* <button
            className="danger"
            onClick={() => {
                setOverlay(false);
            }}
        >
            close modal
        </button> */}
    </Overlay>
</div>
  )
}

export default Popup