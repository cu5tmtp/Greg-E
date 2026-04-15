ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('gettheoressssss')
        .itemInputs(
            'kubejs:eidust'
        )
        .chancedOutput('gtceu:raw_cooperite', 10, 0)
        .chancedOutput('gtceu:raw_scheelite', 10, 0)
        .chancedOutput('gtceu:raw_pentlandite', 10, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.recipes.gtceu.centrifuge('gettheoressssss2')
        .itemInputs(
            'kubejs:eidust'
        )
        .chancedOutput('gtceu:raw_topaz', 10, 0)
        .chancedOutput('gtceu:raw_apatite', 10, 0)
        .chancedOutput('gtceu:raw_pyrochlore', 10, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(2)

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
        .circuit(3)



});