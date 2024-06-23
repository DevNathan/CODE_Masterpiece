import React from 'react';

const HeartFull = ({className, fill}) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_293_2016)">
                <path
                    d="M21.8888 2.93447C19.2941 0.745404 15.4352 1.13915 13.0536 3.57197L12.1208 4.52353L11.1881 3.57197C8.81116 1.13915 4.94752 0.745404 2.35282 2.93447C-0.620661 5.44697 -0.776911 9.95634 1.88407 12.6798L11.046 22.0454C11.6379 22.6501 12.599 22.6501 13.1909 22.0454L22.3528 12.6798C25.0185 9.95634 24.8623 5.44697 21.8888 2.93447Z"
                    fill={fill}/>
            </g>
            <defs>
                <clipPath id="clip0_293_2016">
                    <rect width="24.2424" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default HeartFull;