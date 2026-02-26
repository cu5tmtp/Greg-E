ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembly_line('bigfreezerresearch')
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
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:vacuum_freezer')).EUt(GTValues.VA[GTValues.IV]).duration(400))

});