const Orders = require('../services/Orders');

const getOrders = async (_req, res) => {
  try {
    const orders = await Orders.getOrders();

    return res.status(200).json({ orders });
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

module.exports = {
  getOrders,
};
