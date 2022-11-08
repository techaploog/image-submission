import { useState } from "react";

import { httpPatchItemStatus } from "./request";

const useForm = () => {
  const [itemsDetails, setItemsDetails] = useState([]);

  const loadDetails = async (itemId) => {
      const fetchData = await httpPatchItemStatus(itemId,1);
      setItemsDetails(fetchData);
    };

  const cancelCheck = async (itemId) => {
    return await httpPatchItemStatus(itemId,0);
  }

  const submitCheck = async (itemId) => {
    //TODO: update this function
    return await httpPatchItemStatus(itemId,2);
  }


  return {
    loadDetails,
    itemsDetails,
    cancelCheck,
    submitCheck,
  };

};

export default useForm;
