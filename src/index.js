module.exports = function check(str, bracketsConfig) {
  const bracketsList = bracketsConfig.map(item => item.join(''));
  return cutRecursive(str, bracketsList)
}

const cutRecursive = (strBase, bracketsList) => {
  let strCopy = strBase;

  for (let item of bracketsList) {
    strCopy = strCopy.replace(item, '');
  }

  if (strCopy.length === 0) {
    return true;
  } else if (strBase === strCopy) {
    return false;
  } else {
    return cutRecursive(strCopy, bracketsList);
  }
}
