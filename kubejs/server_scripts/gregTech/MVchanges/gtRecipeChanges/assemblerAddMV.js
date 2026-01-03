ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler('sprinklerrod')
        .itemInputs(
            '3x gtceu:iron_rod',
            'gtceu:long_iron_rod',
            '3x gtceu:rubber_ring'
        )
        .itemOutputs(
            'kubejs:sprinklerrod'
        )
        .duration(300)
        .EUt(120)
        .circuit(1)

    event.recipes.gtceu.assembler('heatcoil')
        .itemInputs(
            '64x gtceu:fine_copper_wire',
            'gtceu:long_iron_rod'
        )
        .itemOutputs(
            'kubejs:heatcoil'
        )
        .duration(300)
        .EUt(120)
        .circuit(1)

    event.recipes.gtceu.assembler('heatelement')
        .itemInputs(
            '4x kubejs:heatcoil',
            'gtceu:steel_frame',
            '4x gtceu:rubber_ingot'

        )
        .itemOutputs(
            'kubejs:heatingel'
        )
        .duration(300)
        .EUt(120)
        .circuit(1)

    event.recipes.gtceu.assembler('sprinkler')
        .itemInputs(
            'kubejs:sprinklerrod',
            'gtceu:steel_frame',
            '4x gtceu:rubber_ingot',
            'minecraft:water_bucket'

        )
        .itemOutputs(
            'kubejs:sprinkler'
        )
        .duration(300)
        .EUt(120)
        .circuit(1)

    event.recipes.gtceu.assembler('researchlens')
        .itemInputs(
            'gtceu:glass_lens',
            'gtceu:steel_frame',
            '4x gtceu:rubber_ingot'
        )
        .itemOutputs(
            'kubejs:researchlens'
        )
        .duration(300)
        .EUt(120)
        .circuit(1)
    
});