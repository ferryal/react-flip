/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { jsx, css } from '@emotion/react';
import { useHistory } from 'react-router-dom';
import {
  Layout, Navbar, Loading, Card, Button,
} from '../../components';

const TransactionDetail = () => {
  const details = useSelector((state) => state.detailFlip);
  const { detail } = details;
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(detail).length === 0) {
      history.push('/');
    }
  }, [Object.keys(detail).length === 0]);

  return (
    <Layout>
      <div>
        <Navbar title="Detail Transaksi" />
        <div>
          {detail.loading && (
            <div css={css`margin-top: 1rem;`}>
              <Loading />
            </div>
          )}
          {Object.keys(detail).length !== 0 && (
            <>
              <Card
                rounded="rounded"
                elevated="eleveated"
                key={detail[0]}
                data={detail}
                isDetail
              />
            </>
          )}
          <div css={css`margin-top: 1.5rem;`}>
            <Button text="Kembali" style={{ color: '#fd6542' }} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TransactionDetail;
