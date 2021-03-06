Blockly.JavaScript['sophus_angle'] = function(block) {
  var angledeg = block.getFieldValue('angle'); 
  return angledeg;
};



Blockly.JavaScript['sophus_carre'] = function(block) {
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_pow = block.getFieldValue('POW');
  return varName + ' = Math.pow(' + varName + ',' + dropdown_pow + ');\n';
};

Blockly.JavaScript['sophus_doubler'] = function(block) {
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var choix = block.getFieldValue('CHOIX');
  return varName + ' = ' + varName +
      ' * ' + choix + ';\n';
};

Blockly.JavaScript['sophus_augmenter'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName +
      ' + ' + argument0 + ';\n';
};

Blockly.JavaScript['sophus_diminuer'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName +
      ' - ' + argument0 + ';\n';
};

Blockly.JavaScript['sophus_augmenter_fract'] = function(block) {
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var dropdown_denom = block.getFieldValue('DENOM');
  return varName + ' = ' + varName + " + " + varName + " * " + argument0 + " / " + dropdown_denom + ";\n";
};


Blockly.JavaScript['sophus_augmenter_pct'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName +
      ' * (1 + ' + argument0 + ' / 100)' + ';\n';
};

Blockly.JavaScript['sophus_diminuer_fract'] = function(block) {
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var dropdown_denom = block.getFieldValue('DENOM');
  return varName + ' = ' + varName + " - " + varName + " * " + argument0 + " / " + dropdown_denom + ";\n";
};


Blockly.JavaScript['sophus_diminuer_pct'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName +
      ' * (1 - ' + argument0 + ' / 100)' + ';\n';
};

// ameliore la traduction quand la borne sup d'un Pour est une variable
Blockly.JavaScript['controls_for'] = function(block) {
  // For loop.
  var variable0 = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'FROM',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var increment = Blockly.JavaScript.valueToCode(block, 'BY',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code;
  if (Blockly.isNumber(increment)) {
    // All arguments are simple numbers.
    var up = parseFloat(increment) >= 0;
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        variable0;
    var step = Math.abs(parseFloat(increment));
    if (step == 1) {
      code += up ? '++' : '--';
    } else {
      code += (up ? ' += ' : ' -= ') + step;
    }
    code += ') {\n' + branch + '}\n';
  } else {
    var up = true;
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        variable0;
    code += (up ? ' += ' : ' -= ') + increment;
    code += ') {\n' + branch + '}\n';
  }
  return code;
};



Blockly.JavaScript['sophus_multiplier'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName +
      ' * ' + argument0 + ';\n';
};



Blockly.JavaScript['sophus_diviser'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName +
      ' / ' + argument0 + ';\n';
};


Blockly.JavaScript['sophus_multiplier_fract'] = function(block) {
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var dropdown_denom = block.getFieldValue('DENOM');
  return varName + ' = ' + varName + " * " + argument0 + " / " + dropdown_denom + ";\n";
};



Blockly.JavaScript['sophus_diviser_fract'] = function(block) {
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var dropdown_denom = block.getFieldValue('DENOM');
  return varName + ' = ' + varName + " * " + dropdown_denom + " / " + argument0 + ";\n";
};




Blockly.JavaScript['sophus_arrondir'] = function(block) {
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var dropdown_grad = block.getFieldValue('GRAD');
  return varName + ' = Math.round(' + varName + " / " + dropdown_grad + argument0 + ") * " + dropdown_grad + argument0 + ";\n";
};





Blockly.JavaScript['sophus_tronquer'] = function(block) {
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var dropdown_grad = block.getFieldValue('GRAD');
  return varName + ' = Math.floor(' + varName + " / " + dropdown_grad + argument0 + ") * " + dropdown_grad + argument0 + ";\n";
};



Blockly.JavaScript['sophus_puissance'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'POW',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = Math.pow(' + varName +
      ' , ' + argument0 + ');\n';
};



Blockly.JavaScript['sophus_inverser'] = function(block) {
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + " 1 / " + varName + ';\n';
};

