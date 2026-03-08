ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('deepslateearth_chromium')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            'gtceu:chromium_dust'
        )
        .chancedOutput('kubejs:senironspeck', 5000, 0)
        .chancedOutput('kubejs:lapisspeck', 5000, 0)
        .duration(100)
        .EUt(120)
        .circuit(1)

    event.recipes.gtceu.centrifuge('deepslateearth_ruby')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            'gtceu:ruby_gem'
        )
        .chancedOutput('kubejs:senironspeck', 5000, 0)
        .chancedOutput('kubejs:lapisspeck', 5000, 0)
        .duration(100)
        .EUt(120)
        .circuit(2)

    event.recipes.gtceu.centrifuge('deepslateearth_emerald')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .chancedOutput('minecraft:emerald', 100, 0)
        .chancedOutput('kubejs:senironspeck', 5000, 0)
        .chancedOutput('kubejs:lapisspeck', 5000, 0)
        .duration(100)
        .EUt(120)
        .circuit(3)

    event.recipes.gtceu.centrifuge('deepslateearth_sapphire')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            'gtceu:sapphire_gem'
        )
        .chancedOutput('kubejs:senironspeck', 5000, 0)
        .chancedOutput('kubejs:lapisspeck', 5000, 0)
        .duration(100)
        .EUt(120)
        .circuit(4)

    event.recipes.gtceu.centrifuge('deepslateearth_zinc')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            '3x gtceu:zinc_dust'
        )
        .chancedOutput('kubejs:senironspeck', 5000, 0)
        .chancedOutput('kubejs:lapisspeck', 5000, 0)
        .duration(100)
        .EUt(120)
        .circuit(5)

    event.recipes.gtceu.centrifuge('deepslateearth_phosphorus')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            '2x gtceu:phosphorus_dust'
        )
        .chancedOutput('kubejs:senironspeck', 5000, 0)
        .chancedOutput('kubejs:lapisspeck', 5000, 0)
        .duration(100)
        .EUt(120)
        .circuit(6)

    event.recipes.gtceu.centrifuge('deepslateearth_vanadium')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            'gtceu:vanadium_dust'
        )
        .chancedOutput('kubejs:senironspeck', 5000, 0)
        .chancedOutput('kubejs:lapisspeck', 5000, 0)
        .duration(100)
        .EUt(120)
        .circuit(7)

    event.recipes.gtceu.centrifuge('deepslateearth_chromium2')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            '2x gtceu:chromium_dust'
        )
        .duration(50)
        .EUt(120)
        .circuit(8)

    event.recipes.gtceu.centrifuge('deepslateearth_ruby2')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            '2x gtceu:ruby_gem'
        )
        .duration(50)
        .EUt(120)
        .circuit(9)

    event.recipes.gtceu.centrifuge('deepslateearth_emerald2')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .chancedOutput('minecraft:emerald', 200, 0)
        .duration(50)
        .EUt(120)
        .circuit(10)

    event.recipes.gtceu.centrifuge('deepslateearth_sapphire2')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            '2x gtceu:sapphire_gem'
        )
        .duration(100)
        .EUt(120)
        .circuit(11)

    event.recipes.gtceu.centrifuge('deepslateearth_zinc2')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            '6x gtceu:zinc_dust'
        )
        .duration(100)
        .EUt(120)
        .circuit(12)

    event.recipes.gtceu.centrifuge('deepslateearth_phosphorus2')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            '4x gtceu:phosphorus_dust'
        )
        .duration(50)
        .EUt(120)
        .circuit(13)

    event.recipes.gtceu.centrifuge('deepslateearth_vanadium2')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            '2x gtceu:vanadium_dust'
        )
        .duration(50)
        .EUt(120)
        .circuit(14)

});