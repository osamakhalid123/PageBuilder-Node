const assetModal = require('./assets.modal');

const listAssets = async () => {
  const assets = await assetModal.find({});
  return assets;
};

const uploadAsset = async (assetBody) => {
  const assets = await assetModal(assetBody);
  const assetResponse = await assets.save();
  return assetResponse;
};

module.exports = {
  listAssets,
  uploadAsset,
};
