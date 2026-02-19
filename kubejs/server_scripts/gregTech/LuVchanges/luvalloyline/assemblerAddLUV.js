ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler('gettheluvalloy')
        .itemInputs(
            '2x kubejs:ivalloy',
            '8x kubejs:iceshard',
        )
        .itemOutputs(
            'kubejs:luvalloy'
        )
        .inputFluids(
            'kubejs:luvcas 10'
        )
        .duration(20)
        .EUt(GTValues.VA[GTValues.LuV])

});