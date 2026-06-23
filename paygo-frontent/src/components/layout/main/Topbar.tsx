import { IconBell, IconSearch } from '@tabler/icons-react';

function Topbar() {
    return (
        <div className="flex items-center w-full font-bold border-b border-[#D9D9D9] shrink-0 p-5">
            <div className="pl-3">지갑 홈</div>
            <div className="flex gap-3 ml-auto">
                <IconBell size={26} className="cursor-pointer" color="gray" />
                <IconSearch size={26} className="cursor-pointer" color="gray" />
            </div>
        </div>
    );
}

export default Topbar;
