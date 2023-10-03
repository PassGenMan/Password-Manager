import { useState } from 'react';

const Item = ({ note, password }) => {
  const [showPass, setShowPass] = useState(false);

  const toggleShowPassword = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };

  const getDisplayClass = (index) => (showPass ? 'dispN' : 'dispB');

  return (
    <div className="contents">
      <p>{note}</p>
      <p className="pass">
        <span className={getDisplayClass(0)}>************</span>
        <span className={getDisplayClass(1)}>{showPass ? password : ''}</span>
      </p>
      <div className="showButton">
        <button onClick={toggleShowPassword}>
          <div className={getDisplayClass(0)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye"
              viewBox="0 0 16 16"
            >
              {/* Your SVG code for the eye icon */}
            </svg>
          </div>
          <div className={getDisplayClass(1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye-slash"
              viewBox="0 0 16 16"
            >
              {/* Your SVG code for the crossed eye icon */}
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Item;
