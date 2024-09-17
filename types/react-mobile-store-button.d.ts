declare module 'react-mobile-store-button' {
    import React from 'react';

    interface StoreButtonProps {
        store: 'ios' | 'android';
        url: string;
        width?: number;
        height?: number;
        linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    }

    const StoreButton: React.FC<StoreButtonProps>;

    export default StoreButton;
}
