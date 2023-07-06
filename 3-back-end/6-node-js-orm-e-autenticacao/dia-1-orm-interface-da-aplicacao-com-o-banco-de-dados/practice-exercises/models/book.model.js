const bookModel = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  return book;
};

module.exports = bookModel;