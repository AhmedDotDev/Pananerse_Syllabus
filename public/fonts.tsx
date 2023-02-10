'use client'

import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={ `
  
        @font-face {
          font-family: 'Poppins-Regular';
                  font-style: normal;
          font-weight: 700;
          font-display: swap;
          src:url('fonts/Poppins-Regular.woff2') format('woff2');

        }
       
      `
    }
    />
  )
  
  export default Fonts