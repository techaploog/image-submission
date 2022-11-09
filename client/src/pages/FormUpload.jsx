import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const FormUpload = (props) => {
  const naviage = useNavigate();
  const [inputError,setInputError] = useState(false);
  const [fileError,setFileError] = useState(false);

  const {itemNo, kanban, partNo, partName, supplier, address, dock } =
    props.itemsDetails;

  const buttonClickHandle = (e) => {
    if (e.target.value === "Back") {
      if (props.onCancelCheck){
        props.onCancelCheck(itemNo);
      }
      naviage("/");
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());

    setInputError(false);
    setFileError(false);

    try{
      const result = Number(values.countResult)
      if (isNaN(result)){
        setInputError(true);
      }else if (values.countImg.name.length === 0)
        setFileError(true);
      else{
        if (props.onSubmitCheck){
          props.onSubmitCheck(props.itemsDetails.itemNo,data);
        }
        // TODO: navigate back to home
        // naviage('/');
      }

    }catch (err){
      console.log(err);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-1/3">
        <form onSubmit={formSubmitHandler} >
          {kanban ? (
            <>
              <div className="pt-2 pb-2 border border-gray-300 bg-gray-200 rounded-md">
                <input name="countItemId" type="text" value={itemNo} hidden readOnly/>
                <input name="countKanban" type="text" value={kanban} hidden readOnly/>
                <h1 className="text-xl font-bold">
                  [ {kanban} ] {` . `} {partNo}
                </h1>
              </div>
              <div className={`flex flex-col my-2 py-2 border ${ fileError ? "border-red-400" : "border-yellow-400"}`}>
                <div>
                  <img 
                    //TODO: update this to show picture
                    // alt={partNo}
                    className="mx-auto m-2 w-11/12 h-40 flex justify-center" 
                  />
                </div>
                <div>
                  <input 
                    name="countImg"
                    type="file" 
                    className="mx-auto text-xs" 
                  />
                </div>
                { fileError ? 
                  <label className="text-xs text-red-600 mt-1">
                    Invalid file or no file selected !!
                  </label>
                : null
                }
              </div>
              <div className="flex flex-col my-2 py-2 bg-gray-200 border">
                <div className="text-lg italic overflow-hidden">{partName}</div>

                <div className="flex justify-between my-2">
                  <div className="mx-auto text-sm">
                    <b>Dock</b>: {dock} |<b>Address</b>: {address} |
                    <b>Supplier</b>: {supplier}
                  </div>
                </div>
              </div>

              <div className="flex flex-col my-2 py-2 border ">
                <div className="flex flex-row justify-center">
                  <div className={`mx-1 p-1 border rounded-md ${ inputError ? "border-red-400" : "border-yellow-400"}`}>
                    <input 
                      name="countResult"
                      type='text' 
                      placeholder='counting result' 
                      className="text-center"
                    />
                    
                  </div>
                  <div>
                    <select 
                      name="countType"
                      className="mx-1 p-1 px-3 border border-yellow-400 rounded-md text-center"
                    >
                      <option value='0'>box</option>
                      <option value='1'>pcs</option>
                    </select>
                  </div>
                </div>
                <div>
                { inputError ? 
                  <label className="text-xs text-red-600">
                    Input "Counting Result" must be a NUMBER!
                  </label>
                : null
                }
                </div>
              </div>
            </>
          ) : null}

          <div className="flex justify-center">
            <button
              className="mx-3 px-5 py-1 border border-gray-400 bg-gray-200 rounded-xl"
              value="Back"
              onClick={(e) => {
                buttonClickHandle(e);
              }}
            >
              Back
            </button>
            {kanban ? (
              <button
                className="mx-3 px-5 py-1 border border-green-400 bg-green-200 rounded-xl"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUpload;
