const pageModel = require('./page.modal');

const createPage = async (pageBody) => {
  const slug = pageBody.name.toLowerCase().split(' ').join('-');
  pageBody.slug = slug;
  const page = new pageModel(pageBody);
  const pageResponse = await page.save();
  return pageResponse;
};

const listPages = async () => {
  const pages = await pageModel.find({});
  return pages;
};

const deletePage = async (pageId) => {
  const pageResponse = await pageModel.deleteOne({ _id: pageId });
  return pageResponse;
};
const updatePage = async (pageId, customName) => {
  const pages = await pageModel.findOneAndUpdate({ _id: pageId }, customName);
  return pages;
};

const pageDetails = async (pageId) => {
  const pages = await pageModel.findOne({ _id: pageId });
  return pages;
};

const savePageContent = async (pageId, content) => {
  const pageUpdated = await pageModel.findOneAndUpdate({ _id: pageId }, { content });
  return pageUpdated;
};

const savePageView = async (pageId, view) => {
  const viewUpdated = await pageModel.findOneAndUpdate({ _id: pageId }, { view });
  return viewUpdated;
};

const findPageById = async (pageId) => {
  const page = await pageModel.findById(pageId);
  return page;
};

const pageView = async (pageId) => {
  const pages = await pageModel.findOne({ _id: pageId });
  return pages;
};

///////////////////////////////////////////
const clientView = async (pageId) => {
  const pages = await pageModel.findOne({ _id: pageId });
  return pages;
};

/////////////////////////////////////////

module.exports = {
  createPage,
  listPages,
  deletePage,
  updatePage,
  pageDetails,
  savePageContent,
  findPageById,
  pageView,
  savePageView,
  clientView,
};
