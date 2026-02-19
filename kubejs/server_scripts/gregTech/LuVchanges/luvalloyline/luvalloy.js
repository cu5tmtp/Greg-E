ServerEvents.recipes((event) =>{ 
    event.recipes.gtceu.extractor('getluvcef')
        .itemInputs(
            '#gtceu:circuits/luv'
        )
        .outputFluids(
            'kubejs:luvcas 1000'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LuV])
})