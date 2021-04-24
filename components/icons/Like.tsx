import * as React from "react";

export default function Like(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit={10}
        stroke="#221b38"
        d="M20.4 4.62A5.374 5.374 0 0016.54 3c-1.39 0-2.79.54-3.86 1.62l-.68.69-.68-.69A5.43 5.43 0 007.45 3c-1.4 0-2.79.54-3.85 1.62-2.13 2.18-2.13 5.68 0 7.84L12.01 21l7.71-7.84.68-.69c2.13-2.17 2.13-5.67 0-7.85z"
      />
    </svg>
  );
}
