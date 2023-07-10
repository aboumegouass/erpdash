import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Customer } from '@/types/customer';
import { CustomerService } from '@/lib/data';

function TableServices() {
    const [customers, setCustomers] = useState<Customer[]>();
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status: string) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data: any) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const onGlobalFilterChange = (e: any) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText
                        value={globalFilterValue}
                        onChange={onGlobalFilterChange}
                        placeholder="Keyword Search"
                    />
                </span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData: any) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const header = renderHeader();
    return (
        <DataTable
            value={customers}
            paginator rows={10}
            dataKey="id"
            filters={filters}
            loading={loading}
            globalFilterFields={['name', 'country.name', 'representative.name', 'status']}
            header={header}
            emptyMessage="No customers found.">

            <Column field="name" header="Name" filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
            <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} />
            <Column field="status" header="Status" style={{ minWidth: '12rem' }} body={statusBodyTemplate} />
        </DataTable>
    )
}

export default TableServices