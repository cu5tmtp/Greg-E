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
        .addData("cube_block", "kubejs:machine_casing_block_gold")

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
        )
        .itemOutputs(
            'gregecore:genesiscruciblecaseone'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "kubejs:machine_casing_tiled_dark_gray")

})