ServerEvents.recipes((event) => {

    event.recipes.gtceu.circuit_assembler('guidancecompfour')
        .itemInputs(
            '4x #gtceu:circuits/luv',
            '32x gtceu:smd_capacitor',
            '8x gtceu:smd_transistor',
            '8x gtceu:smd_inductor',
            '16x gtceu:incoloy_ma_956_ingot',
        )
        .itemOutputs(
            'kubejs:animated/guicompfour'
        )
        .duration(2000)
        .EUt(GTValues.VA[GTValues.LuV])

})