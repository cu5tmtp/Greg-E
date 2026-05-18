ServerEvents.recipes((event) => {

    event.recipes.gtceu.alloy_smelter()
        .itemInputs(
            '2x minecraft:iron_ingot',
            'minecraft:coal'
        )
        .itemOutputs(
            '2x gtceu:sintercoke_ingot'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

})