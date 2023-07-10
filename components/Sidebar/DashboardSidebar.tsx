import React from 'react'

function DashboardSidebar() {
    const colorActv = 'hover:bg-indigo-400 text-indigo-100 hover:text-indigo-50 bg-indigo-700'
    const colorLink = `p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center transition-duration-150 transition-colors hover:bg-gray-100 border-round text-indigo-500 hover:text-indigo-700`
    return (
        <div id="app-sidebar" className="h-full lg:h-auto hidden lg:block absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-1/4 md:w-auto">
            <div className="h-full bg-white select-none">
                <div className="flex align-items-center justify-content-center flex-shrink-0 bg-gray-300" style={{ height: 60 }}>
                    <img src="/demo/images/blocks/logos/hyper-light.svg" alt="hyper-light" height={30} />
                </div>
                <div className="overflow-y-auto mt-3">
                    <ul className="list-none py-3 px-2 m-0">
                        <li className="mb-2">
                            <a className={colorLink}>
                                <i className="pi pi-home text-lg"></i>
                                <span role="presentation" className="p-ink" style={{ height: 50, width: 50 }}></span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className={colorLink}>
                                <i className="pi pi-bookmark text-lg"></i>
                                <span role="presentation" className="p-ink" style={{ height: 50, width: 50 }}></span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className={colorLink}>
                                <i className="pi pi-users text-lg"></i>
                                <span role="presentation" className="p-ink" style={{ height: 50, width: 50 }}></span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className={colorLink}>
                                <i className="pi pi-comments text-lg"></i>
                                <span role="presentation" className="p-ink" style={{ height: 50, width: 50 }}></span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className={colorLink}>
                                <i className="pi pi-calendar text-lg"></i>
                                <span role="presentation" className="p-ink" style={{ height: 50, width: 50 }}></span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className={colorLink}>
                                <i className="pi pi-cog text-lg"></i>
                                <span role="presentation" className="p-ink" style={{ height: 50, width: 50 }}></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto mx-3">
                    <hr className="mb-3 border-top-1 border-bottom-none border-gray-400" />
                    <a className="p-ripple my-3 flex align-items-center cursor-pointer py-1 px-0 justify-content-center hover:bg-indigo-400 border-round text-300 hover:text-0 transition-duration-150 transition-colors w-full">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar-f-1" style={{ width: 24, height: 24 }} />
                        <span role="presentation" className="p-ink" style={{ height: 54, width: 54 }}></span>
                    </a>
                </div>
            </div>
            <div className="surface-section p-4 overflow-y-auto">
                <div className="justify-content-end mb-3 flex lg:hidden">
                    <button className="p-button p-component p-button-rounded p-button-text p-button-plain p-button-icon-only">
                        <span className="p-button-icon p-c pi pi-times"></span>
                        <span className="p-button-label p-c">&nbsp;</span>
                        <span role="presentation" className="p-ink" style={{ height: 0, width: 0 }}></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DashboardSidebar