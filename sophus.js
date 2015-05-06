/*
Sophus
un langage de programmation inspiré par COBOL
auteurs:
	Alain Busser
	Florian Tobé
©2013
ce logiciel est libre sous license MIT
 */
var Variable, aLaPuissance, aMoinsQue, arrondir, auCarré, auCube, augmenter, carré, centupler, cinq, cinquième, cinquièmes, cos, cosinus, cube, dans, de, demi, demis, deux, diminuer, diviser, dix, dixième, dixièmes, doubler, décimales, décrémenter, décupler, entrer, extraireLaRacineDe, huit, huitième, huitièmes, incrémenter, inverser, mettre, mettreDans, montrer, multiplier, neuf, neuvième, neuvièmes, octupler, par, pourcent, pourcents, près, quadrupler, quart, quarts, quatre, quintupler, racine, sept, septième, septièmes, sextupler, si, sin, sinon, sinus, six, sixième, sixièmes, tan, tangente, tiers, tripler, trois, tronquer, un, x, à, élever, éleverAuCarré, éleverAuCube, π, _ref, _ref1, _ref2;

Boolean.prototype.toLocaleString = function() {
  if (this.valueOf()) {
    return " c'est vrai ";
  } else {
    return " c'est faux ";
  }
};

Number.prototype.foisFaire = function(fn) {
  var i, _i, _results;
  _results = [];
  for (i = _i = 0; 0 <= this ? _i < this : _i > this; i = 0 <= this ? ++_i : --_i) {
    _results.push(fn());
  }
  return _results;
};

Number.prototype.tantQuePlusGrandQue = function(variable, fn) {
  var _results;
  _results = [];
  while (variable.valeur < this) {
    _results.push(fn());
  }
  return _results;
};

Number.prototype.tantQuePlusPetitQue = function(variable, fn) {
  var _results;
  _results = [];
  while (variable.valeur > this) {
    _results.push(fn());
  }
  return _results;
};

Array.prototype.empiler = function(machin) {
  return this.push(machin);
};

Array.prototype.toLocaleString = "[" + ((function() {
  var _i, _len, _results;
  _results = [];
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    x = this[_i];
    _results.push(x.toLocaleString());
  }
  return _results;
}).call(this)) + "]";

décimales = "décimales";

près = "près";

à = "à";

de = "de";

par = "par";

dans = "dans";

sinon = "sinon";

pourcents = "pourcents";

pourcent = "pourcents";

auCarré = "au carré";

auCube = "au cube";

aLaPuissance = "à la puissance";

_ref = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], un = _ref[0], deux = _ref[1], trois = _ref[2], quatre = _ref[3], cinq = _ref[4], six = _ref[5], sept = _ref[6], huit = _ref[7], neuf = _ref[8], dix = _ref[9];

_ref1 = ["demis", "tiers", "quarts", "cinquièmes", "sixièmes", "septièmes", "huitièmes", "neuvièmes", "dixièmes"], demis = _ref1[0], tiers = _ref1[1], quarts = _ref1[2], cinquièmes = _ref1[3], sixièmes = _ref1[4], septièmes = _ref1[5], huitièmes = _ref1[6], neuvièmes = _ref1[7], dixièmes = _ref1[8];

_ref2 = ["demis", "tiers", "quarts", "cinquièmes", "sixièmes", "septièmes", "huitièmes", "neuvièmes", "dixièmes"], demi = _ref2[0], tiers = _ref2[1], quart = _ref2[2], cinquième = _ref2[3], sixième = _ref2[4], septième = _ref2[5], huitième = _ref2[6], neuvième = _ref2[7], dixième = _ref2[8];

π = Math.PI;

montrer = (function(_this) {
  return function(o) {
    if (o.valeur != null) {
      return alert(o.valeur.toLocaleString());
    } else {
      if (((function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = o.length; _i < _len; _i++) {
          x = o[_i];
          _results.push(x);
        }
        return _results;
      })()).length > 1) {
        return alert("[" + ((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = o.length; _i < _len; _i++) {
            x = o[_i];
            _results.push(" " + x.toLocaleString() + " ");
          }
          return _results;
        })()) + "]");
      } else {
        return alert(o.toLocaleString());
      }
    }
  };
})(this);

entrer = (function(_this) {
  return function(o) {
    return o.valeur = prompt("Quelle valeur donner à cette variable ?");
  };
})(this);

Variable = (function() {
  function Variable(valeur) {
    this.valeur = valeur != null ? valeur : 0;
  }

  Variable.prototype.toString = function() {
    return this.valeur.toLocaleString();
  };

  Variable.prototype.estPositif = function() {
    return this.valeur > 0;
  };

  Variable.prototype.estNégatif = function() {
    return this.valeur < 0;
  };

  Variable.prototype.estNul = function() {
    return this.valeur === 0;
  };

  Variable.prototype.estPair = function() {
    return this.valeur % 2 === 0;
  };

  Variable.prototype.estImpair = function() {
    return this.valeur % 2 === 1;
  };

  return Variable;

})();

mettreDans = (function(_this) {
  return function(o, bidule) {
    var _ref3;
    o.valeur = (_ref3 = bidule.valeur) != null ? _ref3 : bidule;
    return null;
  };
})(this);

mettre = (function(_this) {
  return function(bidule, dans, o) {
    var _ref3;
    if (dans == null) {
      dans = "dans";
    }
    o.valeur = (_ref3 = bidule.valeur) != null ? _ref3 : bidule;
    return null;
  };
})(this);

carré = function(nombre) {
  return nombre * nombre;
};

cube = function(nombre) {
  return carré(nombre) * nombre;
};

racine = function(nombre) {
  return Math.sqrt(nombre);
};

sinus = function(nombre) {
  return Math.sin(nombre * π / 180);
};

cosinus = function(nombre) {
  return Math.cos(nombre * π / 180);
};

tangente = function(nombre) {
  return sinus(nombre) / cosinus(nombre);
};

sin = function(x) {
  return Math.sin(x);
};

cos = function(x) {
  return Math.cos(x);
};

tan = function(x) {
  return Math.tan(x);
};

éleverAuCarré = (function(_this) {
  return function(o) {
    return o.valeur *= o.valeur;
  };
})(this);

éleverAuCube = (function(_this) {
  return function(o) {
    return o.valeur *= o.valeur * o.valeur;
  };
})(this);

inverser = (function(_this) {
  return function(o) {
    return o.valeur = 1 / o.valeur;
  };
})(this);

extraireLaRacineDe = (function(_this) {
  return function(o) {
    return o.valeur = Math.sqrt(o.valeur);
  };
})(this);

élever = (function(_this) {
  return function(o, a, exposant) {
    var _ref3;
    if (exposant == null) {
      exposant = 2;
    }
    switch (a) {
      case "à la puissance":
        return o.valeur = Math.pow(o.valeur, (_ref3 = exposant.valeur) != null ? _ref3 : exposant);
      case "au carré":
        return o.valeur *= o.valeur;
      case "au cube":
        return o.valeur *= o.valeur * o.valeur;
      default:
        return alert("Je veux bien élever cette variable mais à quelle puissance ?");
    }
  };
})(this);

arrondir = (function(_this) {
  return function(o, a, epsilon, ordre) {
    if (a == null) {
      a = "";
    }
    if (epsilon == null) {
      epsilon = 1;
    }
    if (ordre == null) {
      ordre = "décimales";
    }
    if (a === "") {
      o.valeur = Math.round(o.valeur);
    }
    if (a === "à") {
      if (ordre === "décimales") {
        o.valeur = Math.round(o.valeur * Math.pow(10, epsilon)) / Math.pow(10, epsilon);
      }
      if (ordre === "près") {
        return o.valeur = Math.round(o.valeur / epsilon) * epsilon;
      }
    }
  };
})(this);

tronquer = (function(_this) {
  return function(o, a, epsilon, ordre) {
    if (a == null) {
      a = "";
    }
    if (epsilon == null) {
      epsilon = 1;
    }
    if (ordre == null) {
      ordre = "décimales";
    }
    if (a === "") {
      o.valeur = Math.floor(o.valeur);
    }
    if (a === "à") {
      if (ordre === "décimales") {
        o.valeur = Math.floor(o.valeur * Math.pow(10, epsilon)) / Math.pow(10, epsilon);
      }
      if (ordre === "près") {
        return o.valeur = Math.floor(o.valeur / epsilon) * epsilon;
      }
    }
  };
})(this);

doubler = (function(_this) {
  return function(o) {
    return o.valeur *= 2;
  };
})(this);

tripler = (function(_this) {
  return function(o) {
    return o.valeur *= 3;
  };
})(this);

quadrupler = (function(_this) {
  return function(o) {
    return o.valeur *= 4;
  };
})(this);

quintupler = (function(_this) {
  return function(o) {
    return o.valeur *= 5;
  };
})(this);

sextupler = (function(_this) {
  return function(o) {
    return o.valeur *= 6;
  };
})(this);

octupler = (function(_this) {
  return function(o) {
    return o.valeur *= 8;
  };
})(this);

décupler = (function(_this) {
  return function(o) {
    return o.valeur *= 10;
  };
})(this);

centupler = (function(_this) {
  return function(o) {
    return o.valeur *= 100;
  };
})(this);

incrémenter = (function(_this) {
  return function(o) {
    o.valeur += 1;
    return null;
  };
})(this);

décrémenter = (function(_this) {
  return function(o) {
    o.valeur -= 1;
    return null;
  };
})(this);

augmenter = (function(_this) {
  return function(o, de, chouia, mode) {
    var _ref10, _ref11, _ref12, _ref13, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
    if (mode == null) {
      mode = "";
    }
    if (de === "de") {
      switch (mode) {
        case "":
          o.valeur += (_ref3 = chouia.valeur) != null ? _ref3 : chouia;
          break;
        case "demis":
          o.valeur *= 1 + ((_ref4 = chouia.valeur) != null ? _ref4 : chouia) / 2;
          break;
        case "tiers":
          o.valeur *= 1 + ((_ref5 = chouia.valeur) != null ? _ref5 : chouia) / 3;
          break;
        case "quarts":
          o.valeur *= 1 + ((_ref6 = chouia.valeur) != null ? _ref6 : chouia) / 4;
          break;
        case "cinquièmes":
          o.valeur *= 1 + ((_ref7 = chouia.valeur) != null ? _ref7 : chouia) / 5;
          break;
        case "sixièmes":
          o.valeur *= 1 + ((_ref8 = chouia.valeur) != null ? _ref8 : chouia) / 6;
          break;
        case "septièmes":
          o.valeur *= 1 + ((_ref9 = chouia.valeur) != null ? _ref9 : chouia) / 7;
          break;
        case "huitièmes":
          o.valeur *= 1 + ((_ref10 = chouia.valeur) != null ? _ref10 : chouia) / 8;
          break;
        case "neuvièmes":
          o.valeur *= 1 + ((_ref11 = chouia.valeur) != null ? _ref11 : chouia) / 9;
          break;
        case "dixièmes":
          o.valeur *= 1 + ((_ref12 = chouia.valeur) != null ? _ref12 : chouia) / 10;
          break;
        case "pourcents":
          o.valeur *= 1 + ((_ref13 = chouia.valeur) != null ? _ref13 : chouia) / 100;
      }
    } else {
      alert("Je veux bien augmenter cette variable mais de combien ?");
    }
    return null;
  };
})(this);

diminuer = (function(_this) {
  return function(o, de, chouia, mode) {
    var _ref10, _ref11, _ref12, _ref13, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
    if (mode == null) {
      mode = "";
    }
    if (de === "de") {
      switch (mode) {
        case "":
          o.valeur -= (_ref3 = chouia.valeur) != null ? _ref3 : chouia;
          break;
        case "demis":
          o.valeur *= 1 - ((_ref4 = chouia.valeur) != null ? _ref4 : chouia) / 2;
          break;
        case "tiers":
          o.valeur *= 1 - ((_ref5 = chouia.valeur) != null ? _ref5 : chouia) / 3;
          break;
        case "quarts":
          o.valeur *= 1 - ((_ref6 = chouia.valeur) != null ? _ref6 : chouia) / 4;
          break;
        case "cinquièmes":
          o.valeur *= 1 - ((_ref7 = chouia.valeur) != null ? _ref7 : chouia) / 5;
          break;
        case "sixièmes":
          o.valeur *= 1 - ((_ref8 = chouia.valeur) != null ? _ref8 : chouia) / 6;
          break;
        case "septièmes":
          o.valeur *= 1 - ((_ref9 = chouia.valeur) != null ? _ref9 : chouia) / 7;
          break;
        case "huitièmes":
          o.valeur *= 1 - ((_ref10 = chouia.valeur) != null ? _ref10 : chouia) / 8;
          break;
        case "neuvièmes":
          o.valeur *= 1 - ((_ref11 = chouia.valeur) != null ? _ref11 : chouia) / 9;
          break;
        case "dixièmes":
          o.valeur *= 1 - ((_ref12 = chouia.valeur) != null ? _ref12 : chouia) / 10;
          break;
        case "pourcents":
          o.valeur *= 1 - ((_ref13 = chouia.valeur) != null ? _ref13 : chouia) / 100;
      }
    } else {
      alert("Je veux bien diminuer cette variable mais de combien ?");
    }
    return null;
  };
})(this);

multiplier = (function(_this) {
  return function(o, par, facteur) {
    var _ref3;
    if (par == null) {
      par = "par";
    }
    if (par === "par") {
      return o.valeur *= (_ref3 = facteur.valeur) != null ? _ref3 : facteur;
    } else {
      return alert("Je veux bien multiplier cette variable mais par quoi ?");
    }
  };
})(this);

diviser = (function(_this) {
  return function(o, par, diviseur) {
    var _ref3;
    if (par == null) {
      par = "par";
    }
    if (par === "par") {
      return o.valeur /= (_ref3 = diviseur.valeur) != null ? _ref3 : diviseur;
    } else {
      return alert("Je veux bien diviser cette variable mais par combien ?");
    }
  };
})(this);

si = function(booleen, fonction) {
  if (booleen) {
    fonction();
  }
  return null;
};

aMoinsQue = function(booleen, fonction) {
  if (!booleen) {
    fonction();
  }
  return null;
};
