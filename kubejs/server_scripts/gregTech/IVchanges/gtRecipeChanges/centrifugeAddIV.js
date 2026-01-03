ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('gettheoressssss')
        .itemInputs(
            'kubejs:eidust'
        )
        .chancedOutput('gtceu:raw_cooperite', 10, 0)
        .chancedOutput('gtceu:raw_scheelite', 10, 0)
        .chancedOutput('gtceu:raw_pentlandite', 10, 0)
        .chancedOutput('gtceu:raw_topaz', 10, 0)
        .chancedOutput('gtceu:raw_apatite', 10, 0)
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV])

});