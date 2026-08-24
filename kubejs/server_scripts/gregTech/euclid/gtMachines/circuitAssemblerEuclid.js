ServerEvents.recipes((event) => {

    event.recipes.gtceu.circuit_assembler('euclid_circuit')
        .itemInputs(
            'kubejs:latgriumboard',
            '8x gtceu:reinforced_delirium_single_wire',
            'kubejs:animated/draconicprocessor',
            '4x kubejs:ultimatecapacitor'
        )
        .itemOutputs(
            'kubejs:euclid/euclid_circuit'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.circuit_assembler('euclid_integrated')
        .itemInputs(
            'kubejs:redsedimentcircuitboard',
            '8x gtceu:redrockium_single_wire',
            'kubejs:animated/draconicprocessor',
            '2x kubejs:ultimateinductor',
            '2x kubejs:ultimatetransistor'
        )
        .itemOutputs(
            'kubejs:euclid/euclid_integrated'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

})