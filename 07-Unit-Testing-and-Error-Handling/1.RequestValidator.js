function requestValidator(obj) {
  let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
  let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

  if (!validMethod.includes(obj.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  }

  if (typeof obj.uri !== 'string' || (obj.uri !== '*' && !/^[A-Za-z0-9.]+$/.test(obj.uri))) {
    throw new Error(`Invalid request header: Invalid URI`);
  }

  if (!validVersion.includes(obj.version)) {
    throw new Error(`Invalid request header: Invalid Version`);
  }

  if (typeof obj.message !== 'string' || /[<>\\&'"]/.test(obj.message)) {
    throw new Error(`Invalid request header: Invalid Message`);
  }

  return obj;
}

console.log(requestValidator({
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}
));