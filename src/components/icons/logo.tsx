import clsx from 'clsx';
import React from 'react';
export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Superb Store logo"
      viewBox="0 0 33.75 33.75"
      {...props}
      className={clsx('h-9 w-9 fill-current', props.className)} // 'h-9 w-9' corresponds to 'width: 45; height: 45' in Tailwind
    >
      {/* Simplified paths here */}
      <path d="M21.3398 25.1328C21.3398 25.4062 21.2891 25.6641 21.1875 25.918C21.082 26.168 20.9336 26.3867 20.7422 26.5781C20.5508 26.7695 20.3281 26.918 20.0781 27.0234C19.8281 27.125 19.5664 27.1797 19.2969 27.1797C19.0273 27.1797 18.7656 27.125 18.5156 27.0234C18.2617 26.918 18.043 26.7695 17.8516 26.5781C17.6602 26.3867 17.5117 26.168 17.4062 25.918C17.3047 25.6641 17.25 25.4062 17.25 25.1328C17.25 24.8633 17.3047 24.6016 17.4062 24.3516C17.5117 24.1016 17.6602 23.8789 17.8516 23.6875C18.043 23.4961 18.2617 23.3477 18.5156 23.2461C18.7656 23.1406 19.0273 23.0898 19.2969 23.0898C19.5664 23.0898 19.8281 23.1406 20.0781 23.2461C20.3281 23.3477 20.5508 23.4961 20.7422 23.6875C20.9336 23.8789 21.082 24.1016 21.1875 24.3516C21.2891 24.6016 21.3398 24.8633 21.3398 25.1328Z" />
      <path d="M 21.339844 25.132812 C 21.339844 25.40625 21.289062 25.664062 21.1875 25.917969 C 21.082031 26.167969 20.933594 26.386719 20.742188 26.578125 C 20.550781 26.769531 20.328125 26.917969 20.078125 27.023438 C 19.828125 27.125 19.566406 27.179688 19.296875 27.179688 C 19.027344 27.179688 18.765625 27.125 18.515625 27.023438 C 18.261719 26.917969 18.042969 26.769531 17.851562 26.578125 C 17.660156 26.386719 17.511719 26.167969 17.40625 25.917969 C 17.304688 25.664062 17.25 25.40625 17.25 25.132812 C 17.25 24.863281 17.304688 24.601562 17.40625 24.351562 C 17.511719 24.101562 17.660156 23.878906 17.851562 23.6875 C 18.042969 23.496094 18.261719 23.347656 18.515625 23.246094 C 18.765625 23.140625 19.027344 23.089844 19.296875 23.089844 C 19.566406 23.089844 19.828125 23.140625 20.078125 23.246094 C 20.328125 23.347656 20.550781 23.496094 20.742188 23.6875 C 20.933594 23.878906 21.082031 24.101562 21.1875 24.351562 C 21.289062 24.601562 21.339844 24.863281 21.339844 25.132812 Z" />
      <path d="M 11.90625 25.132812 C 11.90625 25.40625 11.851562 25.664062 11.75 25.917969 C 11.644531 26.167969 11.496094 26.386719 11.304688 26.578125 C 11.113281 26.769531 10.894531 26.917969 10.640625 27.023438 C 10.390625 27.125 10.132812 27.179688 9.859375 27.179688 C 9.589844 27.179688 9.328125 27.125 9.078125 27.023438 C 8.828125 26.917969 8.605469 26.769531 8.414062 26.578125 C 8.222656 26.386719 8.074219 26.167969 7.96875 25.917969 C 7.867188 25.664062 7.816406 25.40625 7.816406 25.132812 C 7.816406 24.863281 7.867188 24.601562 7.96875 24.351562 C 8.074219 24.101562 8.222656 23.878906 8.414062 23.6875 C 8.605469 23.496094 8.828125 23.347656 9.078125 23.246094 C 9.328125 23.140625 9.589844 23.089844 9.859375 23.089844 C 10.132812 23.089844 10.390625 23.140625 10.640625 23.246094 C 10.894531 23.347656 11.113281 23.496094 11.304688 23.6875 C 11.496094 23.878906 11.644531 24.101562 11.75 24.351562 C 11.851562 24.601562 11.90625 24.863281 11.90625 25.132812 Z" />
      <path d="M 2.261719 6.410156 C 5.460938 9.40625 9.191406 10.6875 16.003906 10.6875 C 22.816406 10.6875 31.238281 10.308594 31.238281 12.488281 C 31.238281 13.558594 30.09375 14.632812 28.0625 16.441406 C 26.027344 18.25 22.40625 21.316406 22.40625 21.316406 C 22.40625 20.394531 27.65625 15.886719 27.65625 14.445312 C 27.65625 12.523438 19.746094 12.820312 16.164062 12.746094 C 10.085938 12.621094 5.097656 11.785156 2.261719 6.410156 Z" />
    </svg>
  );
}