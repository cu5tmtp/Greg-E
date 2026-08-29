ServerEvents.recipes((event) => {

    event.remove('avaritia:infinity_catalyst')
    event.remove('avaritia:infinity_catalyst_eternal')
    event.recipes.gtceu.fornax_universi_acceleration("fornax1")
        .itemInputs(
            'avaritia:eternal_singularity',
            '8x avaritia:record_fragment',
            '8x avaritia:endest_pearl',
            '8x avaritia:ultimate_stew',
            '8x avaritia:cosmic_meatballs',
            '32x avaritia:crystal_matrix',
            '4x gtceu:neutronium_block',
            '8x gtceu:tritanium_block',
            '4x gtceu:decursium_block'
        )
        .itemOutputs(
            'avaritia:infinity_catalyst'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.remove('avaritia:infinity_ingot')
    event.recipes.gtceu.fornax_universi_acceleration("fornax2")
        .itemInputs(
            '4x avaritia:infinity_catalyst',
            '16x gtceu:neutronium_block',
            '32x avaritia:crystal_matrix',
            '16x gtceu:mellodium_block',
            '8x gtceu:prismalium_block',
            '4x gtceu:stellarium_block'
        )
        .itemOutputs(
            'avaritia:infinity_ingot'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.remove('avaritia:blaze_cube')    
    event.recipes.gtceu.fornax_universi_acceleration("fornax3")
        .itemInputs(
            '900x minecraft:blaze_rod'
        )
        .itemOutputs(
            '100x avaritia:blaze_cube'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.fornax_universi_acceleration("fornax5")
        .itemInputs(
            '200x avaritia:diamond_lattice'
        )
        .itemOutputs(
            '100x avaritia:crystal_matrix_ingot'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.fornax_universi_acceleration("fornax4")
        .itemInputs(
            'kubejs:tomes/withertoken',
            'kubejs:tomes/gaiatoken',
            'kubejs:tomes/chaostoken',
            'kubejs:tomes/enderdragontoken'
        )
        .itemOutputs(
            'gregecore:tome2'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

});