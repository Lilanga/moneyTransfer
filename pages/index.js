import React from 'react';
import TransactionForm from '../components/transactionForm/transactionForm';
import TransactionTable from '../components/transactionTable/transactionTable';
import TransactionChart from '../components/transactionChart/transactionChart';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <div>
      <h1 className="text-center">Money Transfer</h1>
      <br />
      <TransactionForm />
      <TransactionTable />
      <br />
      <TransactionChart />
      <br />
      <style jsx>{`
          h1{
            font-family: 'Arial';
          }
        `}</style>
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  return {}
}

export default Index;