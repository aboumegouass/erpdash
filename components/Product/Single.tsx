import React, { useState } from 'react'
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { PhotoService } from '../PhotoService';
import ImageGallery from './ImageGallery';
import { useFormik } from 'formik';
import Radio from '../Radios/Radio';
import { Dialog } from '@headlessui/react'
import Review from './Review';

export function MyDialog() {
    let [isOpen, setIsOpen] = useState(true)

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel>
                <Dialog.Title>Deactivate account</Dialog.Title>
                <Dialog.Description>
                    This will permanently deactivate your account
                </Dialog.Description>

                <p>
                    Are you sure you want to deactivate your account? All of your data
                    will be permanently removed. This action cannot be undone.
                </p>

                <button onClick={() => setIsOpen(false)}>Deactivate</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
            </Dialog.Panel>
        </Dialog>
    )
}
function Single() {
    const [value3, setValue3] = useState(1);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            payment: 155,
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="surface-section px-1 py-3 md:px-2 lg:px-3">
            <div className="grid mb-7">
                <div className="col-12 lg:col-6">
                    <div className="card">
                        <ImageGallery data={PhotoService} />
                    </div>
                </div>
                <div className="col-12 lg:col-6 py-3 lg:pl-6">
                    <div className="flex align-items-center text-xl font-medium text-900 mb-4">Product Title Placeholder</div>
                    <div className="flex align-items-center justify-content-between mb-5">
                        <span className="text-900 font-medium text-3xl block">$120</span>
                        <div className="flex align-items-center">
                            <span className="mr-3">
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star text-700 mr-1"></i>
                            </span>
                            <span className="text-sm">
                                <b className="text-900 mr-1">24</b>
                                <span className="text-500">
                                </span>reviews</span>
                        </div>
                    </div>
                    <div className="font-bold text-900 mb-3">Color</div>
                    <div className="flex align-items-center mb-5">
                        <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                            style={{ boxShadow: "0 0 0 0.2rem var(--bluegray-500)" }}>
                        </div>
                        <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-green-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"></div>
                        <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300">
                        </div>
                    </div>
                    <div className="mb-3 flex align-items-center justify-content-between">
                        <span className="font-bold text-900">Size</span>
                        <a tabIndex={0} className="cursor-pointer text-600 text-sm flex align-items-center">
                            Size Guide <i className="ml-1 pi pi-angle-right"></i>
                        </a>
                    </div>
                    <div className="grid">
                        <div className="col-3 lg:col-3">
                            <Radio
                                value={0}
                                visibile={false}
                                height={80}
                                name={'payment'}
                                p={'p-2'}
                                onChange={(e) => {
                                    formik.setFieldValue('payment', e.value);
                                }}
                                checked={formik.values.payment == 0}
                                labelSubTitle={'MD'}
                            />
                        </div>
                        <div className="col-3 lg:col-3">
                            <Radio
                                value={1}
                                p={'p-2'}
                                height={80}
                                visibile={false}
                                name={'payment'}
                                onChange={(e) => {
                                    formik.setFieldValue('payment', e.value);
                                }}
                                checked={formik.values.payment == 1}
                                labelSubTitle={'LG'}
                            />
                        </div>
                        <div className="col-3 lg:col-3">
                            <Radio
                                value={2}
                                visibile={false}
                                height={80}
                                p={'p-2'}
                                name={'payment'}
                                onChange={(e) => {
                                    formik.setFieldValue('payment', e.value);
                                }}
                                checked={formik.values.payment == 2}
                                labelSubTitle={'XL'}
                            />
                        </div>
                        <div className="col-3 lg:col-3">
                            <Radio
                                value={3}
                                name={'payment'}
                                height={80}

                                visibile={false}
                                p={'p-2'}
                                additionalClass={``}
                                onChange={(e) => {
                                    formik.setFieldValue('payment', e.value);
                                }}
                                checked={formik.values.payment == 3}
                                labelSubTitle={'XXL'}
                            />
                        </div>
                    </div>
                    <div className="font-bold text-900 mb-3">Quantity</div>
                    <div style={{ width: '100%' }}>
                        <InputNumber
                            value={value3}
                            onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)}
                            showButtons
                            buttonLayout="horizontal"
                            step={1}
                            decrementButtonClassName="p-button-default"
                            incrementButtonClassName="p-button-default"
                            incrementButtonIcon="pi pi-plus"
                            decrementButtonIcon="pi pi-minus"
                        />
                    </div>
                    <div className="flex flex-row justify-content-between mt-2">
                        <button style={{ width: '100%' }} aria-label="Add to Cart" className="p-button p-component">
                            <span className="p-button-label p-c">Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
            <Review />
        </div>
    )
}

export default Single
