/**
 * == DECOMPRESS STRING PROBLEM ==
 * Given a string in the form:
 *  string: <number>[<expression>] | <expression>
 *  expression: <character> | <number>[<expression>] | <character><expression>
 *  character: a-z
 *  number: positive integers
 * The algorithms decompress the string in a way that all expression after a number _n_ repeats itself n times.
 * Exemple: 2[ab] = abab; 2[ab3[c]] = abcccabccc
 */

/**
 * Decompress recursively a given compressed string
 * @param {string} string string to be decompressed
 * @param {number} repetionCounter number of times the decompressed string should be repeated
 * @returns {string} decompressed string
 */
function decompressString(string, repetionCounter = 1) {
    let openBlockQtd = 0;
    let iterator = 0;
    let decompressedString = "";
    let startSubstringIndex;
    let endSubstringIndex;
    let substringRepetition = 1;
    if(string == "") return "";
    while(iterator < string.length){
        if(openBlockQtd > 0) {
            if(string[iterator] == "[") openBlockQtd++;
            else if(string[iterator] == "]") {
                openBlockQtd--;
                endSubstringIndex = iterator;
                if(openBlockQtd == 0) {
                    decompressedString += decompressString(string.substring(startSubstringIndex, endSubstringIndex), substringRepetition);
                    substringRepetition = 1;
                }
            }
        }
        else if(!isNaN(string[iterator])) {
            substringRepetition = Number.parseInt(string[iterator]);
            while(!isNaN(string[iterator+1])) {
                iterator++;
                substringRepetition = substringRepetition * 10 + Number.parseInt(string[iterator]);
            }
            substringRepetition = substringRepetition;
        }
        else if(string[iterator] == "[") {
            openBlockQtd++;
            startSubstringIndex = iterator+1;
        } else {
            decompressedString += string[iterator];
        }

        iterator++;
    }
    return "".padStart(decompressedString.length * repetionCounter, decompressedString);
}

if(process.argv[2]) {
    console.log(decompressString(process.argv[2]));
}