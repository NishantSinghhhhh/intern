import React, { useState } from 'react';
import Styles from './Response.module.css'; // Import the CSS Module

const Response = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(data)
      .then(() => setCopied(true))
      .catch(err => console.error('Failed to copy text: ', err));
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className={Styles.responseContainer}>
      <div className={Styles.codeBlock}>
        <pre className={Styles.responseCode}>
          {data}
        </pre>
      </div>
      <div className={Styles.copySection}>
        <button className={Styles.copyButton} onClick={copyToClipboard}>
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
    </div>
  );
};

export default Response;
