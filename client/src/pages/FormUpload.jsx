import React from "react";
import { useNavigate } from "react-router-dom";

const FormUpload = (props) => {
  const naviage = useNavigate();

  const { kanban, partNo, partName, supplier, address, dock } =
    props.itemsDetails;

  const buttonClickHandle = (e) => {
    if (e.target.value === "Back") {
      if (props.onCancelCheck){
        props.onCancelCheck(props.itemsDetails.itemNo);
      }
      naviage("/");
    } else if (e.target.value === "Submit") {
      if (props.onCancelCheck){
        props.onSubmitCheck(props.itemsDetails.itemNo);
      }
      naviage("/");
    }
  };

  console.log(props.itemsDetails)

  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-1/3">
        {kanban ? (
          <>
            <div className="pt-2 pb-2 border border-gray-300 rounded-md">
              <h1 className="text-xl font-bold">
                [{kanban}] {` . `} {partNo}
              </h1>
            </div>
            <div className="flex flex-col my-2 py-2 border">
              <img 
                // alt={partNo}
                className="mx-auto m-2 w-11/12 h-40 flex justify-center" 
              />
              <input type="file" className="mx-auto" />
            </div>
            <div className="flex flex-col my-2 py-2 border">
              <div className="text-lg">{partName}</div>

              <div className="flex justify-between my-3">
                <div className="mx-auto text-sm">
                  <b>Dock</b>: {dock} |<b>Address</b>: {address} |
                  <b>Supplier</b>: {supplier}
                </div>
              </div>
            </div>
          </>
        ) : null}

        <div className="flex justify-center my-3 py-2">
          <button
            className="mx-3 px-5 py-2 border border-yellow-400 bg-yellow-200 rounded-xl"
            value="Back"
            onClick={(e) => {
              buttonClickHandle(e);
            }}
          >
            Back
          </button>
          {kanban ? (
            <button
              className="mx-3 px-5 py-2 border border-green-400 bg-green-200 rounded-xl"
              value="Submit"
              onClick={(e) => {
                buttonClickHandle(e);
              }}
            >
              Submit
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FormUpload;
