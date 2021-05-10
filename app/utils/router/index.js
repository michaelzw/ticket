const path = require("path");
const fs = require("fs");

module.exports = class RouteAuto {
  constructor(app, filePath) {
    this.app = app;
    this.filePath = filePath;
  }

  getFiles(dir, app) {
    const files = fs.readdirSync(dir);
    files.forEach((value) => {
      const filePath = dir + "/" + value;
      if (fs.lstatSync(filePath).isDirectory()) {
        this.getFiles(filePath, app);
      } else {
        let controller = path.relative(this.filePath, filePath);
        controller = controller.replace(".js", "");
        controller = controller.replace("/index/", "");
        if (controller.substring(controller.length - 5) === "index") {
          controller = controller.substring(0, controller.length - 5);
          if (controller.substring(controller.length - 1) === "/") {
            controller = controller.substring(0, controller.length - 1);
          }
        }
        if (controller) {
          controller = "/" + controller;
        }
        app.use(require(filePath));
      }
    });
  }

  init() {
    if (!path.isAbsolute(this.filePath)) {
      this.filePath = path.join(process.cwd(), this.filePath);
    }
    const dir = path.resolve(__dirname, this.filePath);
    this.getFiles(dir, this.app);
  }
};
