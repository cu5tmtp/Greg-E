ServerEvents.recipes((event) => {

    event.recipes.gtceu.macerator()
        .itemInputs(
            '8x potato'
        )
        .itemOutputs(
            '4x kubejs:mashedpotato',
            '2x gtceu:starch_dust'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'gtceu:starch_dust',
            'sugar'
        )
        .inputFluids(
            'minecraft:water 1000'
        )
        .outputFluids(
            'gtceu:watery_glucose_syrup 1500'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(150)

    event.recipes.gtceu.fluid_heater()
        .inputFluids(
            'gtceu:watery_glucose_syrup 1000'
        )
        .outputFluids(
            'gtceu:glucose_syrup 750'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(350)
        .circuit(1)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'gtceu:cocoa_dust'
        )
        .inputFluids(
            'minecraft:milk 500'
        )
        .outputFluids(
            "gtceu:chocolate_milk 750"
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'gtceu:cocoa_dust'
        )
        .inputFluids(
            'minecraft:milk 500'
        )
        .outputFluids(
            "gtceu:chocolate_milk 750"
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(250)
        .circuit(1)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'minecraft:sugar'
        )
        .inputFluids(
            'gtceu:glucose_syrup 1000',
            'minecraft:milk 500'
        )
        .outputFluids(
            "gtceu:caramel_mixture 900"
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)
        .circuit(1)

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'minecraft:sugar'
        )
        .inputFluids(
            "gtceu:caramel_mixture 500"
        )
        .outputFluids(
            "gtceu:caramel 350"
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
        .circuit(1)

    event.recipes.gtceu.chemical_bath()
        .itemInputs(
            'minecraft:ice'
        )
        .inputFluids(
            "gtceu:caramel 500"
        )
        .outputFluids(
            "gtceu:soft_caramel 500"
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

    event.recipes.gtceu.electrolyzer()
        .itemInputs(
            'egg'
        )
        .outputFluids(
            'gtceu:eggwhite 250',
            'gtceu:eggyolk 50'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'kubejs:crushedpeanuts',
            'minecraft:sugar'
        )
        .inputFluids(
            "gtceu:eggwhite 100"
        )
        .outputFluids(
            "gtceu:nougat 1000"
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
        .circuit(1)

    event.recipes.gtceu.fluid_solidifier()
        .inputFluids(
            "gtceu:nougat 250"
        )
        .itemOutputs(
            'kubejs:nougatplate'
        )
        .notConsumable('gtceu:plate_casting_mold')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

    event.recipes.gtceu.candyomatic()
        .itemInputs(
            'kubejs:nougatplate',
            'kubejs:crushedpeanuts'
        )
        .inputFluids(
            "gtceu:soft_caramel 100",
            'gtceu:chocolate_milk 100'
        )
        .itemOutputs(
            'kubejs:choccybar'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(450)
        .circuit(1)

    event.recipes.gtceu.macerator()
        .itemInputs(
            'kubejs:peanuts'
        )
        .itemOutputs(
            '4x kubejs:crushedpeanuts'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
})