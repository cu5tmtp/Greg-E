ServerEvents.recipes(event => {

    event.recipes.gtceu.advanced_fusion('getslurryunder5000')
        .inputFluids(
            'gtceu:nebulon_omega_dissolved 1600',
            'gtceu:naquadah 3200'
        )
        .outputFluids(
            'gtceu:nebulon_gamma_slurry 1600'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .addData('heat_level', 3200)

    event.recipes.gtceu.advanced_fusion('getslurryover5000')
        .inputFluids(
            'gtceu:nebulon_omega_dissolved 1600',
            'gtceu:naquadria 3200'
        )
        .outputFluids(
            'gtceu:naquadron_delta_plasma 1600'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .addData('heat_level', 6400)

    event.recipes.gtceu.advanced_fusion('getexcitednaquadicsolution')
        .inputFluids(
            'gtceu:fluoronaquadic_acid 1440'
        )
        .outputFluids(
            'gtceu:excited_naquadic_solution 1440'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .addData('heat_level', 5200)
        


})