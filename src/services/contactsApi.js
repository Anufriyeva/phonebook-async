import axios from "axios";

axios.defaults.baseURL = "https://65323db94d4c2e3f333dd440.mockapi.io";

export const fetchAll = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const addContact = async (name, phone) => {
  const { data } = await axios.post(`/contacts`, { name, phone });
  return data;
};

export const deleteContact = async (contactId) => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};