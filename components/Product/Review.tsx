import React from 'react'

function Review() {
    return (
        <>
            <div className="p-tabview p-component">
                <div className="p-tabview-nav-container">
                    <div className="p-tabview-nav-content" id="pr_id_1">
                        <ul className="p-tabview-nav" role="tablist">
                            <li className="p-unselectable-text p-tabview-selected p-highlight" role="presentation">
                                <a role="tab" className="p-tabview-nav-link" id="pr_id_1_header_0" aria-controls="pr_id_1_content_0" aria-selected="true" tabIndex={0}>
                                    <span className="p-tabview-title">Details</span>
                                    <span role="presentation" className="p-ink" style={{ height: 91.4219, width: 91.4219 }}>
                                    </span>
                                </a>
                            </li>
                            <li className="p-unselectable-text" role="presentation">
                                <a role="tab" className="p-tabview-nav-link" id="pr_id_1_header_1" aria-controls="pr_id_1_content_1" aria-selected="false" tabIndex={0}>
                                    <span className="p-tabview-title">Reviews</span>
                                    <span role="presentation" className="p-ink" style={{ height: 100.375, width: 100.375 }}></span>
                                </a>
                            </li>
                            <li className="p-unselectable-text" role="presentation">
                                <a role="tab" className="p-tabview-nav-link" id="pr_id_1_header_2" aria-controls="pr_id_1_content_2" aria-selected="false" tabIndex={0}>
                                    <span className="p-tabview-title">Shipping</span><span role="presentation" className="p-ink" style={{ height: 107.125, width: 107.125 }}></span>
                                </a>
                            </li>
                            <li className="p-tabview-ink-bar" style={{ width: 91, left: 0 }}></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-tabview-panels">
                <div id="pr_id_1_content_0" aria-labelledby="pr_id_1_header_0" aria-hidden="false" className="p-tabview-panel" role="tabpanel">
                    <div className="text-900 font-medium text-3xl mb-4 mt-2">Product Details</div>
                    <p className="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.</p>
                    <div className="grid">
                        <div className="col-12 lg:col-4">
                            <span className="text-900 block font-medium mb-3">Highlights</span>
                            <ul className="py-0 pl-3 m-0 text-700 mb-3">
                                <li className="mb-2">Vulputate sapien nec.</li>
                                <li className="mb-2">Purus gravida quis blandit.</li>
                                <li className="mb-2">Nisi quis eleifend quam adipiscing.</li>
                                <li>Imperdiet proin fermentum.</li>
                            </ul>
                        </div>
                        <div className="col-12 lg:col-4">
                            <span className="text-900 block font-medium mb-3">Size and Fit</span>
                            <ul className="list-none p-0 m-0 text-700 mb-4">
                                <li className="mb-3">
                                    <span className="font-medium">Leo vel:</span> Egestas congue.
                                </li>
                                <li className="mb-3">
                                    <span className="font-medium">Sociis natoque:</span> Parturient montes nascetur.
                                </li>
                                <li>
                                    <span className="font-medium">Suspendisse in:</span> Purus sit amet volutpat.
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 lg:col-4">
                            <span className="text-900 block font-medium mb-3 ">Material &amp; Care</span>
                            <ul className="p-0 m-0 text-700 flex flex-wrap flex-column xl:flex-row">
                                <li className="flex align-items-center white-space-nowrap w-10rem mr-2 mb-3">
                                    <i className="pi pi-sun mr-2"></i>
                                    <span>Not dryer safe</span>
                                </li>
                                <li className="flex align-items-center white-space-nowrap w-10rem mb-3">
                                    <i className="pi pi-times-circle mr-2"></i>
                                    <span>No chemical wash</span>
                                </li>
                                <li className="flex align-items-center white-space-nowrap w-10rem mb-3 mr-2">
                                    <i className="pi pi-sliders-h mr-2"></i>
                                    <span>Iron medium heat</span>
                                </li>
                                <li className="flex align-items-center white-space-nowrap w-10rem mb-3">
                                    <i className="pi pi-minus-circle mr-2"></i>
                                    <span>Dry flat</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review