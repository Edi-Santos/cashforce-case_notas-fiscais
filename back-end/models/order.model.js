// eslint-disable-next-line max-lines-per-function
const datasAndTypes = (DataTypes) => ({
  orderNfId: DataTypes.STRING,
  orderNumber: DataTypes.STRING,
  orderPath: DataTypes.STRING,
  orderFileName: DataTypes.STRING,
  orderOriginalName: DataTypes.STRING,
  emissionDate: DataTypes.STRING,
  pdfFile: DataTypes.STRING,
  emitedTo: DataTypes.STRING,
  nNf: DataTypes.STRING,
  CTE: DataTypes.STRING,
  value: DataTypes.STRING,
  createdAt: DataTypes.DATETIME,
  updatedAt: DataTypes.DATETIME,
  cnpjId: DataTypes.NUMBER,
  buyerId: DataTypes.NUMBER,
  providerId: DataTypes.NUMBER,
  orderStatusBuyer: DataTypes.STRING,
  orderStatusProvider: DataTypes.STRING,
  deliveryReceipt: DataTypes.STRING,
  cargoPackingList: DataTypes.STRING,
  deliveryCtrc: DataTypes.STRING,
});

const orderModel = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', datasAndTypes(DataTypes));

  return Order;
};

module.exports = orderModel;
