ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler('gettheivalloy')
        .itemInputs(
            '2x kubejs:evalloy',
            '8x kubejs:frostwire',
            '8x kubejs:clogwire'
        )
        .itemOutputs(
            'kubejs:ivalloy'
        )
        .duration(20)
        .EUt(GTValues.VA[GTValues.IV])

});