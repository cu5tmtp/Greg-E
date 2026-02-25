ServerEvents.recipes((event) =>{ 
    event.recipes.gtceu.extractor('getzpmcef')
        .itemInputs(
            '#gtceu:circuits/zpm'
        )
        .outputFluids(
            'kubejs:zpmcas 1000'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.ZPM])
})