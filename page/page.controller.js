const {
  createPage,
  deletePage,
  listPages,
  pageDetails,
  savePageContent,
  updatePage,
  savePageView,
  pageView,
} = require('./page.services');

const create = async (req, res) => {
  const pageBody = req.body;
  const page = await createPage(pageBody);
  res.json(page);
};

const list = async (req, res) => {
  const pages = await listPages();
  res.json(pages);
};

const details = async (req, res) => {
  const { pageId } = req.params;
  const details = await pageDetails(pageId);
  res.json(details);
};

const deletePageRecord = async (req, res) => {
  const { pageId } = req.params;
  const data = await deletePage(pageId);
  res.json(data);
};

const update = async (req, res) => {
  const { pageId } = req.params;
  const pageBody = req.body;
  const page = await updatePage(pageId, pageBody);
  res.json(page);
};

const changeContent = async (req, res) => {
  const { pageId } = req.params;
  const pageContent = await savePageContent(pageId, req.body);
  res.json(pageContent);
};

const changeView = async (req, res) => {
  const { pageId } = req.params;
  const viewContent = await savePageView(pageId, req.body);
  res.json(viewContent);
};

const loadContent = async (req, res) => {
  const { pageId } = req.params;
  res.header('Content-Type', 'application/json');
  const pageData = await pageDetails(pageId);
  res.json(pageData.content);
};

const loadView = async (req, res) => {
  const { pageId } = req.params;
  res.header('Content-Type', 'application/json');
  const pageData = await pageView(pageId);
  res.json(pageData.view);
};

//////////////////////////////////////////////////

const usertView = async (req, res) => {
  const pageId = req.body;
  res.header('Content-Type', 'application/json');
  const pageData = await clientView(pageId);
  res.json(pageData);
};

//////////////////////////////////////////////////
module.exports = {
  create,
  list,
  details,
  deletePageRecord,
  update,
  changeContent,
  loadContent,
  loadView,
  changeView,
  usertView,
};
