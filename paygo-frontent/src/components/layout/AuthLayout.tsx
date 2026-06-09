import * as React from 'react';

function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen w-screen bg-gray-50">
            {/* 1280px 이상은 내부 컴포넌트(1280px 이하)에 대해 찌그러지지 않음 */}
           <div className="flex h-screen min-w-[1280px]">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;
