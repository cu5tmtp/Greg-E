ServerEvents.recipes(event => {

    event.recipes.gtceu.large_chemical_reactor('get1245terrablabla')
        .inputFluids(
            'gtceu:heavy_fuel 532'
        )
        .itemInputs(
            'gtceu:p_xylene_dust'
        )
        .outputFluids(
            'gtceu:tetramethylbenzene 288'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.large_chemical_reactor('getvandiumoxide')
        .inputFluids(
            'gtceu:oxygen 720'
        )
        .itemInputs(
            '2x gtceu:vanadium_dust'
        )
        .outputFluids(
            'gtceu:vanadium_oxide 532'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.large_chemical_reactor('getpmda')
        .inputFluids(
            'gtceu:vanadium_oxide 532',
            'gtceu:tetramethylbenzene 532'
        )
        .outputFluids(
            'gtceu:pmda 288'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.large_chemical_reactor('getdiphenylether')
        .inputFluids(
            'gtceu:phenol 532',
            'gtceu:chlorobenzene 532'
        )
        .outputFluids(
            'gtceu:diphenyl_ether 288'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.large_chemical_reactor('getddinitrodiphenylether')
        .inputFluids(
            'gtceu:diphenyl_ether 144',
            'gtceu:nitric_acid 288'
        )
        .outputFluids(
            'gtceu:dinitrodiphenyl_ether 288'
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.large_chemical_reactor('get44odafinally')
        .inputFluids(
            'gtceu:dinitrodiphenyl_ether 288',
            'gtceu:hydrogen 532'
        )
        .outputFluids(
            'gtceu:44oda 288'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.large_chemical_reactor('getthelastshit')
        .inputFluids(
            'gtceu:pmda 532',
            'gtceu:44oda 1064'
        )
        .outputFluids(
            'gtceu:pdc44o 532'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.ZPM])



})