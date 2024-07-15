import React from "react";

type Props = {};

const FooterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full animate-smiley-spin text-zinc-200"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>

    // second svg

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth="0.75"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   className="h-full w-full animate-smiley-spin text-zinc-200"
    // >
    //   <circle cx="12" cy="12" r="10" />
    //   <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
    //   <line x1="9" x2="9.01" y1="9" y2="9" />
    //   <line x1="15" x2="15.01" y1="9" y2="9" />
    // </svg>
  );
};

export default FooterIcon;
