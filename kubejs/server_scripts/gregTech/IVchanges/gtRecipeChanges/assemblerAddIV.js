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
        .inputFluids(
            'kubejs:ivcas 10'
        )
        .duration(20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('gethartofdsi')
        .itemInputs(
            'kubejs:vileheart'
        )
        .itemOutputs(
            'minecraft:heart_of_the_sea'
        )
        .inputFluids(
            'kubejs:holywater 10000'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

});