import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
  cursor: pointer;
}

:root {

  --Color-primary: #2380FB;
  --Color-primary-2: #0747A6;
  --Color-secondary:#2CD1EA;
  --Color-secondary-2: #19191F;
  --grey-1: #F8F9FA;
  --grey-2: #E9ECEF;
  --grey-3:#868E96;
  --grey-4: #121214;
  --grey-0: #212529;
  --hover: #343A40;
  --color-toast-sucess: #14AE5C;
  --color-toast-error: #BD1A1A;
  --color-toast-alert: #FBBC05;
  --color-toast-info: #8900FF;
  --font-primary: 'Nunito', sans-serif;
  --radius: 8px;
  
  h1{
    font-size: 36px;
    font-weight: bold;
    
    @media (max-width:570px) {
      font-size: 26px;
    }
  }

  h2{
    font-size: 22px;
    font-weight: bold;

    @media (max-width:570px) {
      font-size: 16px;
    }
  }

  h3{
    font-size: 16px;
    font-weight: bold;

    @media (max-width:570px) {
      font-size: 12px;
    }
  }

  h4{
    font-size: 12px;
    font-weight: bold;

    @media (max-width:570px) {
      font-size: 8px;
    }
  }
  
body{
  font-size: 16px;
  font-family: var(--font-primary);

  @media (max-width:570px) {
    font-size: 12px;
  }
}

input, label{
  font-family: var(--font-primary);
}
}
`;
