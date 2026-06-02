ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler('getglacialcore')
        .itemInputs(
            '4x #gtceu:circuits/uv',
            '8x gtceu:dense_rhodium_plated_palladium_plate',
            'gtceu:europium_frame',
            '4x gtceu:zpm_field_generator'
        )
        .itemOutputs(
            'gregecore:frostcore'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(1)

    event.recipes.gtceu.circuit_assembler('ultimatesmdassembler1')
        .itemInputs(
            'gtceu:neuro_processing_unit',
            'gtceu:highly_advanced_soc',
            '8x gtceu:fine_yttrium_barium_cuprate_wire',
            '8x gtceu:naquadah_bolt',
            '2x kubejs:ultimatecapacitor'
        )
        .itemOutputs(
            '6x gtceu:wetware_processor'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.circuit_assembler('ultimatesmdassembler2')
        .itemInputs(
            'gtceu:wetware_printed_circuit_board',
            '2x gtceu:wetware_processor',
            'gtceu:highly_advanced_soc',
            '8x gtceu:fine_yttrium_barium_cuprate_wire',
            '2x kubejs:ultimatediode'
        )
        .itemOutputs(
            '4x gtceu:wetware_processor_assembly'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
});