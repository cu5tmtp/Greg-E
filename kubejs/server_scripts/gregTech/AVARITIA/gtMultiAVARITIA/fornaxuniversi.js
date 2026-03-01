ServerEvents.recipes((event) => {

    event.remove('avaritia:infinity_catalyst')
    event.remove('avaritia:infinity_catalyst_eternal')
    event.recipes.gtceu.fornax_universi_acceleration("fornax1")
        .itemInputs(
            'avaritia:eternal_singularity',
            '16x avaritia:record_fragment',
            '16x avaritia:endest_pearl',
            '16x avaritia:ultimate_stew',
            '16x avaritia:cosmic_meatballs',
            '64x avaritia:crystal_matrix'
        )
        .inputFluids(
            'kubejs:uhvcas 5000'
        )
        .itemOutputs(
            'avaritia:infinity_catalyst'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

        event.recipes.gtceu.fornax_universi_acceleration("fornaxtest")
        .itemInputs(
            'minecraft:stone',
        )
        .itemOutputs(
            'minecraft:cobblestone'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

});