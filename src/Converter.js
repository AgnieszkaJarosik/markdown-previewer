const marked = require('marked');

const options = {
  baseUrl: null,
  breaks: true,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: true,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  xhtml: false
 };


const Converter = {
    start (text) {
    return marked(text, options);
  }
}

export default Converter;