import React, { useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchTransactionSummaryRequest } from "../../store/transection";
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

const mapStateToProps = state => ({
    summary: state.transections.summary,
});

const mapDispatchToProps = dispatch => ({
    fetchSummary: () => { dispatch(fetchTransactionSummaryRequest()) },
});

const transactionChart = ({ summary, fetchSummary }) => {
    ReactChartkick.addAdapter(Chart);
    const dispatchActions = action => {
        useEffect(() => {
            action();
        }, [])
    }

    dispatchActions(fetchSummary);

    return (
        <Row>
            <Col>
            <LineChart data={summary} />
            </Col>
        </Row>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(transactionChart);