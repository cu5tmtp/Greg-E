ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembly_line('parallellboosterfirst')
        .itemInputs(
            '16x #gtceu:circuits/zpm',
            '32x gregecore:blood_infused_cable_double_wire',
            '2x gtceu:hssg_frame',
            '2x gtceu:zpm_robot_arm',
            '2x gtceu:zpm_electric_piston'
        )
        .itemOutputs('gregecore:parallel_booster_machine')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.ZPM])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_parallel_hatch')).EUt(GTValues.VA[GTValues.LuV]).duration(400))

});