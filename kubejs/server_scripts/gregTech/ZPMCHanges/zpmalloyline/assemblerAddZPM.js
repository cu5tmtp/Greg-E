ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler('getthezpmalloy')
        .itemInputs(
            '2x kubejs:luvalloy',
            '4x kubejs:evilsoul',
        )
        .itemOutputs(
            'kubejs:animated/zpmalloy'
        )
        .inputFluids(
            'kubejs:zpmcas 10'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])

});