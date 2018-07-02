import {
  postToAPI,
  processError,
  processObjToCamelCase,
} from './utils';

async function subscribeByEmail(email) {
  try {
    const res = await postToAPI('', { email });

    return processObjToCamelCase(res);
  } catch (err) {
    return processError(err);
  }
}

export { subscribeByEmail };
