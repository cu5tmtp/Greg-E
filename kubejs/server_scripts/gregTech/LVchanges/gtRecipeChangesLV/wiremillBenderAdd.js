ServerEvents.recipes((event) => {

    event.recipes.gtceu.bender('manasteelfoil')
        .itemInputs(
            'botania:manasteel_ingot'
        )
        .itemOutputs(
            '4x kubejs:manasteelfoil'
        )
        .duration(70)
        .EUt(24)
        .circuit(10)

    
})