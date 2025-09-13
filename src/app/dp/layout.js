import React from 'react';
import '../globals.css';
import Head from 'next/head';


const DashboardLayout = ({ children }) => {
    return (
        <html lang="en">
            <Head>
                <title>IronyFit | Dashboard</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
                {/* <script src="https://cdn.jsdelivr.net/npm/chart.js" /> */}
            </Head>
            <body>
                <div>
                    {children}
                </div>
            </body>
        </html>
    );
}

export default DashboardLayout;
