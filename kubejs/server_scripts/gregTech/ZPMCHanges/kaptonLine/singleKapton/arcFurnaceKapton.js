ServerEvents.recipes(event => {

        event.recipes.gtceu.arc_furnace('getthelastshit')
        .inputFluids(
            'gtceu:pdc44o 144'
        )
        .itemOutputs(
            'gtceu:kapton_ingot'
        )
        .outputFluids(
            'minecraft:water 144'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

})