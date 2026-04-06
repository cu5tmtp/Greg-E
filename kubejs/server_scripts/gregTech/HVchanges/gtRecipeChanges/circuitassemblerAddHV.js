ServerEvents.recipes((event) => {

    event.replaceInput(
        'gtceu:circuit_assembler/workstation_ev',
        'gtceu:blue_alloy_bolt',
        '16x gregecore:nobelium_bolt'
    )

    event.replaceInput(
        'gtceu:circuit_assembler/workstation_ev_soldering_alloy',
        'gtceu:blue_alloy_bolt',
        '16x gregecore:nobelium_bolt'
    )

    event.replaceInput(
        'gtceu:circuit_assembler/nano_processor_assembly_ev_asmd_soldering_alloy',
        'gtceu:fine_electrum_wire',
        '8x gregecore:nobelium_bolt'
    )

    event.replaceInput(
        'gtceu:circuit_assembler/nano_processor_assembly_ev_asmd',
        'gtceu:fine_electrum_wire',
        '8x gregecore:nobelium_bolt'
    )

    event.replaceInput(
        'gtceu:circuit_assembler/nano_processor_assembly_ev_soldering_alloy',
        'gtceu:fine_electrum_wire',
        '8x gregecore:nobelium_bolt'
    )

    event.replaceInput(
        'gtceu:circuit_assembler/nano_processor_assembly_ev',
        'gtceu:fine_electrum_wire',
        '8x gregecore:nobelium_bolt'
    )

    event.replaceInput(
        'gtceu:circuit_assembler/quantum_processor_ev_asmd',
        'gtceu:fine_platinum_wire',
        '4x gregecore:nobelium_bolt'
    )

    event.replaceInput(
        'gtceu:circuit_assembler/quantum_processor_ev_asmd_soldering_alloy',
        'gtceu:fine_platinum_wire',
        '4x gregecore:nobelium_bolt'
    )

    event.replaceInput(
        'gtceu:circuit_assembler/quantum_processor_ev',
        'gtceu:fine_platinum_wire',
        '4x gregecore:nobelium_bolt'
    )

    event.replaceInput(
        'gtceu:circuit_assembler/quantum_processor_ev_soldering_alloy',
        'gtceu:fine_platinum_wire',
        '4x gregecore:nobelium_bolt'
    )

    event.replaceInput(
        'gtceu:circuit_assembler/quantum_processor_ev_soc',
        'gtceu:fine_platinum_wire',
        '2x gregecore:nobelium_bolt'
    )

    event.replaceInput(
        'gtceu:circuit_assembler/quantum_processor_ev_soc_soldering_alloy',
        'gtceu:fine_platinum_wire',
        '2x gregecore:nobelium_bolt'
    )

    event.recipes.gtceu.circuit_assembler('guidancecomptone')
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
        .EUt(480)

    event.recipes.gtceu.circuit_assembler('guidancecomptwo')
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
        .EUt(480)

})