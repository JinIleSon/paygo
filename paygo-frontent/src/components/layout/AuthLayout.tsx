import * as React from "react";

function AuthLayout({ children } :{ children : React.ReactNode } ) {
    return (
        <div className="h-screen w-screen bg-gray-50">  {/* h-screen은 상하로 꽉차게. 100vh / w-screen은 좌우로 꽉차게. 100vw*/}
            {children}
        </div>
    )
}

export default AuthLayout