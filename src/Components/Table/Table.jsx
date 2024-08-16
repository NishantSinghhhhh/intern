import React from 'react';
import styles from './Table.module.css';

const Table = ({ headings, rows }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index} className={styles.tableHeader}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headings.map((heading, colIndex) => (
                <td key={colIndex} className={styles.tableCell}>
                  {row[heading] || 'N/A'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
