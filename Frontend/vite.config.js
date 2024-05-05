import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//local host or cloud host url
//https://nasa-api-pbty.onrender.com
//http://localhost:3000

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api' :{
        target: 'https://nasa-api-pbty.onrender.com', //local host or cloud host url
        secure: true,

      },
    },
  },
  plugins: [react()],
})

/*
The configuration in the above server section (line 10 - line 18) , including the proxy settings, is specifically 
for the development server, 
not for production. When your frontend application is deployed to a production server like Netlify, the server 
configuration in your Vite configuration file is not applicable. it wil be ignored automatically.

In production, your frontend application will communicate directly with the backend API without the need for
 proxy settings. Therefore, you don't need to include the server section with proxy settings in your Vite 
 configuration when deploying your frontend to a production server like Netlify.

In a production environment, you typically specify the backend server URL directly in your frontend 
code or configuration. Since your frontend is hosted on Netlify and your backend is hosted on Render, 
you'll need to update your frontend code to point to the correct backend URL. URL s should be typically
located where the fetch() methods
are used in the fronend code.
*/


