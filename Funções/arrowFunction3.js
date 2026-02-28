let compareComThis = function (param) {
  console.log(this === param);
};

compareComThis(global);

const obj = {};
compareComThis = compareComThis.bind(obj);
compareComThis(global);
compareComThis(obj);

let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);
