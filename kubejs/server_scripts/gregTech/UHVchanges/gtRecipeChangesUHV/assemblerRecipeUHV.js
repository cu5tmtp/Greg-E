ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler('getatomiccasing')
        .itemInputs(
            '6x gtceu:neutronium_plate',
            'gtceu:neutronium_frame',
            'minecraft:purple_dye'
        )
        .itemOutputs(
            '4x gtceu:atomic_casing'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(6)

    event.recipes.gtceu.assembler('getatomicengine')
        .itemInputs(
            '2x gtceu:tungsten_steel_rotor',
            '4x gtceu:neutronium_normal_fluid_pipe',
            'gtceu:neutronium_frame',
            'minecraft:purple_dye'
        )
        .itemOutputs(
            '4x gregecore:atomic_engine_intake'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('getlearningchip')
        .itemInputs(
            '8x #gtceu:circuits/uhv',
            '32x gtceu:uhpic_chip',
            '8x gtceu:neutronium_ingot'
        )
        .itemOutputs(
            'kubejs:learningchip'
        )
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UHV])
        
})