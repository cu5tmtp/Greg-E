ServerEvents.recipes((event) => {

    event.recipes.gtceu.gccrafting()
        .itemInputs(
            'gregecore:unstable'
        )
        .itemOutputs(
            'kubejs:unstabledrillhead'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(350)
        .addData("insertedc", "genesiscruciblecaseone")

})