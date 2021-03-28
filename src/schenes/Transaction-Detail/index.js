/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { jsx, css } from '@emotion/react';
import {
  Layout, Navbar, Loading, Card, Button,
} from '../../components';

const TransactionDetail = () => {
  const details = useSelector((state) => state.detailFlip);
  const { detail } = details;

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
          {!(detail.loading) && (
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
          <div css={css`margin-top: 10px; color: #fd6542`}>
            <Button text="Kembali" style={{ color: '#fd6542' }} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TransactionDetail;
