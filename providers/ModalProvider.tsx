"use client"

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {

    const [isMounted, setIsmounted] = useState(false);

    useEffect(()=>{

        setIsmounted(true);
    },[])

    if(!isMounted){
        return null;
    }
    return ( 
        
        <>
            <AuthModal/>
            <UploadModal/>
        </>
     );
}
 
export default ModalProvider;