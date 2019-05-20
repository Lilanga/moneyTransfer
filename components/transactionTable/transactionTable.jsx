import React, { useState, useEffect } from 'react'
import { Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux';
import TableWidget from './tableWidget';
import './transactionTable.css';

const mapStateToProps = state => ({
    transactions: state.transections.transections,
});

const transectionTable = ({ transactions }) => {
    const [paginationData, setPaginationData] = useState({
        currentPage: 0,
        pagesCount: 0,
        records: [],
        page: []
    });

    const pageSize = 10;

    const handleClick = (e, index) => {
        e.preventDefault();

        const currentPage = index;
        const page = getPageRecords(index, paginationData.records);

        setPaginationData({ ...paginationData, currentPage, page });
    };

    const getPageRecords = (page, records) => {
        let pageRecords = records.slice(
            page * pageSize,
            (page + 1) * pageSize
        );

        return pageRecords;
    };

    useEffect(() => {
        if (transactions) {
            const pagesCount = Math.ceil(transactions.length / pageSize);
            const currentPage = paginationData.currentPage;
            const page = getPageRecords(currentPage, transactions);

            setPaginationData({
                currentPage: currentPage,
                pagesCount: pagesCount,
                records: transactions,
                page: page
            });
        }
    }, [transactions]);

    return (
        <Row>
            <Col>
                <div className="pagination-wrapper">

                    <Pagination aria-label="Transactions">

                        <PaginationItem disabled={paginationData.currentPage <= 0}>

                            <PaginationLink
                                onClick={e => handleClick(e, paginationData.currentPage - 1)}
                                previous
                                href="#"
                            />

                        </PaginationItem>

                        {[...Array(paginationData.pagesCount)].map((page, i) =>
                            <PaginationItem active={i === paginationData.currentPage} key={i}>
                                <PaginationLink onClick={e => handleClick(e, i)} href="#">
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        <PaginationItem disabled={paginationData.currentPage >= paginationData.pagesCount - 1}>

                            <PaginationLink
                                onClick={e => handleClick(e, paginationData.currentPage + 1)}
                                next
                                href="#"
                            />

                        </PaginationItem>

                    </Pagination>

                </div>
                <TableWidget records={paginationData.page} />
            </Col>
        </Row>
    )
}

export default connect(mapStateToProps, null)(transectionTable);