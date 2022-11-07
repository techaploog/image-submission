import { useCallback, useState, useEffect } from "react";

import { httpGetAllItems } from "./request";

const useItems = () => {
  const [itemsList, setItemsList] = useState([]);

  const loadItems = useCallback(async () => {
    const fetchData = await httpGetAllItems();
    setItemsList(fetchData);
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);
  
  return itemsList;
};

export default useItems;
