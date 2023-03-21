export const serializeForm = function (form) {
  const returnObject = {};
  const formData = new FormData(form);
  for (let key of formData.keys()) {
    returnObject[key] = formData.get(key);
  }
  return returnObject;
};
