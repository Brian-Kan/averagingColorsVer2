// Minimal Viable Product (MVP)

// REQUIREMENT
// Write a function that takes 2 colors as arguments and returns the average color.
// - The parameters will be two 6-digit hexadecimal strings. This does not need to be validated.
// - The return value should be a 6-digit hexadecimal string.
// - The hexadecimal strings represent colors in RGB, much like in CSS.
// - The average color is to be determined by taking the arithmetic mean for each component: red, green and blue.*

// THOUGHT PROCESS
// - Part 1: Takes hex colors and converts it from a string to a number.
// -- It'll take 2 colors and therefore spits out 2 numbers.

// - Part 2: Takes these numbers and calculate the average.

// - Part 3: Re-convert them back to a hexadecimal.
// -- It'll also post it to the DOM.

// STRETCH GOALS
// - Have the color selection be a bit more interactive.


$(function (){
// =============================================
// MVP
// =============================================

    const averageCalculation = (num1, num2) => {
        // parseInt() takes has 2 parameters.  The first is the string it converts, the second, known as radix, is the base counting system.
        // Hexedecimals use a base 16 counting system.
        // So here I used parseInt with a radix 16.
        // The hexedecimals are also sliced into their RGB components for later use.
        const integerOneRed = parseInt(num1.slice(0, 2), 16)
        const integerOneGreen = parseInt(num1.slice(2, 4), 16)
        const integerOneBlue = parseInt(num1.slice(4, 6), 16)

        const integerTwoRed = parseInt(num2.slice(0, 2), 16)
        const integerTwoGreen = parseInt(num2.slice(2, 4), 16)
        const integerTwoBlue = parseInt(num2.slice(4, 6), 16)

        // Then the respective colors are matched and averaged.  They are also rounded.
        const redAverage = Math.round((integerOneRed + integerTwoRed) / 2)
        const greenAverage = Math.round((integerOneGreen + integerTwoGreen) / 2)
        const blueAverage = Math.round((integerOneBlue + integerTwoBlue) / 2)
        
        // Here the averaged RGB components are converted back into hexedecimals
        const hexConvertorOne = redAverage.toString(16)
        const hexConvertorTwo = greenAverage.toString(16)
        const hexConvertorThree = blueAverage.toString(16)

        // Some numbers might come back as single digits (1,2,3).
        // Since hexadecimals add the number '0' in the front of single digits (or letters) we will have to do the same.
        if (hexConvertorOne.length === 1) {
            hexConvertorOne = "0" + hexConvertorOne
        }
     
        if (hexConvertorTwo.length === 1) {
            hexConvertorTwo = "0" + hexConvertorTwo
        }
     
        if (hexConvertorThree.length === 1) {
            hexConvertorThree = "0" + hexConvertorThree
        }

        // Now the RGB components are re-combined.
        const newHexadecimal = hexConvertorOne + hexConvertorTwo + hexConvertorThree
        
        return newHexadecimal
    }  
   

// =============================================
// STRETCH GOALS - Stretch goal - getting the input from the group and running it through the function.
// =============================================
    
    $('form').on("submit", function(e){
        e.preventDefault();        

        // Getting the values.
        const firstInputValue = $('input[name="group1"]:checked').val()
        const secondInputValue = $('input[name="group2"]:checked').val()

        // Calling the function with said values.
        const colorAverage = averageCalculation(firstInputValue, secondInputValue)
        
        // The result is returned without the octothorpe (#) so this will ad it back.
        const addOctothorpe = "#".concat(colorAverage)        
        
        $('.results').empty()
        $('.results').append(addOctothorpe)

        // document.body.style.backgroundColor = addOctothorpe
        $('body').css('background-color', addOctothorpe)

    })   

})
