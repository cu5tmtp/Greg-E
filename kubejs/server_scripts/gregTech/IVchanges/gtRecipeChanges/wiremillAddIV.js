ServerEvents.recipes((event) => {

    event.recipes.gtceu.wiremill('gettheclogwire')
        .itemInputs(
            'kubejs:purecloggrum'
        )
        .itemOutputs(
            '8x kubejs:clogwire'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(3)

    event.recipes.gtceu.wiremill('getthefrostwire')
        .itemInputs(
            'kubejs:purefroststeel'
        )
        .itemOutputs(
            '8x kubejs:frostwire'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(3)

});