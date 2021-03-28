/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jsx, css } from '@emotion/react';
import Button from './Button';
import { getCurrencyString } from '../helper/currency';
import { fetchDetail } from '../actions/flip';

const Card = (props) => {
  const {
    rounded, style, className, id, isDetail, children, data,
  } = props;
  const dispatch = useDispatch();
  const [month, setmonth] = useState(null);
  const [day, setday] = useState(null);
  const [year, setyear] = useState(null);
  const [senderBank, setsenderBank] = useState('');
  const [beneficiaryBank, setbeneficiaryBank] = useState('');
  const [remark, setremark] = useState('');

  useEffect(() => {
    const date = new Date(data[1].completed_at);
    setmonth(date.toLocaleString('id-ID', { month: 'long' }));
    setday(String(date.getDate()).padStart(2, '0'));
    setyear(date.getFullYear());

    if (data[1].sender_bank.length <= 4) {
      setsenderBank(data[1].sender_bank.toUpperCase());
    } else {
      setsenderBank(data[1].sender_bank.charAt(0).toUpperCase() + data[1].sender_bank.slice(1));
    }

    if (data[1].beneficiary_bank.length <= 4) {
      setbeneficiaryBank(data[1].beneficiary_bank.toUpperCase());
    } else {
      setbeneficiaryBank(data[1].beneficiary_bank.charAt(0).toUpperCase() + data[1].beneficiary_bank.slice(1));
    }

    setremark(data[1].remark.charAt(0).toUpperCase() + data[1].remark.slice(1));
  }, [isDetail !== true]);

  const handleTransaction = () => {
    dispatch(fetchDetail(data));
  };

  return (
    <>
      {
        !isDetail
          ? (
            <Link to={`/transaksi/${id}`} css={{ color: '#292829', textDecoration: 'none' }} onClick={handleTransaction}>
              <div
                className={className}
                css={css`
                  border-top-left-radius: 3px;
                  border-bottom-left-radius: 3px;
                  border-radius: 3px;
                  cursor: pointer;
                  padding: 10px 0;
                  margin-top: .5rem;
                  background: #fff;
                `}
                style={{ borderLeft: data[1].status === 'SUCCESS' ? '4px solid #56b586' : '4px solid #fd6542' }}
              >

                <div css={css`
                  padding: 0 15px;
                  background: #fff;`}
                >
                  <div css={css`
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-right: -15px;
                    margin-left: -15px;
                  `}
                  >
                    <div css={css`padding-left: 15px;`}>
                      <strong>
                        {senderBank}
                        {' '}
                        ➔
                        {' '}
                        {beneficiaryBank}
                      </strong>
                      <br />
                      {data[1].beneficiary_name.toUpperCase()}
                      <br />
                      {getCurrencyString(data[1].amount)}
                      {' '}
                      •
                      {day}
                      {' '}
                      {month}
                      {' '}
                      {year}
                    </div>
                    <div css={css`padding-right: 15px; margin-top: 22px;`}>
                      <div>
                        <Button text={data[1].status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
          : (
            <>
              <div
                className={className}
                css={css`
                  border-top-left-radius: 3px;
                  border-bottom-left-radius: 3px;
                  border-radius: 3px;
                  cursor: pointer;
                  padding: 10px 0;
                  margin-top: .5rem;
                  background: #fff;
                `}
              >

                <div css={css`
                  padding: 0 15px;
                  background: #fff;`}
                >
                  <div css={css`
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-right: -15px;
                    margin-left: -15px;
                  `}
                  >
                    <div css={css`padding-left: 15px;`}>
                      <strong>
                        ID TRANSAKSI: #
                        {data[1].id}
                      </strong>
                    </div>
                    <div css={css`padding-right: 15px;`}>
                      <div>
                        <Button text={data[1].status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={className}
                css={css`
                  border-top-left-radius: 3px;
                  border-bottom-left-radius: 3px;
                  border-radius: 3px;
                  padding: 10px 0;
                  margin-top: .5rem;
                  background: #fff;
                `}
              >

                <div css={css`
                  padding: 0 15px;
                  background: #fff;`}
                >
                  <div css={css`
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-right: -15px;
                    margin-left: -15px;
                  `}
                  >
                    <div css={css`padding-left: 15px; margin-top: 22px;`}>
                      <div>
                        <Button text={data[1].status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'} />
                      </div>
                    </div>
                    <div css={css`padding-left: 15px;flex-grow:1;`}>
                      <div css={css`margin-bottom: 15px; margin-top: 15px;`}>
                        <strong>PENGIRIM</strong>
                        <br />
                        {senderBank}
                      </div>

                      <div css={css`margin-bottom: 15px;`}>
                        <strong>PENERIMA</strong>
                        <br />
                        {beneficiaryBank}
                        <br />
                        {data[1].account_number}
                        <br />
                        {data[1].beneficiary_name}
                      </div>

                      <div css={css`margin-bottom: 15px;`}>
                        <strong>NOMINAL</strong>
                        <br />
                        {getCurrencyString(data[1].amount)}
                        <br />
                        <strong>Kode Unik:</strong>
                        {data[1].unique_code}
                      </div>

                      <div css={css`margin-bottom: 15px;`}>
                        <strong>CATATAN</strong>
                        <br />
                        {remark}
                      </div>

                      <div css={css`margin-bottom: 15px;`}>
                        <strong>WAKTU DIBUAT</strong>
                        <br />
                        {day}
                        {' '}
                        {month}
                        {' '}
                        {year}
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </>
          )
      }
    </>
  );
};

export default Card;
