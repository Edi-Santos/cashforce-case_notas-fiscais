const { Order } = require('../../models');

const getOrders = async () => {
  try {
    const orders = await Order.findAll();

    return orders;
  } catch (error) {
    console.log(`Erro no Service || ${error}`);
  }
};

module.exports = {
  getOrders,
};
