ServerEvents.recipes((event) => {

    event.recipes.gtceu.bender('deshfoilget')
        .itemInputs(
            'ad_astra:desh_ingot'
        )
        .itemOutputs(
            '4x kubejs:deshfoil'
        )
        .duration(200)
        .EUt(480)
        .circuit(10)

})