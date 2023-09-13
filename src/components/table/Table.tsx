import React from 'react';
import {Table} from 'antd';
import {useDispatch} from "react-redux";
import {selectRoute} from "../../redux/actions/routeActions";
import {data} from "../../utils/constants";

const {Column} = Table;

const TableBlock: React.FC = () => {

    const dispatch = useDispatch();

    const handleRouteSelect = (routeIdentifier: React.Key) => {
        const selectedRoute = data.find((route) => route.key === routeIdentifier);
        if (selectedRoute) {
            // @ts-ignore
            dispatch(selectRoute(selectedRoute));
        }
    };

    return (
            <Table
                onRow={(record) => {
                    return {
                        onClick: event => {handleRouteSelect(record.key)}
                    };
                }}
                dataSource={data}>
                <Column title="Маршрут" dataIndex="number" key="number"/>
                <Column title="Точка 1 (lat, Ing)" dataIndex="params_1" key="params_1"/>
                <Column title="Точка 2 (lat, Ing)" dataIndex="params_2" key="params_2"/>
                <Column title="Точка 3 (lat, Ing)" dataIndex="params_3" key="params_3"/>
            </Table>
    )
};

export default TableBlock;