ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:me_stocking_input_bus',
            'gtceu:me_stocking_input_hatch',
            '#gtceu:circuits/zpm',
            '4x gtceu:zpm_electric_piston',
            '4x gtceu:zpm_electric_piston',
            '8x gtceu:zpm_electric_motor'
        )
        .inputFluids(
            'gtceu:polytetrafluoroethylene'
        )
        .itemOutputs(
            'expandedgt:dual_me_stocking_input_hatch'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(500)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:me_output_hatch',
            'gtceu:me_output_bus',
            '#gtceu:circuits/zpm',
            '4x gtceu:zpm_electric_piston',
            '4x gtceu:zpm_electric_piston',
            '8x gtceu:zpm_electric_motor'
        )
        .inputFluids(
            'gtceu:polytetrafluoroethylene'
        )
        .itemOutputs(
            'expandedgt:dual_me_output_hatch'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(500)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:me_input_bus',
            'gtceu:me_input_hatch',
            '#gtceu:circuits/zpm',
            '4x gtceu:zpm_electric_piston',
            '4x gtceu:zpm_electric_piston',
            '8x gtceu:zpm_electric_motor'
        )
        .inputFluids(
            'gtceu:polytetrafluoroethylene'
        )
        .itemOutputs(
            'expandedgt:dual_me_input_hatch'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(500)

})