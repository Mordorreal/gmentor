import camelCase from 'lodash/camelCase';
import mapKeys from 'lodash/mapKeys';
import snakeCase from 'lodash/snakeCase';
import isEmpty from 'lodash/isEmpty';
import 'whatwg-fetch';

export const processObjToCamelCase = (obj) => mapKeys(obj, (v, k) => camelCase(k));
export const processObjToSnakeCase = (obj) => mapKeys(obj, (v, k) => snakeCase(k));

export const processError = (err) => {
  const message = isJsonString(err.message) ? JSON.parse(err.message) : err.message;
  return errorObject(message);
};

const errorObject = (message) => {
  const obj = { type: 'error' };
  obj.message = typeof message === 'object' ? processObjToCamelCase(message) : message;

  return obj;
};

const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

const getResponseBody = (response) => {
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  }
  return response.text();
};

const handleResponse = (response) => {
  const responseBody = getResponseBody(response);
  return responseBody.then((res) => {
    if (response.status === 200) {
      return res;
    }
    if (response.status === 403) {
      throw new Error("Authorization error.");
    }
    if (response.status === 404) {
      throw new Error("Not found.");
    }
    if (response.status >= 300) {
      throw new Error(JSON.stringify(res));
    }
    return res;
  });
};

function serializePlain(obj) {
  const paramStrings = Object.keys(obj)
    .reduce(
      (a, k) => {
        const v = encodeURIComponent(obj[k]);
        a.push(`${k}=${v}`);
        return a;
      },
      []
    );

  const paramsString = paramStrings.join('&');

  return paramsString ? `?${paramsString}` : '';
}

const headers = {
  'Content-Type': 'application/json',
};

export async function getFromAPI(path,  query = {}) {
  const queryStr = serializePlain(query);

  const response = await fetch(
    `${path}${queryStr || ""}`,
    {
      method: 'GET',
      credentials: "same-origin",
      headers
    }
  );

  return handleResponse(response);
}

export async function postToAPI(path, data = {}) {
  const response = await fetch(`${path}`, {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: "same-origin",
    headers
  });

  return handleResponse(response);
}

export async function putToAPI(path, data = {}) {
  const response = await fetch(`${path}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers
  });

  return handleResponse(response);
}

export async function patchToAPI(path, data = {}) {
  const response = await fetch(`${path}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    credentials: "same-origin",
    headers
  });

  return handleResponse(response);
}

export async function deleteToAPI(path, data = {}) {
  const options = {
    method: 'DELETE',
    credentials: "same-origin",
    headers
  };

  options.body = isEmpty(data) ?  false : JSON.stringify(data);

  if (options.body === false) {
    Reflect.deleteProperty(options, 'body');
  }

  const response = await fetch(`${path}`, options);

  return handleResponse(response);
}
