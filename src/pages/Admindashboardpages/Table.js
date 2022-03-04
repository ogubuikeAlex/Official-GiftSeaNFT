import * as React from 'react';
import styled from 'styled-components'

function createData(id, description, amount, address, date, time) {
  return { id, description, amount, address, date, time };
}

const rows = [
  createData('#105', 'Bought Africana Ape NFT', '20.89ETH', "0x30bf50....", '20 SEP, 2021', '2:00pm'),
  createData('#105', 'Sold Africana Ape NFT', '20.89ETH', "0x30bf50....", '20 SEP, 2021', '2:00pm'),
  createData('#105', 'Bought Africana Ape NFT', '20.89ETH', "0x30bf50....", '20 SEP, 2021', '2:00pm'),
  createData('#105', 'Sold Africana Ape NFT', '20.89ETH', "0x30bf50....", '20 SEP, 2021', '2:00pm'),
];

 function BasicTable() {
  return (
    <TableStyled className='table-responsive'>
    <table className="table">
    <thead style={{borderStyle: 'none'}}>
      <tr>
        <th>ID</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Address</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody style={{border:'#bbb' }}>
      {rows.map((row) => (
        <tr key={row._id}>
          <td>{row.id}</td>
          <td>{row.description}</td>
          <td>{row.amount}</td>
          <td>{row.address}</td>
          <td>{row.date}</td>
          <td>{row.time}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </TableStyled>
  );
}

const TableStyled = styled.div`
th{
  @media(max-width: 900px){
    font-size: 13px;
  }
}
td{
  @media(max-width: 900px){
    font-size: 11px;
  }
}
  width: 100%;
  height: fit-content;
  overflow-x: auto;
  background: #FFF;
  box-shadow: 2px 4px 4px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  transform: translate(-50% -50%);
`;


export default BasicTable;

