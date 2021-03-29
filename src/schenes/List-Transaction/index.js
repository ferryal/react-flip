/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '../../actions/flip';
import {
  Navbar, Layout, Card, Loading, SearchBar, Filter,
} from '../../components';
import { getCurrencyString } from '../../helper/currency';

const ListTransaction = ({ isSearchable = true }) => {
  const transactions = useSelector((state) => state.listFlip);
  const { list } = transactions;
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [placeholder, setplaceholder] = useState('urutkan');
  const dispatch = useDispatch();

  useEffect(() => {
    let totalAmount = 0;
    Object.entries(list).map((data) => {
      totalAmount += Number(data[1].amount);
    });
    setTotal(totalAmount);
    setItems(Object.entries(list));
  }, [list]);

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  const handleSearch = () => {
    const stringCapitalize = search.charAt(0).toUpperCase() + search.slice(1);
    if (search.length >= 3) {
      const array = Object.entries(list);
      const found = array.filter((data) => data[1].beneficiary_name.includes(search)
        || data[1].sender_bank.includes(search)
        || data[1].beneficiary_bank.includes(search)
        || data[1].beneficiary_name.includes(stringCapitalize));
      setItems(found);
    } else {
      setItems(Object.entries(list));
    }
  };

  const handleSort = (e) => {
    const { id } = e.target;
    if (id === 'asc') {
      setplaceholder('Nama A-Z');
      const sortAsc = items.sort((a, b) => a[1].beneficiary_name.localeCompare(b[1].beneficiary_name));
      setItems(sortAsc);
    } else {
      setplaceholder('Nama Z-A');
      const sortDesc = items.sort((a, b) => b[1].beneficiary_name.localeCompare(a[1].beneficiary_name));
      setItems(sortDesc);
    }
    setShow(false);
  };

  const renderList = () => (
    <>
      {items.map((data, key) => (
        <Card
          rounded="rounded"
          elevated="eleveated"
          key={key}
          data={data}
          isDetail={false}
          id={data[0]}
        />
      ))}
    </>
  );

  return (
    <Layout>
      <div>
        <Navbar title="Daftar Transaksi" />
        <div>
          <h3 css={css`margin-bottom: 0px;`}>Halo kak!</h3>
          <p css={css`margin-top: 0px;`}>
            Kamu telah melakukan transaksi sebesar
            <strong css={css`color:#fd6542;padding-left:5px;`}>{getCurrencyString(total)}</strong>
            {' '}
            sejak menggunakan Flip.
          </p>
        </div>
        <div css={css`margin-bottom: 20px;`}>
          {isSearchable && (
            <SearchBar
              value={search}
              onChange={(e) => { setSearch(e.target.value); }}
              onKeyUp={handleSearch}
            >
              <Filter placeholder={placeholder} onClick={() => setShow(!show)} />
              {
                show && (
                  <div css={css`
                  top: 49px;
                  max-height: 111px;
                  width: 30%;
                  box-shadow: rgb(0 0 0 / 20%) 0px 7px 20px 0px;
                  border-bottom-left-radius: 5px;
                  border-bottom-right-radius: 5px;
                  position: absolute;
                  transition: max-height .3s ease-out;
                  overflow: auto;
                  right: 1px;
                `}
                  >
                    <div
                      css={css`
                    border-top: 1px solid #fd6542;
                    background-color: rgb(255, 255, 255);
                    color: rgb(51, 51, 51);
                    padding: 11px 7px;
                    cursor: pointer;
                    &:hover {
                      background-color: #e5d4d0;
                    }
                  `}
                      onClick={handleSort}
                      id="asc"
                    >
                      <span>Nama A-Z</span>
                    </div>
                    <div
                      css={css`
                    border-top: 1px solid rgb(242, 242, 242);
                    background-color: rgb(255, 255, 255);
                    color: rgb(51, 51, 51);
                    padding: 11px 7px;
                    cursor: pointer;
                    &:hover {
                      background-color: #e5d4d0;
                    }
                  `}
                      onClick={handleSort}
                      id="desc"
                    >
                      <span>Nama Z-A</span>
                    </div>
                  </div>
                )
              }
            </SearchBar>
          )}
        </div>
        <div>
          { items.length !== 0 ? renderList() : <Loading />}
        </div>
      </div>
    </Layout>
  );
};

export default ListTransaction;
