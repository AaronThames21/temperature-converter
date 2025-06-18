function convertToCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 / 9;
}


function describeTemperature(fahrenheit) {
    const celsius = convertToCelsius(fahrenheit);

    let description;
    if (celsius <0) {
        description = "too damn cold";
    } else if (celsius <20) {
      description = "cold but not too cold";
    } else if (celsius <30) {
      description = "hot but not too hot";
    } else if (celsius <40) {
      description = "kind of toasty";  
    } else {
      description = "too damn hot"  
    }

    return `That's ${celsius.toFixed(2)}°C, which feels ${description}.`;
}

const fahrenheitInput = prompt("Enter temperature in Fahrenheit");
const fahrenheit = parseFloat(fahrenheitInput);

if (!isNaN(fahrenheit)) {
   const result = describeTemperature(fahrenheit);
   alert (result); 
} else {
   alert("Please enter a valid number."); 
}