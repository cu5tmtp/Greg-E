ServerEvents.recipes((event) => {

    event.recipes.gtceu.extractor()
        .itemInputs(
            'hostilenetworks:overworld_prediction'
        )
        .outputFluids(
            'mob_grinding_utils:fluid_xp 250'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'hostilenetworks:nether_prediction'
        )
        .outputFluids(
            'mob_grinding_utils:fluid_xp 250'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'hostilenetworks:end_prediction'
        )
        .outputFluids(
            'mob_grinding_utils:fluid_xp 250'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'hostilenetworks:twilight_prediction'
        )
        .outputFluids(
            'mob_grinding_utils:fluid_xp 250'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

})