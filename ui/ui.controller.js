const { listPages } = require('../page/page.services');
const { listUsers } = require('../user/user.services');

const home = async (req, res) => {
  const pages = await listPages();
  const users = await listUsers();

  res.json([
    { title: 'Pages', pages },
    { title: 'Users', users },
  ]);
};

const editor = async (req, res) => {
  const pages = await listPages();
  const selectedPage = pages.find((page) => page.id === req.params.pageId);
  res.json({ title: 'VWM Page Builder Editor Page', selectedPage });
};

module.exports = {
  home,
  editor,
};
