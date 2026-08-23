ServerEvents.recipes((event) => {

    event.recipes.gtceu.gccrafting()
        .itemInputs(
            '16x kubejs:euclid/euclid_circuit'
        )
        .itemOutputs(
            'kubejs:mirrorofkalandra'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(350)
        .addData("insertedc", "genesiscruciblecaseone")

    event.recipes.gtceu.gccrafting()
        .itemInputs(
            'kubejs:mirrorofkalandra',
            '4x kubejs:euclid/euclid_circuit'
        )
        .itemOutputs(
            'kubejs:unstabledrillhead'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(350)
        .addData("insertedc", "genesiscruciblecaseone")

})