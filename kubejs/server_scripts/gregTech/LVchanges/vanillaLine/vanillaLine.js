ServerEvents.recipes((event) => {

    event.recipes.botania.mana_infusion(
        'kubejs:vanilla',
        'minecraft:cocoa_beans',
        100,
        'botania:conjuration_catalyst'
    )

    event.recipes.gtceu.macerator()
        .itemInputs(
            'kubejs:vanilla'
        )
        .itemOutputs(
            'gtceu:vanilla_pod_dust'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'gtceu:vanilla_pod_dust'
        )
        .inputFluids(
            'gtceu:ethanol 350',
            'minecraft:water 650'
        )
        .outputFluids(
            'gtceu:impure_vanilla_extract 1000'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
        .circuit(4)

    event.recipes.gtceu.distillery()
        .inputFluids(
            'gtceu:impure_vanilla_extract 750'
        )
        .itemOutputs(
            'gtceu:bio_chaff'
        )
        .outputFluids(
            'gtceu:vanilla_extract 650'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
        .circuit(1)

        event.recipes.gtceu.mixer('commonearth_obtain2')
        .itemInputs(
            '2x gtceu:iron_dust',
            '2x gtceu:copper_dust',
            'minecraft:redstone'
        )
        .inputFluids(
            'gtceu:vanilla_extract 250'
        )
        .itemOutputs(
            '4x kubejs:commonearth'
        )
        .duration(100)
        .EUt(15)
        .circuit(1)

})