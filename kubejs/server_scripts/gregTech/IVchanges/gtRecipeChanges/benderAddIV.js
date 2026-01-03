ServerEvents.recipes((event) => {

    event.recipes.gtceu.bender('gettheforgfoil')
        .itemInputs(
            'undergarden:forgotten_ingot'
        )
        .itemOutputs(
            'kubejs:forgfoil'
        )
        .duration(30)
        .circuit(10)
        .EUt(GTValues.VA[GTValues.IV])

});