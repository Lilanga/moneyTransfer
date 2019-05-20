import React from 'react';
import TransactionForm from '../components/transactionForm/transactionForm';
import TransectionTable from '../components/transactionTable/transactionTable';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <div>
      <h1 className="text-center">Money Transfer</h1>
      <br />
      <TransactionForm />
      <TransectionTable />
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