const createApiModule = (entry) => {
  if (!entry.moduleName) {
    throw Error(`请填写module名称`);
  }
  return entry;
};
export { createApiModule };
