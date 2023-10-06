"use client";

import { useEffect, useState } from "react";


import { ProductWithPrice } from "@/types";
import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";

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
        </>
    );
}

export default ModalProvider;