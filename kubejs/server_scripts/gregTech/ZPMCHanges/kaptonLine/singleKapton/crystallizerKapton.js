ServerEvents.recipes(event => {

    event.recipes.gtceu.autoclave('getpxylen')
        .inputFluids(
            'gtceu:dimethylbenzene 532'
        )
        .itemOutputs(
            'gtceu:p_xylene_dust'
        )
        .outputFluids(
            'gtceu:dimethylbenzene 144'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(14)

})