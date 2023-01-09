import ApiService from "./ApiService";

const { postAsync, getLastIdAsync, getAsync } = ApiService;
const endpoint = "/flowers";

const getAllAsync = async () => {
  const res = await getAsync(endpoint);
  if (res.status > 199 && res.status < 300) {
    return {
      isSuccess: true,
      data: res.data,
    };
  }

  return {
    isSuccess: false,
    message: res.status,
    data: [],
  };
};

const getByIdAsync = async (id) => {
  let res;
  try {
    res = await getAsync(`${endpoint}/${id}`);
  } catch (error) {
    res = error.response;
  }
  if (res.status > 199 && res.status < 300) {
    return {
      isSuccess: true,
      data: res.data,
    };
  }

  return {
    isSuccess: false,
    message: res.status,
    data: {},
  };
};

const addAsync = async (flower) => {
  console.log(flower);
  let lastId = await getLastIdAsync(endpoint);

  flower.id = lastId + 1;
  flower.createdDate = new Date();

  const res = await postAsync(endpoint, flower);
  if (res.status > 199 && res.status < 300) {
    return res.data;
  }

  return {}; //TODO: Dönüş verisini düzelt
};

const ProductService = {
  addAsync,
  getAllAsync,
  getByIdAsync
};

export default ProductService;
