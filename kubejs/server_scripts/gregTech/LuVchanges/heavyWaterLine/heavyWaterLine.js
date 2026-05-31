ServerEvents.recipes((event) => {

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'minecraft:water 1000',
            'gtceu:hydrogen_sulfide 350'
        )
        .outputFluids(
            'gtceu:semi_heavy_water 850',
            'gtceu:depleted_hydrogen_sulfide 250'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(350)
        .circuit(5)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:semi_heavy_water 800',
            'gtceu:depleted_hydrogen_sulfide 150'
        )
        .outputFluids(
            'gtceu:heavy_water 650',
            'gtceu:hydrogen_sulfide 150'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(350)
        .circuit(5)

    event.remove('gtceu:centrifuge/hydrogen_separation')
    event.remove({id: 'gtceu:centrifuge/ender_air_separation'})
    event.recipes.gtceu.electrolyzer()
        .inputFluids(
            'gtceu:heavy_water 500'
        )
        .outputFluids(
            'gtceu:deuterium 400',
            'gtceu:oxygen 100'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(150)

    event.recipes.gtceu.specializedcrystallizer('crystallizedgasses2')
        .itemInputs(
            '2x kubejs:eidust'
        )
        .inputFluids(
            'gtceu:deuterium 150'
        )
        .itemOutputs(
            '3x kubejs:gassydust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(2)

})