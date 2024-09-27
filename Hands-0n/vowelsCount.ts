/* Write a function that takes in a string and returns the number of vowels in the string. */

let Input = require('prompt-sync')();

function vowelsCount(word: string): number {
    let count: number = 0;
    let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0;i<word.length;i++){
        if(vowels.indexOf(word[i])!=-1){
            count++;
        }
    }
    return count;
}
console.log(vowelsCount(Input("Enter word : ")));