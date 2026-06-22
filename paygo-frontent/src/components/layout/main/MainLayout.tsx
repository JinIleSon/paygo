import type React from "react";
import Sidebar from "./Sidebar";

function MainLayout({ children }: { children: React.ReactNode}){
    return(
        <div>
            <Sidebar />
            {children}
        </div>
    )
}

export default MainLayout;