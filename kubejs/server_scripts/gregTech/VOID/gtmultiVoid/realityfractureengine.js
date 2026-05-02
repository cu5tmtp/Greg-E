ServerEvents.recipes((event) => {

    event.recipes.gtceu.open_rift('opentherift')
        .itemInputs(
            'avaritia:infinity_catalyst'
        )
        .itemOutputs(
           'minecraft:deepslate'
        )
        .duration(1000)

})