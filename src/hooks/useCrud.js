import { useState } from "react";
import axios from "axios";

export const useCrud = (path) => {
  const [response, setResponse] = useState();

  const BASE_URL = "https://users-crud.academlo.tech";

  //GET
  const getApi = () => {
    const url = `${BASE_URL}${path}`;

    axios
      .get(url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => console.log(err));
  };
  //POST

  const postApi = (data) => {
    const url = `${BASE_URL}${path}`;
    axios
      .post(url, data)
      .then((res) => {
        // console.log(res.data);
        setResponse([...response, res.data]);
      })
      .catch((err) => console.log(err));
  };

  //DELETE

  const deleteApi = (id) => {
    const url = `${BASE_URL}${path}${id}/`;

    axios
      .delete(url)
      .then((res) => {
        setResponse(response.filter((elem) => elem.id !== id));
      })
      .catch((err) => console.log(err));
  };

  //UPDATE

  const updateApi = (id, data) => {
    const url = `${BASE_URL}${path}${id}/`;

    axios
      .patch(url, data)
      .then((res) => {
        setResponse(response.map((e) => (e.id === id ? res.data : e)));
      })
      .catch((err) => console.log(err));
  };

  return [response, getApi, postApi, deleteApi, updateApi];
};
