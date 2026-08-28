ServerEvents.recipes((event) => {

    event.recipes.gtceu.specializedassemblyline()
        .itemInputs(
            'gregecore:unstable',
            '16x gtceu:uhv_electric_motor',
            '16x gtceu:uhv_electric_piston',
            '16x gtceu:uhv_robot_arm',
            '16x gtceu:uhv_sensor',
            '16x kubejs:animated/draconicprocessor',
            'gtceu:uev_machine_hull'
        )
        .itemOutputs(
            'gregecore:assemblyhall'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)


    event.recipes.gtceu.assemblyhall()
        .itemInputs(
            'kubejs:unstabledrillhead',
            '4x avaritia:infinity',
            '8x gtceu:uhv_robot_arm',
            '8x gtceu:uhv_electric_piston'
        )
        .itemOutputs(
            'gtceu:tectonicdisruptor'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "gtceu:solid_machine_casing")

    event.recipes.gtceu.assemblyhall()
        .itemInputs(
            '8x gtceu:uhv_electric_pump',
            '8x gtceu:uhv_fluid_regulator',
            '8x gtceu:uhv_conveyor_module',
            '8x kubejs:nebulonfilter',
        )
        .itemOutputs(
            'gtceu:auxillaryfiltrator'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "gtceu:heatproof_machine_casing")

    event.recipes.gtceu.assemblyhall()
        .itemInputs(
            '8x gtceu:uhv_electric_pump',
            '8x gtceu:uhv_fluid_regulator',
            '8x gtceu:uhv_conveyor_module',
            '8x kubejs:nebulonfilter',
        )
        .itemOutputs(
            'gtceu:auxillaryfiltrator'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "gtceu:heatproof_machine_casing")

    event.recipes.gtceu.assemblyhall()
        .itemInputs(
            '8x gtceu:reinforced_delirium_block',
            '4x kubejs:euclid/euclid_circuit',
            'gtceu:fusion_glass'
        )
        .itemOutputs(
            'gregecore:genesiscruciblecaseone'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "kubejs:machine_casing_tiled_dark_gray")

    event.recipes.gtceu.assemblyhall()
        .itemInputs(
            '8x gtceu:reinforced_kamenium_block',
            '4x kubejs:euclid/euclid_integrated',
            'gtceu:fusion_glass'
        )
        .itemOutputs(
            'gregecore:genesiscruciblecasetwo'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "kubejs:machine_casing_tiled_dark_gray")

    event.recipes.gtceu.assemblyhall()
        .itemInputs(
            '8x gtceu:inert_machine_casing',
            '3x kubejs:euclid/euclid_computer',
            '4x gtceu:uiv_electric_motor'
        )
        .itemOutputs(
            'gtceu:atomicreversator'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "kubejs:machine_casing_tiled_orange")

    event.recipes.gtceu.assemblyhall()
        .itemInputs(
            '8x gtceu:supergrympl_block',
            '4x kubejs:euclid/euclid_computer',
            '2x gtceu:uiv_robot_arm',
            'gtceu:fusion_glass'
        )
        .itemOutputs(
            'gregecore:genesiscruciblecasethree'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "kubejs:machine_casing_tiled_dark_gray")

    event.recipes.gtceu.assemblyhall()
        .itemInputs(
            '8x gtceu:xynredar_block',
            '4x kubejs:euclid/euclid_mainframe',
            '2x gtceu:uiv_field_generator',
            'gtceu:fusion_glass'
        )
        .itemOutputs(
            'gregecore:genesiscruciblecasefour'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "kubejs:machine_casing_tiled_dark_gray")

})