ServerEvents.recipes((event) => {

    //Add gallium recipe from bauxite dust
    event.recipes.gtceu.chemical_bath('gallium_from_dust')
        .itemInputs(
            'gtceu:bauxite_dust'
        )
        .inputFluids(
            'gtceu:sodium_persulfate 100'
        )
        .itemOutputs(
            'gtceu:gallium_dust'
        )
        .duration(150)
        .EUt(30)

})