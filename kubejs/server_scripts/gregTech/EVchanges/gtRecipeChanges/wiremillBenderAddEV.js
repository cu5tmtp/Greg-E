ServerEvents.recipes((event) => {

    event.recipes.gtceu.bender('malachitefoilget')
        .itemInputs(
            'botanicalextramachinery:malachite_ingot'
        )
        .itemOutputs(
            '4x kubejs:malachitefoil'
        )
        .duration(200)
        .EUt(1680)
        .circuit(10)

    event.recipes.gtceu.wiremill('twoxmalachitecableget')
        .itemInputs(
            'botanicalextramachinery:malachite_ingot'
        )
        .itemOutputs(
            'kubejs:twoxmalachitecable'
        )
        .duration(200)
        .EUt(1680)
        .circuit(2)
})