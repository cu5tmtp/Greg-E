ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler()
        .itemInputs(
            'kubejs:alkhalaclaw',
            'kubejs:deleriancoin',
            'kubejs:draeneiwood'
        )
        .itemOutputs(
            'kubejs:scepterofsand'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(1500)
        .circuit(1)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'minecraft:sand'
        )
        .inputFluids(
            'minecraft:water 250'
        )
        .notConsumable(
            'kubejs:scepterofsand'
        )
        .itemOutputs(
            'gtceu:moving_sand_dust'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(150)

    event.recipes.gtceu.voidminer('voidustdrillfor2')
        .inputFluids(
            'kubejs:deepdrill 1000'
        )
        .itemInputs(
            'gtceu:moving_sand_dust'
        )
        .notConsumable(
            'gtceu:glass_lens'
        )
        .itemOutputs(
            '3x kubejs:voiddust'
        )
        .duration(50)
        .EUt(GTValues.VA[GTValues.EV])
        
})