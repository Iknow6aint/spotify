"use client";

import { useEffect, useState } from "react";


import { ProductWithPrice } from "@/types";

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

        </>
    );
}

export default ModalProvider;