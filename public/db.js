const request = window.indexedDB.open("BudgetDB", 1);

request.onupgradeneeded = function (event)
{
    let db = event.target.result;

    const budgetStore = db.createObjectStore("budgetStore", {
        autoIncrement: true
    });

    budgetStore.createIndex("budgetIndex", "budgetIndex");
};
