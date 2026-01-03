ServerEvents.recipes((event) => {

    event.recipes.gtceu.wiremill('gettheclogwire')
        .itemInputs(
            'undergarden:cloggrum_ingot'
        )
        .itemOutputs(
            '8x kubejs:clogwire'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(3)

    event.recipes.gtceu.wiremill('getthefrostwire')
        .itemInputs(
            'undergarden:froststeel_ingot'
        )
        .itemOutputs(
            '8x kubejs:frostwire'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(3)

    event.recipes.gtceu.wiremill('gettheforgwiretwo')
        .itemInputs(
            'undergarden:forgotten_ingot'
        )
        .itemOutputs(
            'kubejs:twoxforgcable'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(2)

});