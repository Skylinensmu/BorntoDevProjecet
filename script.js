function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperatureInput').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var inputValue = document.getElementById('inputValue');
    var conversionResult = document.getElementById('conversionResult');
  
    if (fromUnit === toUnit) {
      inputValue.innerHTML = "";
      conversionResult.innerHTML = "โปรดระบุค่าหน่วยตั้งต้นและหน่วยที่ต้องการทำการแปลงให้แตกต่างกัน.";
      return;
    }
  
    var convertedTemperature;
  
    switch (fromUnit) {
      case 'Celsius':
        if (toUnit === 'Kelvin') {
          convertedTemperature = temperature + 273.15;
        } else if (toUnit === 'Fahrenheit') {
          convertedTemperature = (temperature * 9/5) + 32;
        }
        break;
      case 'Kelvin':
        if (toUnit === 'Celsius') {
          convertedTemperature = temperature - 273.15;
        } else if (toUnit === 'Fahrenheit') {
          convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        }
        break;
      case 'Fahrenheit':
        if (toUnit === 'Celsius') {
          convertedTemperature = (temperature - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
          convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        }
        break;
    }
  
    if (isNaN(convertedTemperature)) {
      inputValue.innerHTML = "";
      conversionResult.innerHTML = "ท่านระบุค่าอุณหภูมิไม่ถูกต้อง กรุณาระบุค่าใหม่อีกครั้ง";
    } else {
      inputValue.innerHTML = "อุณหภูมิ : " + temperature + "  " + "องศา" + " " + fromUnit;
      conversionResult.innerHTML = "มีค่าเท่ากับ: " + convertedTemperature.toFixed(2) + "  " + "องศา" + " " + toUnit;
    }
  }
  
  function clearValues() {
    document.getElementById('temperatureInput').value = '';
    document.getElementById('fromUnit').selectedIndex = 0;
    document.getElementById('toUnit').selectedIndex = 0;
    document.getElementById('inputValue').innerHTML = '';
    document.getElementById('conversionResult').innerHTML = '';
  }