const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7780968411:AAHp7Z7w78u8wR7ewJGdDnvZt8Ow7SySLYs',
  id: isNaN(parsedId) ? 8132711919 : parsedId // replace 12345.. with your telegram chat id
};
