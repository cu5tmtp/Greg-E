ServerEvents.recipes(event => {

    event.recipes.gtceu.large_chemical_reactor('getdissolvednebulon')
        .itemInputs(
            'gtceu:raw_nebulon_omega'
        )
        .inputFluids(
            'gtceu:sodium_hydroxide 576'
        )
        .outputFluids(
            'gtceu:nebulon_omega_dissolved 720'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)
        .circuit(12)

    event.recipes.gtceu.large_chemical_reactor('getnebulonalpha')
        .inputFluids(
            'gtceu:nebulon_zeta 288',
            'gtceu:nebulon_gamma 144'
        )
        .outputFluids(
            'gtceu:nebulon_alpha 144',
            'gtceu:fluoronaquadic_acid 72'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)
        .circuit(12)

})