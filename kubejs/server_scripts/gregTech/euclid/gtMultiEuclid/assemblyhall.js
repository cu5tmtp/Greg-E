ServerEvents.recipes((event) => {

    event.recipes.gtceu.specializedassemblyline()
        .itemInputs(
            'gtceu:uev_machine_hull',
            'gregecore:unstable',
            '16x gtceu:uhv_electric_motor',
            '16x gtceu:uhv_electric_piston',
            '16x gtceu:uhv_robot_arm',
            '16x gtceu:uhv_sensor',
            '16x kubejs:animated/draconicprocessor',
        )
        .inputFluids(
            'gtceu:soldering_alloy 1000'
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
        .inputFluids(
            'gtceu:soldering_alloy 300'
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
        .inputFluids(
            'gtceu:soldering_alloy 300'
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
        .inputFluids(
            'gtceu:soldering_alloy 300'
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
        .inputFluids(
            'gtceu:soldering_alloy 300'
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
        .inputFluids(
            'gtceu:soldering_alloy 300'
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
        .inputFluids(
            'gtceu:fracturedlubricant 1000'
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
        .inputFluids(
            'gtceu:fracturedlubricant 1000'
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
        .inputFluids(
            'gtceu:fracturedlubricant 1000'
        )
        .itemOutputs(
            'gregecore:genesiscruciblecasefour'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "kubejs:machine_casing_tiled_dark_gray")

    event.recipes.gtceu.assemblyhall()
        .itemInputs(
            '4x gtceu:uhv_electric_motor',
            '4x gtceu:uhv_electric_piston',
            '4x gtceu:uhv_robot_arm',
            '4x gtceu:uhv_sensor',
            '4x kubejs:animated/draconicprocessor',
            'gtceu:uev_machine_hull'
        )
        .inputFluids(
            'gtceu:soldering_alloy 300'
        )
        .itemOutputs(
            'gregecore:genesiscrucible'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "avaritia:infinity")

})