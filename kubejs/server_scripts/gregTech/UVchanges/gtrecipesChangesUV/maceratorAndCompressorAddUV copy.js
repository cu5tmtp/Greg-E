ServerEvents.recipes((event) => {

    event.recipes.gtceu.macerator('getbacterialmatter')
        .itemInputs(
            'kubejs:bacterias/simplebacteria12'
        )
        .itemOutputs(
            'kubejs:bacterialmatter'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.compressor('getbacterialmatteringot')
        .itemInputs(
            'kubejs:bacterialmatter'
        )
        .itemOutputs(
            'kubejs:bacterialmatteringot'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
    
});