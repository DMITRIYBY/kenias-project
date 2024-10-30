const PinOutline = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6698 11.7679L18.0554 5.63974L17.5358 5.33974C17.3148 5.21213 17.1609 5.01289 17.0866 4.78827C17 4.52682 17.0212 4.23098 17.1698 3.97371C17.4459 3.49542 18.0575 3.33155 18.5358 3.60769L25.464 7.60769C25.9423 7.88383 26.1062 8.49542 25.83 8.97371C25.6815 9.23098 25.4359 9.39728 25.1662 9.45307C24.9345 9.50099 24.685 9.46735 24.464 9.33974L23.9444 9.03974L21.33 16.7679L21.5428 16.8908C21.9295 17.114 22.1213 17.5665 22.0129 17.9997L20.7501 23.0441C20.5887 23.6886 19.8554 23.9994 19.28 23.6673L7.71982 16.993C7.14445 16.6608 7.04701 15.8703 7.52448 15.4083L11.2617 11.7924C11.5825 11.482 12.0703 11.4219 12.457 11.6451L12.6698 11.7679ZM14.4361 12.7877L19.8218 6.65954L22.178 8.01993L19.5637 15.7481L14.4361 12.7877ZM12.1102 13.7543L9.86794 15.9238L19.1319 21.2723L19.8896 18.2457L12.1102 13.7543Z"
      />
      <rect
        x="13.1339"
        y="18.9641"
        width="2"
        height="8"
        rx="1"
        transform="rotate(30 13.1339 18.9641)"
      />
    </svg>
  )
}

export default PinOutline