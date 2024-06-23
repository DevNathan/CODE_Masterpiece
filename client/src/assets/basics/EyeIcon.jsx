import React from 'react';

const EyeIcon = ({className, fill}) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 5.25C7.4505 5.25 3.5985 8.082 2.25 12C3.5985 15.918 7.4505 18.75 12 18.75C16.5495 18.75 20.4015 15.918 21.75 12C20.4015 8.082 16.5495 5.25 12 5.25Z"
                stroke={fill} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                stroke={fill} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default EyeIcon;