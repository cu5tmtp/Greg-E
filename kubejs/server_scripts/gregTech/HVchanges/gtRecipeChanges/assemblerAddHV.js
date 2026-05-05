ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler('beamlinecraft')
        .itemInputs(
            '16x gtceu:fine_copper_wire',
            '2x gtceu:magnetic_steel_rod',
            'gtceu:steel_frame'
        )
        .itemOutputs(
            'gregecore:linearaccelerator'
        )
        .duration(200)
        .EUt(480)
        .circuit(1)

    event.recipes.gtceu.assembler('conveyorcraft')
        .itemInputs(
            '4x gtceu:hv_conveyor_module',
            'gtceu:steel_frame'
        )
        .itemOutputs(
            'gregecore:conveyorbelt'
        )
        .duration(200)
        .EUt(480)
        .circuit(1)

    event.recipes.gtceu.assembler('translocatorcraft')
        .itemInputs(
            'gtceu:hv_robot_arm',
            'gtceu:steel_frame'
        )
        .itemOutputs(
            'gregecore:itemtranslocator'
        )
        .duration(200)
        .EUt(480)
        .circuit(1)

    event.recipes.gtceu.assembler('guidancecomptone')
        .itemInputs(
            '#gtceu:circuits/hv',
            '8x gtceu:capacitor',
            '2x gtceu:transistor',
            '4x gtceu:stainless_steel_ingot'
        )
        .itemOutputs(
            'kubejs:animated/guicomp'
        )
        .duration(2000)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('guidancecomptwo')
        .itemInputs(
            '#gtceu:circuits/hv',
            '16x gtceu:smd_capacitor',
            '4x gtceu:smd_transistor',
            '8x gtceu:stainless_steel_ingot'
        )
        .itemOutputs(
            'kubejs:animated/guicomptwo'
        )
        .duration(2000)
        .EUt(GTValues.VA[GTValues.HV])

});