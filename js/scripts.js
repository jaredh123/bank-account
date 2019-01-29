function BankAccount(name, initialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
}

BankAccount.prototype.printDetails = function() {
  return this.name + " with a deposit of " + this.initialDeposit;
}

function displayBalance(newAccount) {
  var balance = $("p#output");
  var balanceText = newAccount.initialDeposit;
  balance.text("$" + balanceText);
}

function countBalance(inputtedDeposit, inputtedWithdrawal){
  return inputtedDeposit - inputtedWithdrawal;
}

function currentBalance(result, inputtedInitialDeposit){
  var finalBalance = parseInt(inputtedInitialDeposit) + parseInt(result);
  return finalBalance;
}

function checkBalance(inputtedInitialDeposit){
  if (!inputtedInitialDeposit){
    alert("Please make a deposit first!");
  }
}

var newAccount;
var inputtedName;
var inputtedInitialDeposit;
var result;

$(document).ready(function(){
  $("#depositButton").click(function(event){
    event.preventDefault();

    inputtedName = $("input#name").val();
    inputtedInitialDeposit = $("input#initialDeposit").val();

    newAccount = new BankAccount(inputtedName, inputtedInitialDeposit);

    displayBalance(newAccount);

  });

  $("#goButton").click(function(event){
    event.preventDefault();

    checkBalance(inputtedInitialDeposit);
    var inputtedDeposit = $("input#deposit").val();
    var inputtedWithdrawal = $("input#withdrawal").val();

    result = countBalance(inputtedDeposit, inputtedWithdrawal);

    inputtedInitialDeposit = currentBalance(result, inputtedInitialDeposit);

    newAccount = new BankAccount(inputtedName, inputtedInitialDeposit);
    displayBalance(newAccount);
  });
});
