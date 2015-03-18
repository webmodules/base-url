
module.exports = function baseURL (doc, href) {
  if ('string' === typeof doc) {
    href = doc;
    doc = null;
  }
  if (null == doc) doc = document;
  if (null == href) href = '.';

  var a = doc.createElement('a');
  a.href = href;
  return a.href;
};
