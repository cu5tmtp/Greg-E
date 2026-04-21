ServerEvents.recipes(event => {

        event.recipes.gtceu.arc_furnace('getkaptonfoil')
        .itemInputs(
            'gtceu:kapton_ingot'
        )
        .itemOutputs(
            '64x gtceu:kapton_foil'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

})