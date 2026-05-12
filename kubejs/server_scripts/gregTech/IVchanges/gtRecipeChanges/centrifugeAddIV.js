ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('gettheoressssss2')
        .itemInputs(
            'kubejs:eidust'
        )
        .chancedOutput('gtceu:raw_topaz', 200, 0)
        .chancedOutput('gtceu:raw_apatite', 200, 0)
        .chancedOutput('gtceu:raw_pyrochlore', 200, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.recipes.gtceu.centrifuge('gettheoressssss3')
        .itemInputs(
            'kubejs:eidust'
        )
        .itemOutputs(
            'gtceu:purified_galena_ore',
            'gtceu:purified_sphalerite_ore'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(2)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:eidust'
        )
        .itemOutputs(
            '2x gtceu:raw_cooperite'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(3)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:eidust'
        )
        .itemOutputs(
            '2x gtceu:raw_scheelite'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(4)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:eidust'
        )
        .itemOutputs(
            '2x gtceu:raw_pentlandite'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(5)

});