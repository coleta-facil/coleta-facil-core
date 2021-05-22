import React from "react";
import "./styles.scss";

const BaseModal = (props) => {
  const { title = "Empty", visibility = false, setVisibility, children } = props;

  return (
    visibility && (
      <div className="modal-container">
        <div
          className="modal-overlay"
          onClick={(e) => {
            setVisibility(false);
            e.stopPropagation();
          }}
        ></div>

        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header>
            <h2>{title}</h2>

            <button className="btn-close" onClick={() => setVisibility(false)}>
              &#x2715;
            </button>
          </header>

          {children}
        </div>
      </div>
    )
  );
};

export default BaseModal;
