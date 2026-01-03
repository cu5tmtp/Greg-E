ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('deepslateearth_chromium')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            'gtceu:chromium_dust'
        )
        .chancedOutput('kubejs:senironspeck', 2500, 0)
        .chancedOutput('kubejs:silverspeck', 2500, 0)
        .chancedOutput('kubejs:lapisspeck', 2500, 0)
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
        .chancedOutput('kubejs:senironspeck', 2500, 0)
        .chancedOutput('kubejs:silverspeck', 2500, 0)
        .chancedOutput('kubejs:lapisspeck', 2500, 0)
        .duration(100)
        .EUt(120)
        .circuit(2)

    event.recipes.gtceu.centrifuge('deepslateearth_emerald')
        .itemInputs(
            'kubejs:deepslateearth'
        )
        .itemOutputs(
            'minecraft:emerald'
        )
        .chancedOutput('kubejs:senironspeck', 2500, 0)
        .chancedOutput('kubejs:silverspeck', 2500, 0)
        .chancedOutput('kubejs:lapisspeck', 2500, 0)
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
        .chancedOutput('kubejs:senironspeck', 2500, 0)
        .chancedOutput('kubejs:silverspeck', 2500, 0)
        .chancedOutput('kubejs:lapisspeck', 2500, 0)
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
        .chancedOutput('kubejs:senironspeck', 2500, 0)
        .chancedOutput('kubejs:silverspeck', 2500, 0)
        .chancedOutput('kubejs:lapisspeck', 2500, 0)
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
        .chancedOutput('kubejs:senironspeck', 2500, 0)
        .chancedOutput('kubejs:silverspeck', 2500, 0)
        .chancedOutput('kubejs:lapisspeck', 2500, 0)
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
        .chancedOutput('kubejs:senironspeck', 2500, 0)
        .chancedOutput('kubejs:silverspeck', 2500, 0)
        .chancedOutput('kubejs:lapisspeck', 2500, 0)
        .duration(100)
        .EUt(120)
        .circuit(7)

});