const { listAssets, uploadAsset } = require('./assets.services');

const list = async (req, res) => {
  const assets = await listAssets();
  res.json(assets);
};

const upload = async (req, res) => {
  const assetBody = req.body;
  const assets = await uploadAsset(assetBody);
  res.json(assets);
};

module.exports = {
  list,
  upload,
};
