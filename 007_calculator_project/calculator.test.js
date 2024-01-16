import Calculator from "./calculator.js";


function testAddFunction(x,y,expected) {
    const result = Calculator.Add(x,y);


    if (!assertEqualTwoNumbers(result,expected)) {
        printErrorMessage("Add()",expected,result);
        return;
    }
    printTestPassedMessage("Add()",expected,result);
}

function testSubtractFunction (x,y,expected) {
    const result = Calculator.Subtract(x,y);

    if (!assertEqualTwoNumbers(result,expected)) {
        printErrorMessage("Subtract()",expected,result);
        return;
    }
    printTestPassedMessage("Subtract()",expected,result);
}

function testMultiplyFunction(x,y,expected) {
    const result = Calculator.Multiply(x,y);

    if (!assertEqualTwoNumbers(result,expected)) {
        printErrorMessage("Multiply()",expected,result);
        return;
    }
    printTestPassedMessage("Multiply()",expected,result);
}

function testDivideFunction(x,y,expected) {
    const result = Calculator.Divide(x,y);

    if (!assertEqualTwoNumbers(result,expected)) {
        printErrorMessage("Divide()",expected,result);
        return;
    }
    printTestPassedMessage("Divide()",expected,result);
}

///////


function assertEqualTwoNumbers(x,y) {
    return x == y;
}

function printTestPassedMessage(functionName,expected,result) {
    console.log(functionName + " has passed !! \nExpected : " + expected + " Result : " + result);
}

function printErrorMessage(functionName,expected,result) {
    console.log("Error testing " + functionName + " function !! \nExpected : " + expected + " Result : " + result);
}


//////

const TestData1 = {"x":100,"y":20};
const TestData1Result = {"Add":120,"Subtract":80,"Multiply":2000,"Divide":5};

const TestData2 = {"x":3,"y":6};
const TestData2Result = {"Add":9,"Subtract":-3,"Multiply":18,"Divide":1/2};

const TestData3 = {"x":10,"y":10};
const TestData3Result = {"Add":30,"Subtract":-5,"Multiply":50,"Divide":5};

const True_DataList = new Map([
    [TestData1,TestData1Result],
    [TestData2,TestData2Result],
]);

const False_DataList = new Map([
    [TestData3,TestData3Result],
])

console.log("\nTesting TRUE Data List !! \n");

True_DataList.forEach((testDataResult,testData) => {
    testAddFunction(testData["x"],testData["y"],testDataResult["Add"]);
    testSubtractFunction(testData["x"],testData["y"],testDataResult["Subtract"]);
    testMultiplyFunction(testData["x"],testData["y"],testDataResult["Multiply"]);
    testDivideFunction(testData["x"],testData["y"],testDataResult["Divide"]);
});

console.log("\nTesting FALSE Data List !! \n");

False_DataList.forEach((testDataResult,testData) => {
    testAddFunction(testData["x"],testData["y"],testDataResult["Add"]);
    testSubtractFunction(testData["x"],testData["y"],testDataResult["Subtract"]);
    testMultiplyFunction(testData["x"],testData["y"],testDataResult["Multiply"]);
    testDivideFunction(testData["x"],testData["y"],testDataResult["Divide"]);
});