// src/cacauTrybe.js

const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id)
}

const getChocolateByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
}

const getChocolateByName = async (name) => {
  const cacauTrybe = await readCacauTrybeFile();
  const filteredByName = cacauTrybe.chocolates.filter((choco) => choco.name.includes(name))
  return filteredByName;
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolateByBrand,
  getChocolateByName
};