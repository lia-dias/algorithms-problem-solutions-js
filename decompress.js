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