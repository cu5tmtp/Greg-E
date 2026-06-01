ServerEvents.recipes((event) => {

    event.recipes.gtceu.mixer('getlithium6')
        .itemInputs(
            '2x gregecore:lithium_hydroxide_dust',
            '2x gregecore:lithium_amalgamation_dust'
        )
        .itemOutputs(
            '3x kubejs:li'
        )
        .duration(100)
        .EUt(480)

})