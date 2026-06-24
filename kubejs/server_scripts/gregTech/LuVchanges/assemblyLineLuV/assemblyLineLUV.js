ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler('bigfreezerresearch')
        .itemInputs(
            '16x #gtceu:circuits/luv',
            '48x gregecore:superelement27_double_wire',
            '64x gtceu:frostproof_machine_casing',
            '8x gtceu:fine_aluminium_wire',
            '2x gtceu:luv_robot_arm',
            '2x gtceu:luv_electric_piston'
        )
        .itemOutputs('gregecore:bigfreezer')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('antimacefdvdfvd')
        .itemInputs(
            '16x #gtceu:circuits/luv',
            '48x gregecore:superelement27_double_wire',
            '64x gtceu:shock_proof_cutting_casing',
            '8x gtceu:hastelloy_c_276_plate',
            '2x gtceu:luv_robot_arm',
            '2x gtceu:luv_electric_piston'
        )
        .itemOutputs('gregecore:antimass')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.IV])

});