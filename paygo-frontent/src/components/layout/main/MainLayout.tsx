import type React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        // h-screen: 전체 높이 고정 (main 스크롤을 위해 필요)
        <div className="flex h-screen min-w-[1280px]">
            <Sidebar />
            {/* flex-1: Sidebar 제외한 나머지 가로 공간 차지 */}
            {/* min-w-0: 자식 내용물이 넓어져도 flex-1 너비를 초과하지 못하게. min-width:auto를 사용하지 않기 위함. */}
            <div className="flex flex-1 flex-col min-w-0">
                <Topbar />
                {/* flex-1: Topbar 제외한 나머지 세로 공간 차지 */}
                {/* overflow-y-auto: 내용물이 넘치면 세로 스크롤 */}
                <main className="flex-1 overflow-y-auto [scrollbar-gutter:stable] bg-[#F6F5F8]">
                    <div className="max-w-[1000px] mx-auto px-8 py-6.5 ">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MainLayout;
