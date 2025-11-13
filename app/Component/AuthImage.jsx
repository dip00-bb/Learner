import Image from 'next/image';
import React from 'react';

const AuthImage = ({source,alt,w,h,customCss}) => {
    return (
        <Image
            src={source}
            width={w}
            height={h}
            className={customCss}
            alt={alt}
        />
    );
};

export default AuthImage;