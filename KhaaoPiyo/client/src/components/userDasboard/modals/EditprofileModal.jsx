import React from "react";

const EditprofileModal = (onClose) => {
  return (
    <>
      <div className="fixed inset-0 bg-black flex items-center justify-between ">
        <div className="bg-white w-100 h-100 ">
          <div>EditprofileModal</div>
          <button onClick={() => onClose()}>X</button>
        </div>
      </div>
    </>
  );
};

export default EditprofileModal;
