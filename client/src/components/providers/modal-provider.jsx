import { useEffect, useState } from "react";

// import PreviewModal from "../modals/preview-modal";

export const ModalProvider = ({ children })=>{
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[])
    if(!isMounted){
        return null;
    }
    
    return(
        <div >
        {children}
            {/* <PreviewModal/> */}
        </div>
    )
}