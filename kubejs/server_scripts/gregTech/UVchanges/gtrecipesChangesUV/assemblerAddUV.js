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
    
});