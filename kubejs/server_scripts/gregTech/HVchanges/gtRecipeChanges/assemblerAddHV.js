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

});