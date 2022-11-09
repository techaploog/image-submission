import { useState } from "react";

import { httpPatchItemStatus,httpPostSubmitItem } from "./request";

const useForm = () => {
  const [itemsDetails, setItemsDetails] = useState([]);

  const loadDetails = async (itemId) => {
      const fetchData = await httpPatchItemStatus(itemId,1);
      setItemsDetails(fetchData);
    };

  const cancelCheck = async (itemId) => {
    return await httpPatchItemStatus(itemId,0);
  }

  const submitCheck = async (itemId,values) => {
    //TODO: update this function
    await httpPatchItemStatus(itemId,2);
    await httpPostSubmitItem(values);
  }


  return {
    loadDetails,
    itemsDetails,
    cancelCheck,
    submitCheck,
  };

};

export default useForm;
