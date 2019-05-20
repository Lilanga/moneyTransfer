import React from 'react';
import { Table } from 'reactstrap';

const tableWidget = ({ records }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Transection ID</th>
                    <th>User Name</th>
                    <th>Payment Mode</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {records.map((data, i) =>
                    <tr>
                        <td scope="row">{data._id}</td>
                        <td>{data.user}</td>
                        <td>{data.mode}</td>
                        <td>{data.amount}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default tableWidget;