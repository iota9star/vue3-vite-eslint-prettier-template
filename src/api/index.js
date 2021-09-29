const modules = import.meta.globEager(`./modules/*.js`);

const createApiModules = () => {
  const apiModules = {};
  for (const modulePath in modules) {
    if (modules.hasOwnProperty(modulePath)) {
      const module = modules[modulePath].default;
      const paths = modulePath.split(`/`);
      const fileName = paths[paths.length - 1];
      const moduleName = fileName.split(`.`)[0];
      apiModules[moduleName] = module;
    }
  }
  console.debug(`注册api模块<${Object.keys(apiModules).length}个>`);
  return apiModules;
};

export default createApiModules();
