ServerEvents.recipes((event) => {

    event.remove({ id: 'hostilenetworks:loot_fabricator'})
    event.remove({ id: 'hostilenetworks:sim_chamber'})

    event.replaceInput(
        { id: 'hostilenetworks:framework'},
        'minecraft:clay_ball',
        'kubejs:senplate'
    )

    event.replaceInput(
        { id: 'hostilenetworks:deep_learner'},
        'minecraft:obsidian',
        'kubejs:senplate'
    )

    event.replaceInput(
        { id: 'extrahnn:merger_camera'},
        'minecraft:netherite_block',
        '#gtceu:circuits/iv'
    )

    event.replaceInput(
        { id: 'extrahnn:upgrade_module_stack'},
        'minecraft:comparator',
        '#gtceu:circuits/iv'
    )

    event.remove({ id:'extrahnn:ultimate_loot_fabricator_v1'})
    event.recipes.gtceu.assembler('fabricatort1')
        .itemInputs(
            'hostilenetworks:loot_fabricator',
            '#gtceu:circuits/iv',
            '4x minecraft:diamond',
            '2x minecraft:netherite_ingot'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:ultimate_loot_fabricator_v1'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:ultimate_loot_fabricator_v2'})
    event.recipes.gtceu.assembler('fabricatort2')
        .itemInputs(
            'extrahnn:ultimate_loot_fabricator_v1',
            '#gtceu:circuits/iv',
            '16x minecraft:diamond',
            '8x minecraft:netherite_ingot'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:ultimate_loot_fabricator_v2'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:ultimate_loot_fabricator_v3'})
    event.recipes.gtceu.assembler('fabricatort3')
        .itemInputs(
            'extrahnn:ultimate_loot_fabricator_v2',
            '2x #gtceu:circuits/iv',
            '32x minecraft:diamond',
            '4x minecraft:netherite_block'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:ultimate_loot_fabricator_v3'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:ultimate_loot_fabricator_v4'})
    event.recipes.gtceu.assembler('fabricatort4')
        .itemInputs(
            'extrahnn:ultimate_loot_fabricator_v3',
            '4x #gtceu:circuits/iv',
            '64x minecraft:diamond',
            '16x minecraft:netherite_block'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:ultimate_loot_fabricator_v4'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:ultimate_sim_chamber_v1'})
    event.recipes.gtceu.assembler('simv1')
        .itemInputs(
            'hostilenetworks:sim_chamber',
            '#gtceu:circuits/iv',
            '4x minecraft:diamond',
            '2x minecraft:netherite_ingot'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:ultimate_sim_chamber_v1'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:ultimate_sim_chamber_v2'})
    event.recipes.gtceu.assembler('simv2')
        .itemInputs(
            'extrahnn:ultimate_sim_chamber_v1',
            '#gtceu:circuits/iv',
            '16x minecraft:diamond',
            '8x minecraft:netherite_ingot'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:ultimate_sim_chamber_v2'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:ultimate_sim_chamber_v3'})
    event.recipes.gtceu.assembler('simv3')
        .itemInputs(
            'extrahnn:ultimate_sim_chamber_v2',
            '2x #gtceu:circuits/iv',
            '32x minecraft:diamond',
            '4x minecraft:netherite_block'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:ultimate_sim_chamber_v3'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:ultimate_sim_chamber_v4'})
    event.recipes.gtceu.assembler('simv4')
        .itemInputs(
            'extrahnn:ultimate_sim_chamber_v3',
            '4x #gtceu:circuits/iv',
            '64x minecraft:diamond',
            '16x minecraft:netherite_block'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:ultimate_sim_chamber_v4'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:simulator_modeling'})
    event.recipes.gtceu.assembler('simodeling')
        .itemInputs(
            'extrahnn:ultimate_sim_chamber_v4',
            '4x #gtceu:circuits/iv',
            '64x minecraft:diamond',
            '8x minecraft:netherite_block',
            '3x extrahnn:upgrade_speed'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:simulator_modeling'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:merger_camera'})
    event.recipes.gtceu.assembler('mergercamera')
        .itemInputs(
            'extrahnn:ultimate_loot_fabricator_v4',
            '4x #gtceu:circuits/iv',
            '64x minecraft:diamond',
            '8x minecraft:netherite_block',
            '3x extrahnn:upgrade_data_kill'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:merger_camera'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:upgrade_speed'})
    event.recipes.gtceu.assembler('upgradespeeeeed')
        .itemInputs(
            'extrahnn:blank_extra_data_model',
            '#gtceu:circuits/iv',
            '4x minecraft:redstone_block',
            'minecraft:ender_eye',
            '4x minecraft:netherite_ingot'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:upgrade_speed'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:upgrade_data_kill'})
    event.recipes.gtceu.assembler('upgradedataaaa')
        .itemInputs(
            'extrahnn:blank_extra_data_model',
            'extrahnn:upgrade_speed',
            '#gtceu:circuits/iv',
            'minecraft:blaze_rod',
            '4x minecraft:netherite_ingot'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:upgrade_data_kill'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.remove({ id:'extrahnn:upgrade_module_stack'})
    event.recipes.gtceu.assembler('upgradetier')
        .itemInputs(
            'extrahnn:blank_extra_data_model',
            'extrahnn:upgrade_speed',
            'extrahnn:upgrade_data_kill',
            '#gtceu:circuits/iv',
            '8x minecraft:nether_star',
            '4x minecraft:netherite_ingot'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'extrahnn:upgrade_module_stack'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)
})