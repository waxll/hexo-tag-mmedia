const utils = require("utility");

const log = require("hexo-log")({ name: "hexo-tag-mmedia", debug: false });

module.exports = function (hexo: any, args: string[], contents: any) {
  switch (args[0]) {
    case "audio":
      return new Audio0(hexo, args, contents).generate();
    case "video":
      return new Video(hexo, args, contents).generate();
    case "meting":
      return new Meting(hexo, args, contents).generate();
    case "aplayer":
      return new Aplayer(hexo, args, contents).generate();
    default:
      log.warn(`can not resolve ${args[0]}`);
      break;
  }
};