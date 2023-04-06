import React from "react";

interface CloseButtonProps {
  handleClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = props => {
  const { handleClose } = props;
  return (
    <button
      className="icon-styles"
      onClick={handleClose}
      style={{ backgroundColor: "red" }}
    >
      <i className="fa fa-times" aria-hidden="true"></i>
    </button>
  );
};

export default CloseButton;
