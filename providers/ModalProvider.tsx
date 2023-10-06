"use client";

import { useEffect, useState } from "react";


import { ProductWithPrice } from "@/types";
import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

interface ModalProviderProps {
    // products: false;
}

const ModalProvider: React.FC<ModalProviderProps> = ({

}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
            <UploadModal />
        </>
    );
}

export default ModalProvider;