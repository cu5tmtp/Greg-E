ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer('getmixeddinebulon')
        .inputFluids(
            'gtceu:nebulon_omega_dissolved 144',
            'gtceu:naquadron_delta 432'
        )
        .itemOutputs(
            '2x gtceu:sodium_hydroxide_dust'
        )
        .outputFluids(
            'gtceu:naquadron_zeta 144'
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(4)

    event.recipes.gtceu.zerogravmixer('getfluoronaquadicacid')
        .inputFluids(
            'gtceu:fluorine 432',
            'gtceu:hydrogen 576',
            'gtceu:naquadria 432'
        )
        .outputFluids(
            'gtceu:fluoronaquadic_acid 288'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(4)

    event.recipes.gtceu.mixer('getdinebulonomni')
        .inputFluids(
            'gtceu:excited_naquadic_solution 432',
            'gtceu:naquadron_zeta 144'
        )
        .outputFluids(
            'gtceu:dinebulon_zeta_omni_fluid 288'
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(4)

})