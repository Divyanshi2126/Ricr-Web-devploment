import React from "react";

const EditprofileModal = ({onClose}) => {
  return (
    <>
      <div className="fixed inset-0 bg-black flex items-center justify-center z-100">
        <div className="bg-white w-5xl max-h-[85vh] overflow-y-auto ">
          <div>EditprofileModal</div>
          <button onClick={() => onClose()}>X</button>
        </div>
      </div>
    </>
  );
};

export default EditprofileModal;
