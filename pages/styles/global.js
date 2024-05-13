import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
    body {
      margin: 0; line-height: normal;
      background-color: #1D1D1D;
    }
:root {

/* fonts */
--font-dm-sans: 'DM Sans';
--font-poppins: Poppins;
--font-roboto: Roboto;

/* font sizes */
--font-size-3xs: 10px;
--font-size-5xs: 8px;
--font-size-xs: 12px;
--font-size-sm: 14px;

/* Colors */
--color-gray-100: #282828;
--color-gray-200: #242424;
--color-gray-300: rgba(255, 255, 255, 0.2);
--color-silver-100: #b5b5b5;
--color-silver-200: rgba(181, 181, 181, 0.5);
--color-tomato-100: #d15439;
--color-steelblue: #5a92cb;
--color-whitesmoke: #ebe9e8;
--color-aliceblue: #e1eaf2;
--color-white: #fff;

/* Gaps */
--gap-9xl-5: 28.5px;
--gap-xl: 20px;
--gap-3xs: 10px;
--gap-xs: 12px;
--gap-lg-6: 18.6px;
--gap-9xs-4: 3.4px;
--gap-10xs-2: 2.2px;
--gap-lg-5: 18.5px;
--gap-11xs: 2px;
--gap-xl-5: 20.5px;
--gap-9xs: 4px;
--gap-base: 16px;
--gap-4xs-5: 8.5px;
--gap-3xs-5: 9.5px;

/* Paddings */
--padding-7xs: 6px;
--padding-11xl: 30px;
--padding-mini: 15px;
--padding-7xs-5: 5.5px;
--padding-6xs: 7px;
--padding-5xl: 24px;
--padding-3xl: 22px;
--padding-sm: 14px;
--padding-9xs: 4px;
--padding-11xs-5: 1.5px;
--padding-11xs: 2px;
--padding-11xs-8: 1.8px;
--padding-12xs: 1px;
--padding-smi-6: 12.6px;
--padding-mid: 17px;
--padding-3xs-7: 9.7px;

/* Border radiuses */
--br-xs: 12px;
--br-11xs: 2px;
--br-3xs-5: 9.5px;
--br-base: 16px;

}
`;
