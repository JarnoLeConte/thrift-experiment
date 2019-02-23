const thrift = require("thrift");
const API = require("./gen-nodejs/API");

const {
  NotExist,
} = require("./gen-nodejs/api_types");


const consumers = [];

const server = thrift.createServer(API, {
  createConsumer(consumer) {
    consumer.id = Math.max(0, ...consumers.map(c => c.id)) + 1;
    consumers.push(consumer);
    return consumer;
  },
  updateConsumer(id, changes) {
    const consumer = consumers.find(c => c.id === id) || {};
    delete changes.id; // can't update id
    return Object.assign(consumer, changes);
  },
  removeConsumer(id) {
    const index = consumers.findIndex(c => c.id === id);
    if (index !== -1) consumers.splice(index, 1);
  },
  getConsumer(id) {
    const consumer = consumers.find(c => c.id === id);
    if (!consumer) {
      throw new NotExist({ id, message: 'Consumer does not exist' });
    }
    return consumer;
  },
  getConsumers() {
    return consumers;
  },
});

server.listen(9090);
