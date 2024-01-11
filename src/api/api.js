import axios from "axios";
// import {toastError, toastSuccess} from '../styled/toastStyle'
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const getAllProducts = async () => {
  let response = [];
  await axios.get(`https://dummyjson.com/products`)
    .then((res) => {
      console.log("resres", res?.data)
      response = res?.data;
      // console.log("response?.auth_token", response?.auth_token);

    })
    .catch((error) => {
      console.error(error);
    });
  return response;
};

export const logIn = async (username, password) => {
  let response = [];
  await axios.post(`https://b3d0-182-186-102-131.ngrok-free.app/admin/login`, {
    username,
    password,
  })
    .then((res) => {
      console.log("resres", res?.data)
      response = res?.data;
      // console.log("response?.auth_token", response?.auth_token);
    })
    .catch((error) => {
      console.error(error);
    });
  return response;
};


export const getAllUser = async () => {
  try {
    const response = await axios.get('https://5869-182-186-102-131.ngrok-free.app/user/get-all-user', {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });

    console.log("res", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};

//deleteuser


export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`https://5869-182-186-102-131.ngrok-free.app/user/delete_user?userId=${userId}`);

    console.log('Delete response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error; 
  }
};


//openweather GEt api
export const getCity = async (cityName) => {
  try {
    const response = await axios.get(`https://pro.openweathermap.org/data/2.5/forecast/climate?q=${cityName}&appid=6ef9efb403f062b0bfc6f91f7c0047c2`);
    console.log("res", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};