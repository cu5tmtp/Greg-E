ServerEvents.recipes((event) => {

    event.recipes.gtceu.pyrolyse_oven()
        .inputFluids(
            'gtceu:coal_tar 1000'
        )
        .outputFluids(
            'gtceu:anthracene 850'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(500)
        .circuit(1)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:anthracene 500',
            'gtceu:air 1000'
        )
        .outputFluids(
            'gtceu:anthraquinone 750'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(160)
        .circuit(5)

    event.recipes.gtceu.large_chemical_reactor()
        .notConsumable('gtceu:palladium_dust')
        .inputFluids(
            'gtceu:anthraquinone 500',
            'gtceu:hydrogen 1000'
        )
        .outputFluids(
            'gtceu:anthrahydroquinone 750'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(150)
        .circuit(5)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:anthrahydroquinone 500',
            'gtceu:oxygen 800'
        )
        .outputFluids(
            'gtceu:anthraquinone 200',
            'gtceu:crude_hydrogen_peroxide 1000'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(130)
        .circuit(5)

    event.remove({id: 'gtceu:large_chemical_reactor/hydrogen_peroxide'})
    event.remove({id: 'gtceu:chemical_reactor/hydrogen_peroxide'})
    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:crude_hydrogen_peroxide 1000'
        )
        .outputFluids(
            'minecraft:water 200',
            'gtceu:hydrogen_peroxide 700',
            'gtceu:waste_water 100'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:waste_water 1000'
        )
        .itemOutputs(
            'gtceu:phosphorus_dust'
        )
        .outputFluids(
            'gtceu:hydrogen 350',
            'gtceu:oxygen 400'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(400)

    event.recipes.gtceu.runecarver('activateeeeeeeee2')
        .itemInputs(
            'kubejs:rune'
        )
        .inputFluids(
            'gtceu:hydrogen_peroxide 150'
        )
        .itemOutputs(
            '3x kubejs:activatedrune'
        )
        .duration(50)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(2)

})