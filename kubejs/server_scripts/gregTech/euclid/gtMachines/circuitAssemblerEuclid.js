ServerEvents.recipes((event) => {

    event.recipes.gtceu.circuit_assembler('euclid_circuit')
        .itemInputs(
            'kubejs:latgriumboard',
            '8x gtceu:reinforced_delirium_single_wire',
            'kubejs:animated/draconicprocessor'
        )
        .itemOutputs(
            'kubejs:euclid/euclid_circuit'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

})