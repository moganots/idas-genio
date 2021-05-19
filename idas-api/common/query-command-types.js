const CommandTypes = {
    ScalarFunction: `ScalarFunction`,
    StoredProcedure: `StoredProcedure`,
    TableDirect: `TableDirect`,
    TableFunction: `TableFunction`
}

Object.freeze(CommandTypes);

module.exports = {
    CommandTypes: CommandTypes
}