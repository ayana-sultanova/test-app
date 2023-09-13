import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Маршрут',
        dataIndex: 'route',
        key: 'route',
    },
];

// @ts-ignore
const RouteTable = ({ routes, onRouteSelect }) => {
    return (
        <Table
            dataSource={routes}
            columns={columns}
            onRow={(record) => ({
                onClick: () => onRouteSelect(record),
            })}
        />
    );
};

export default RouteTable;