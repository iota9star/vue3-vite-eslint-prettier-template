const modules = import.meta.globEager(`./modules/*.js`);

const apiModules = {};

const checkExistModule = (modulePath, moduleName) => {
  if (apiModules[moduleName]) {
    const errorMsg = `模块<${moduleName}>已注册，请检查模块文件<${modulePath}>是否声明有误`;
    throw Error(errorMsg);
  }
};

for (const modulePath in modules) {
  if (modules.hasOwnProperty(modulePath)) {
    const module = modules[modulePath].default;
    let moduleName = module.moduleName;
    if (!moduleName) {
      const paths = modulePath.split(`/`);
      const fileName = paths[paths.length - 1];
      moduleName = fileName.split(`.`)[0];
    }
    checkExistModule(modulePath, moduleName);
    apiModules[moduleName] = module;
  }
}

console.info(`注册api模块<${Object.keys(apiModules).length}个>`);

export default apiModules;
