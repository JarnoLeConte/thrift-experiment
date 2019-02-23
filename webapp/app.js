const thrift = require('thrift');
const API = require('./gen-nodejs/API');

const {
  NotExist,
} = require('./gen-nodejs/api_types');

const connection = thrift.createConnection('localhost', 9090, {
  transport: thrift.TBufferedTransport,
  protocol: thrift.TBinaryProtocol,
});

const api = thrift.createClient(API, connection);


async function demo() {
  console.log(await api.createConsumer({ name: 'Jan' }));
  console.log(await api.createConsumer({ name: 'Klaas' }));
  console.log(await api.getConsumers());

  console.log(await api.getConsumer(2));
  console.log(await api.updateConsumer(2, { name: 'Piet' }));
  console.log(await api.getConsumer(2));

  console.log(await api.removeConsumer(2));
  console.log(await api.getConsumers());
  console.log(await api.getConsumer(2));

  console.log('success');
}

demo()
  .catch(err => {
    if (err instanceof NotExist) {
      console.log('Indeed person 2 doesn\'t exist'); return;
    }
    console.error(err);
  })
  .then(() => connection.end());