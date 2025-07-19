"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//                         Babel e "can i use"

// Compatibilidade a navegadores antigos - Não tem suporte ao Ecmascript (versao mais nova do JS)

// Can I use -> é um site que podemos verificar a compatibilidade de determinado recurso do JS com o navegador que quisermos

// Babel - é um compilador JS, ele vai converter o codigo digitado para uma sintaxe antiga suportada por mais navegadores antigos

// instalando

//      passo 1: iniciar o gerenciador de pacote do node: no terminal digita npm init -y 
//      passo 2: instalar o babel: no terminal digita npm install --save-dev @babel/cli @babel/preset-env @babel/core

// Utilizando

var nome = 'Thomaz';
var obj = {
  nome: nome
};
var novoObj = _objectSpread({}, nome);
console.log(novoObj);

// Convertendo com babel - no terminal coloca npx babel main.js -o bundle.js --presets=@babel/env
// Com isso foi criado um arquivo com o codigo convertido para JS antigo

// Deixando a compilação automatica: em package.json, na chave scripts, adicionamos uma nova chave com isso: "babel": "babel ./main.js -o ./bundle.js --presets=@babel/env -w"
// Pronto, ele vai converter o codigo automaticamente no arquivo bundle
var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, sobrenome) {
  _classCallCheck(this, Pessoa);
  this.nome = nome;
  this.sobrenome = sobrenome;
});
