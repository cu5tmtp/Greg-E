ServerEvents.recipes((event) => {

    event.recipes.gtceu.circuit_assembler('guidancecomptwo')
        .itemInputs(
            '#gtceu:circuits/ev',
            '8x gtceu:smd_capacitor',
            '2x gtceu:smd_transistor',
            '4x gtceu:titanium_ingot',
        )
        .itemOutputs(
            'kubejs:animated/guicomptwo'
        )
        .duration(2000)
        .EUt(1680)

    event.recipes.gtceu.circuit_assembler('guidancecompthree')
        .itemInputs(
            '2x #gtceu:circuits/ev',
            '16x gtceu:smd_capacitor',
            '4x gtceu:smd_transistor',
            '4x gtceu:smd_inductor',
            '8x gtceu:titanium_ingot',
        )
        .itemOutputs(
            'kubejs:animated/guicompthree'
        )
        .duration(2000)
        .EUt(1680)

})