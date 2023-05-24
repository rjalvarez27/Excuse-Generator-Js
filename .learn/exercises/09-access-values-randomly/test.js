const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

test("The arrays who, what, and when should exist with the indicated elements", ()=>{
    const file = rewire(path.resolve(__dirname, '../../../app.js'));

    const who = file.__get__("who");
    const what = file.__get__("what");
    const when = file.__get__("when");

    // Check that the arrays exist
    expect(who).toBeTruthy();
    expect(what).toBeTruthy();
    expect(when).toBeTruthy();

    // Check that the arrays contain the expected elements
    expect(who).toEqual(['The dog','My granma','His turtle','My bird']);
    expect(what).toEqual(['ate','pissed','crushed','broked']);
    expect(when).toEqual(['before the class','right in time','when I finished','during my lunch','while I was praying']);
})

test("You should be generating a random index for each array", ()=>{
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');

    const regexWho = /let\s+(\w+)\s*=\s*Math\s*\.floor\s*\(\s*Math\s*\.random\s*\(\s*\)\s*\*\s*who\.length\s*\)\s*;?/gm;
    const regexWhat = /let\s+(\w+)\s*=\s*Math\s*\.floor\s*\(\s*Math\s*\.random\s*\(\s*\)\s*\*\s*what\.length\s*\)\s*;?/gm;
    const regexWhen = /let\s+(\w+)\s*=\s*Math\s*\.floor\s*\(\s*Math\s*\.random\s*\(\s*\)\s*\*\s*when\.length\s*\)\s*;?/gm;

    let hasWhoIndex = regexWho.test(file.toString());
    let hasWhatIndex = regexWhat.test(file.toString());
    let hasWhenIndex = regexWhen.test(file.toString());

    expect(hasWhoIndex && hasWhatIndex && hasWhenIndex).toBeTruthy();
});


test("You should be using the random indexes to access values from the arrays and print them", ()=>{
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');

    // Pattern: console.log(who[index] + " " + what[index] + " " + when[index]);
    const regexLog = /console\.log\s*\(\s*who\s*\[\s*\w+\s*\]\s*\+\s*" "\s*\+\s*what\s*\[\s*\w+\s*\]\s*\+\s*" "\s*\+\s*when\s*\[\s*\w+\s*\]\s*\)\s*;?/gm;

    let hasLogStatement = regexLog.test(file.toString());

    expect(hasLogStatement).toBeTruthy();
});
