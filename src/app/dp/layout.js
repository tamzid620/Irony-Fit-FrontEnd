import React from 'react';
import '../globals.css';

const DashboardLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

export default DashboardLayout;
