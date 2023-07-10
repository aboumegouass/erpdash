import React from 'react'

function DashboardNavbar() {
    return (
        <div className="flex justify-content-between align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static" style={{ height: 60 }}>
            <div className="flex">
                <a className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                    <i className="pi pi-bars text-4xl"></i>
                    <span role="presentation" className="p-ink" style={{ height: 0, width: 0 }}></span>
                </a>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <input type="search" className="p-inputtext p-component border-none" placeholder="Search" />
                </span>
            </div>

            <a className="p-ripple cursor-pointer block lg:hidden text-700">
                <i className="pi pi-ellipsis-v text-2xl"></i>
                <span role="presentation" className="p-ink" style={{ height: 0, width: 0 }}></span>
            </a>
            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors w-full">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <span role="presentation" className="p-ink" style={{ height: 56, width: 56 }}></span>
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors w-full"><i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                        <span className="p-badge p-component p-badge-dot p-badge-danger"></span>
                    </i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <span role="presentation" className="p-ink" style={{ height: 56, width: 56 }}></span>
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors w-full">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" alt="avatar-f-1" style={{ width: 32, height: 32 }} />
                        <div className="block lg:hidden"><div className="text-900 font-medium">Josephine Lillard</div>
                            <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                        <span role="presentation" className="p-ink" style={{ height: 64, width: 64 }}></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default DashboardNavbar