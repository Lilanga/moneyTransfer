import { LineChart, Line } from 'recharts';
import { Row, Col } from 'reactstrap';

const transactionChart = () => {
    return (
        <Row>
            <Col>
                <LineChart width={600} height={400}>
                    <Line type="monotone" dataKey="mode" stroke="#8884d8" />
                </LineChart>
            </Col>
        </Row>
    )
}

export default transactionChart;