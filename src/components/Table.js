import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ list, total }) => (
  <>
    <table width="100%" className="mb-10">
      <thead>
        <tr className="bg-gray-100 p-1">
          <td className="font-bold">Item description</td>
          <td className="font-bold">Quantity</td>
          <td className="font-bold">Price</td>
          <td className="font-bold">Amount</td>
        </tr>
      </thead>
      {list && list.map((item) => (
        <React.Fragment key={item.id}>
          <tbody>
            <tr>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
            </tr>
          </tbody>
        </React.Fragment>
      ))}
    </table>
    <div>
      <h2 className="flex items-end justify-end text-gray-600 text-4xl">
        Kshs
        {' '}
        {total.toLocaleString()}
      </h2>
    </div>
  </>
);

Table.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  list: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};

export default Table;
