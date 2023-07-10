import React from 'react'
import Radio from './Radio'
import { useFormik } from 'formik';

function RadioGroup() {
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
        <div className="grid">
            <div className="col-12 lg:col-6 p-3">
                <Radio
                    value={0}
                    name={'payment'}
                    onChange={(e) => {
                        formik.setFieldValue('payment', e.value);
                    }}
                    checked={formik.values.payment == 0}
                    icon={<i className="pi pi-credit-card text-2xl text-indigo-600"></i>}
                    labelTitle={'Lorem ipsum dolor'}
                    labelSubTitle={'Lorem ipsum dolor sit amet'}
                />
            </div>
            <div className="col-12 lg:col-6 p-3">
                <Radio
                    value={1}
                    name={'payment'}
                    onChange={formik.handleChange}
                    checked={formik.values.payment == 1}
                    icon={<i className="pi pi-paypal text-2xl text-indigo-600"></i>}
                    labelTitle={'Lorem ipsum dolor'}
                    labelSubTitle={'Lorem ipsum dolor sit amet'}
                />
            </div>
            <div className="col-12 lg:col-6 p-3">
                <Radio
                    value={2}
                    name={'payment'}
                    onChange={formik.handleChange}
                    checked={formik.values.payment == 2}
                    icon={<i className="pi pi-wise text-2xl text-indigo-600"></i>}
                    labelTitle={'Lorem ipsum dolor'}
                    labelSubTitle={'Lorem ipsum dolor sit amet'}
                />
            </div>
            <div className="col-12 lg:col-6 p-3">
                <Radio
                    value={3}
                    name={'payment'}
                    onChange={formik.handleChange}
                    checked={formik.values.payment == 3}
                    icon={<i className="pi pi-credit-card text-2xl text-indigo-600"></i>}
                    labelTitle={'Lorem ipsum dolor'}
                    labelSubTitle={'Lorem ipsum dolor sit amet'}
                />
            </div>
        </div>
    )
}

export default RadioGroup