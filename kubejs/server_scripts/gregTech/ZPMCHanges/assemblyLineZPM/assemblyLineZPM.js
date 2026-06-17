ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler('parallellboosterfirst')
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
        .circuit(1)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '16x #gtceu:circuits/zpm',
            '32x gregecore:blood_infused_cable_double_wire',
            '32x gtceu:high_temperature_smelting_casing',
            '32x gtceu:stress_proof_casing',
            '8x gtceu:zpm_robot_arm',
            '8x gtceu:zpm_electric_piston'
        )
        .itemOutputs('gregecore:giantabs')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(2)

    event.recipes.gtceu.assembly_line('getautomtedassblylineffccd3')
        .itemInputs(
            '16x #gtceu:circuits/zpm',
            '8x gtceu:zpm_robot_arm',
            '8x gtceu:zpm_electric_piston',
            '16x gtceu:luv_field_generator',
            '32x gregecore:blood_infused_cable_double_wire',
            '64x gtceu:coated_demonite_ingot',
            '16x gtceu:europium_foil'
        )
        .inputFluids(
            'gtceu:soldering_alloy 2500'
        )
        .itemOutputs('gregecore:autassemblyline')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .stationResearch(b => b.researchStack(Item.of('gtceu:assembly_line')).EUt(GTValues.VA[GTValues.ZPM]).CWUt(16))

});