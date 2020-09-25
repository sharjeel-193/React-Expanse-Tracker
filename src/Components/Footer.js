import React from 'react';

const style = {
    background: 'linear-gradient(to bottom, rgba(47,79,79,1) 0%, rgba(79,79,101,1) 100%)',
    color: '#e4e5e6',
    marginTop: '20px',
    marginBottom: '0'

}
export default function Footer() {
  return (
    <footer style={style}>
        &#169; Softech Inc.
        <br />
        Muhammad Sharjeel Maqsood
    </footer>
  );
}
