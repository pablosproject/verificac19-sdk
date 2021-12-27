const { Service } = require('../src');
const cache = require('../src/cache');
const crlManager = require('./mycrlmanager');

const main = async () => {
  await Service.setUp(crlManager);
  await Service.cleanCRL();
  console.log('Updating CRL...');
  await Service.updateCRL();
  console.log(await cache.isUVCIRevoked('LJQUFoUUokc5sdVdj/zGq47cz4Up/dihCPOsPsOBXZ8='));
  await Service.tearDown();
};

main();
