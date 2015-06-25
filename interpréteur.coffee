traduction = (dutexte) ->
  texte = dutexte
  texte = texte.replace /\ dans\ /g, " in "
  texte = texte.replace /pour\ /g, "for "
  texte = texte.replace /Pour\ /g, "for "
  texte = texte.replace /Sinon/g, "else"
  texte = texte.replace /sinon/g, "else"
  texte = texte.replace /Si\ /g, "if "
#  texte = texte.replace /si\ /g, "if "
  texte = texte.replace /\ nouvelle\ /g, " new "
  texte = texte.replace /Tant que\ /g, "while "
  texte = texte.replace /tant que\ /g, "while "
  texte = texte.replace /Jusqu'à ce que\ /g, "until "
  texte = texte.replace /jusqu'à ce que\ /g, "until "
  texte = texte.replace /\ +fois\ +faire/g, ".foisFaire ->"
  texte = texte.replace /\ +au carré/g, ", auCarré"
  texte = texte.replace /\ +au cube/g, ", auCube"
  texte = texte.replace /\ +à la puissance/g, ", àLaPuissance"
  texte = texte.replace /([^\,])\ +à\ +([^\,])/g, "$1, à, $2"
  texte = texte.replace /([^\,])\ +de\ +([^\,])/g, "$1, de, $2"
  texte = texte.replace /([^\,])\ +par\ +([^\,])/g, "$1, par, $2"
  texte = texte.replace /([^\,])\ +demi/g, "$1, demi"
  texte = texte.replace /([^\,])\ +tiers/g, "$1, tiers"
  texte = texte.replace /([^\,])\ +quart/g, "$1, quart"
  texte = texte.replace /([^\,])\ +cinquième/g, "$1, cinquième"
  texte = texte.replace /([^\,])\ +sixième/g, "$1, sixième"
  texte = texte.replace /([^\,])\ +septième/g, "$1, septième"
  texte = texte.replace /([^\,])\ +huitième/g, "$1, huitième"
  texte = texte.replace /([^\,])\ +neuvième/g, "$1, neuvième"
  texte = texte.replace /([^\,])\ +dixième/g, "$1, dixième"
  texte = texte.replace /([^\,])\ +pourcent/g, "$1, pourcent"
  texte = texte.replace /([^\,])\ +près/g, "$1, près"
  texte = texte.replace /([^\,])\ +décimale/g, "$1, décimale"
  texte = texte.replace /\ devient\ /g, " = "
  texte = texte.replace /:=/g, "="
  texte
  
correction = (unAlgo) ->
  texte = unAlgo
  texte = texte.replace /\.foisFaire\ *->/g, " fois faire"
  texte = texte.replace /->/g, " faire "
  texte = texte.replace /,(\ )*de(\ )*,/g, " de "
  texte = texte.replace /,(\ )*par(\ )*,/g, " par "
  texte = texte.replace /,(\ )*à(\ )*,/g, " à "
  texte = texte.replace /,(\ )*dans(\ )*,/g, " dans "
  texte = texte.replace(/,(\ )*auCarré/g, " au carré");
  texte = texte.replace(/,(\ )*auCube/g, " au cube");
  texte = texte.replace /,(\ )*àLaPuissance(\ )*,/g, " à la puissance "
  texte = texte.replace /Variable/g, "variable initialisée à "
  texte = texte.replace /==/g, " est égale à "
  texte = texte.replace /^->/g, " est supérieure à "
  texte = texte.replace />=/g, " est supérieure ou égale à "
  texte = texte.replace /<=/g, " est inférieure ou égale à "
  texte = texte.replace /</g, " est inférieure à "
  texte = texte.replace /éleverAuCarré(\ )*,/g, " élever au carré la variable "
  texte = texte.replace /éleverAuCube(\ )*,/g, " élever au cube la variable "
  texte = texte.replace /,(\ )*extraireLaRacineDe(\ )*,/g, " extraire la racine de "
  texte = texte.replace /,(\ )*demi/g, " demi"
  texte = texte.replace /,(\ )*tiers/g, " tiers"
  texte = texte.replace /,(\ )*quart/g, " quart"
  texte = texte.replace /,(\ )*cinquième/g, " cinquième"
  texte = texte.replace /,(\ )*sixième/g, " sixième"
  texte = texte.replace /,(\ )*septième/g, " septième"
  texte = texte.replace /,(\ )*huitième/g, " huitième"
  texte = texte.replace /,(\ )*neuvième/g, " neuvième"
  texte = texte.replace /,(\ )*dixième/g, " dixième"
  texte = texte.replace /,(\ )*pourcent/g, " pourcent"
  texte = texte.replace /,(\ )*décimale/g, " décimale"
  texte = texte.replace /,(\ )*près/g, " près"
  texte = texte.replace /(\S*)\.tantQuePlusGrandQue/g, "Tant que $1 est plus grand que "
  texte = texte.replace /(\S*)\.tantQuePlusPetitQue/g, "Tant que $1 est plus petit que "
  texte = texte.replace /(\S*)\.empiler(\ *\S*)/g, "empiler $2 dans $1"
  texte = texte.replace /\ *(\S*)\.valeur/g, " la valeur de $1"
  texte
###présentation
###
$ ->
  $("#manuel, #academy").hide 10
  $("#syntaxe").on "click", ->
      $("#manuel").toggle 1000
  $("#porteparole").on "click", ->
      $("#academy").toggle 1000
  
  $("#transfert").on "click", ->
    $("#academy").show 1000
    $("#academy").val correction $("#scriptCoff0").val()
  
  $("#runCoff0").on "click", ->
    try
      eval CoffeeScript.compile traduction $("#scriptCoff0").val()
    catch e
      alert(e)
