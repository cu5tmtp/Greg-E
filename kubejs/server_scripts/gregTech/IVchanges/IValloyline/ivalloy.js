ServerEvents.recipes((event) =>{ 
    event.recipes.gtceu.extractor('getivcef')
        .itemInputs(
            '#gtceu:circuits/iv'
        )
        .outputFluids(
            'kubejs:ivcas 1000'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.IV])
})